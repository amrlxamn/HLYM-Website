import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(new URL("../package.json", import.meta.url));
const { JSDOM } = require("jsdom");
const cdn = "https://cdn.prod.website-files.com/6a20eb17fa7f874df9ab69d2/";
const target = new URL(
  "../src/features/product-page/constants/product-official-features.json",
  import.meta.url
);
const hotspotsTarget = new URL(
  "../src/features/product-page/constants/product-official-hotspots.json",
  import.meta.url
);
const slugs = [
  "xsr155",
  "xmax-300",
  "y16zr",
  "y15zr",
  "135lc-fi",
  "yzf-r25",
  "tmax",
  "tenere-700",
  "pg-1",
  "tracer-9-gt",
  "nmax",
  "ego-avantiz",
  "ez115",
  "ego-gear",
  "mt09",
  "nvx",
  "r15m",
  "xmax-250",
  "yseries",
  "mt-15",
  "y16zr-6mro-limited-edition",
  "mt25",
  "y16zr-doxou"
];
const clean = (value) => value?.replace(/\s+/g, " ").trim() ?? "";

const landing = await (await fetch("https://www.yamaha-motor.com.my/product-content/nvx")).text();
const start = landing.indexOf("var m={");
const end = landing.indexOf("};var f=", start);
if (start < 0 || end < 0) throw new Error("Official product mirror map not found");
const mirrors = Object.fromEntries(
  [...landing.slice(start, end).matchAll(/'([^']+)':'([^']+\.html)'/g)].map((match) => [
    match[1],
    match[2]
  ])
);

const cmsDump = process.argv[2];
if (!cmsDump)
  throw new Error(
    "Pass the official Webflow Product Features collection response as the first argument"
  );
const cms = readFileSync(cmsDump, "utf8")
  .trim()
  .split(/\n\s*\n/)
  .flatMap((line) => JSON.parse(line).result.items.map((item) => item.fieldData));
const features = {};
const hotspots = {};

for (const slug of slugs) {
  const key = slug === "mt09" ? "mt-09" : slug === "mt25" ? "mt-25" : slug;
  const response = await fetch(cdn + mirrors[slug], { signal: AbortSignal.timeout(25000) });
  if (!response.ok && key !== "ez115") throw new Error(`${key} mirror: HTTP ${response.status}`);
  if (response.ok) {
    const html = (await response.text()).replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");
    const doc = new JSDOM(html).window.document;
    const hotspot = doc.querySelector(".ult_hotspot_container");
    hotspots[key] = {
      image: hotspot?.querySelector(".ult_hotspot_image")?.getAttribute("src") ?? "",
      points: [...(hotspot?.querySelectorAll(".ult-hotspot-item[style]") ?? [])].map((point) => {
        const style = point.getAttribute("style") ?? "";
        const tooltip = new JSDOM(
          point.querySelector(".hotspot-tooltip-content")?.textContent ?? ""
        ).window.document;
        const title = clean(
          tooltip.querySelector("strong")?.textContent ?? tooltip.body.textContent
        );
        return {
          x: Number(Number(style.match(/left:\s*calc\(([\d.]+)%/)?.[1]).toFixed(2)),
          y: Number(Number(style.match(/top:calc\(([\d.]+)%/)?.[1]).toFixed(2)),
          title,
          description: clean(tooltip.body.textContent).replace(title, "").trim()
        };
      })
    };
    if (
      !hotspots[key].image ||
      !hotspots[key].points.length ||
      hotspots[key].points.some(
        (point) => !point.title || !Number.isFinite(point.x) || !Number.isFinite(point.y)
      )
    ) {
      throw new Error(`${key} missing hotspot image, label, or coordinates`);
    }
    const sections = [...doc.querySelectorAll(".section_inner_margin")]
      .filter((section) => section.querySelector("h2"))
      .map((section) => {
        const [eyebrow, ...rest] = [...section.querySelectorAll("h2")].map((heading) =>
          clean(heading.textContent)
        );
        const image = section.querySelector("img[src]");
        return {
          eyebrow: rest.length && eyebrow ? eyebrow : undefined,
          title: rest.length ? rest.join(" ") : eyebrow,
          description: [...section.querySelectorAll("p")]
            .map((p) => clean(p.textContent))
            .filter(Boolean)
            .join(" "),
          image: {
            alt: clean(image?.alt) || [eyebrow, ...rest].filter(Boolean).join(" "),
            src: image?.getAttribute("src") ?? ""
          }
        };
      })
      .filter(
        (item) =>
          item.title &&
          item.image.src &&
          (item.description || key === "nvx") &&
          item.title.toLowerCase() !== "icons"
      );
    features[key] = [
      ...new Map(sections.map((item) => [`${item.eyebrow}/${item.title}`, item])).values()
    ];
  } else {
    features[key] = cms
      .filter((item) => item["product-key"] === key)
      .sort((a, b) => a["display-order"] - b["display-order"])
      .map((item) => ({
        title: item["feature-title"],
        description: clean(new JSDOM(item["feature-copy"] ?? "").window.document.body.textContent),
        image: {
          alt: item["feature-image"].alt || item["feature-title"],
          src: item["feature-image"].url
        }
      }));
    // EZ115's mirror is blocked; its specification image is in the official Product Content CMS.
    hotspots[key] = {
      image:
        "https://cdn.prod.website-files.com/6a448abbfd3494482fc8242e/6a59b73cb9f2a044463b0e2a_25EZ115-Specification.png",
      points: []
    };
  }
  console.log(
    key,
    features[key].length,
    "features",
    "official CMS:",
    cms.filter((item) => item["product-key"] === key).length
  );
  if (!features[key].length) throw new Error(`${key} has no extracted features`);
}

writeFileSync(target, JSON.stringify(features, null, 2) + "\n");
writeFileSync(hotspotsTarget, JSON.stringify(hotspots, null, 2) + "\n");
