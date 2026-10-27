import { PRODUCT_CURTAIN_MODELS } from "@/components/header/product-curtain-models.constants";
import { getAssetUrl } from "@/lib/get-asset-url";
// Official product mirrors supply the frames and tables; EZ115 uses its official CMS record.
import officialFrames from "./product-official-360-frames.json";
import officialSpecifications from "./product-official-specifications.json";
import { PRODUCT_CATALOG_CONTENT } from "./product-catalog-content.constants";
import { PRODUCT_CATALOG_COLORS } from "./product-catalog-colors.constants";
import { PRODUCT_COLOR_OPTIONS } from "./product-colors.constants";
import { PRODUCT_PAGE_MODELS } from "./product-page-models.constants";
import type { ProductPageModel } from "../types/product-page.types";

const catalogOrder = [
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
  "mt-09",
  "nvx",
  "r15m",
  "xmax-250",
  "yseries",
  "mt-15",
  "y16zr-6mro-limited-edition",
  "mt-25",
  "y16zr-doxou"
] as const;

// Index of the right-facing side view in each official rotation sequence.
export const PRODUCT_ROTATION_START_INDEX: Record<keyof typeof officialFrames, number> = {
  xsr155: 2,
  "xmax-300": 6,
  y16zr: 2,
  y15zr: 6,
  "135lc-fi": 7,
  "yzf-r25": 6,
  tmax: 0,
  "tenere-700": 6,
  "pg-1": 1,
  "tracer-9-gt": 1,
  nmax: 1,
  "ego-avantiz": 2,
  ez115: 6,
  "ego-gear": 6,
  "mt-09": 1,
  nvx: 0,
  r15m: 0,
  "xmax-250": 0,
  yseries: 6,
  "mt-15": 2,
  "y16zr-6mro-limited-edition": 0,
  "mt-25": 0,
  "y16zr-doxou": 6
};

const curtainModels = Object.entries(PRODUCT_CURTAIN_MODELS).flatMap(([category, models]) =>
  models.map((model) => ({ ...model, category: category as ProductPageModel["category"] }))
);

export const PRODUCT_CATALOG = catalogOrder.map((slug) => {
  const curtain = curtainModels.find((model) => model.slug === slug);
  const content = PRODUCT_CATALOG_CONTENT[slug];
  const colors = slug === "nvx" ? PRODUCT_COLOR_OPTIONS : (PRODUCT_CATALOG_COLORS[slug] ?? []);
  const specifications = officialSpecifications[slug as keyof typeof officialSpecifications] ?? [];
  const frames = officialFrames[slug as keyof typeof officialFrames];
  const startIndex = PRODUCT_ROTATION_START_INDEX[slug];
  const rotationFrames =
    frames && startIndex ? [...frames.slice(startIndex), ...frames.slice(0, startIndex)] : frames;
  const name = curtain?.name ?? "YSERIES";
  const category = curtain?.category ?? "moped";
  const image = curtain?.image ?? content?.cover ?? "";
  const overview = content?.features.length
    ? content.features.map((item) => ({
        alt: `${name} — ${item.title}`,
        description: item.description,
        src: item.image.src,
        title: item.title
      }))
    : [{ alt: name, description: `Explore the Yamaha ${name}.`, src: image, title: name }];
  const stats = specifications
    .flatMap((group) => group.items)
    .filter((item) =>
      /displacement|sesaran|kuasa maksimum|maximum power|wet weight|berat isi|weight/i.test(
        item.label
      )
    )
    .slice(0, 3);
  const model: ProductPageModel =
    slug === "nvx"
      ? PRODUCT_PAGE_MODELS[0]!
      : {
          alt: `Yamaha ${name}`,
          category,
          ctaHref: "#product-accessories",
          ctaLabel: "Contact dealer",
          ...(rotationFrames ? { frames: rotationFrames } : {}),
          image: colors[0]?.image ?? content?.cover ?? image,
          name,
          posterLabel: name,
          ...(slug !== "yseries"
            ? {
                posterMark: {
                  alt: slug === "y16zr-doxou" ? "Yamaha Y16ZR mark" : `Yamaha ${name} mark`,
                  src: getAssetUrl(
                    slug === "mt-09" ? "hlym/MT-09-Logo.png" : `hlym/product-marks/${slug}.png`
                  )
                }
              }
            : {}),
          price: "",
          slug,
          specs: stats
        };

  return {
    category,
    colors,
    content,
    image,
    model,
    name,
    overview,
    slug,
    specifications
  };
});

export type ProductCatalogEntry = (typeof PRODUCT_CATALOG)[number];
