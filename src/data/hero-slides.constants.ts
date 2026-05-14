import type { HeroSlide } from "@/data/site-content.types";
import { getAssetUrl } from "@/lib/get-asset-url";

export const HERO_SLIDES: readonly HeroSlide[] = [
  {
    alt: "venom r1 superbike",
    ctaHref: "#models",
    ctaLabel: "explore model",
    description: "experience raw power meets precision engineering. 200hp of pure adrenaline.",
    eyebrow: "introducing the 2025 venom r1",
    image: getAssetUrl("hlym/generated-1771864038849.png"),
    indexLabel: "01",
    price: "rm110,000",
    stats: [
      { label: "hp", value: "200" },
      { label: "sec 0-100", value: "2.9" },
      { label: "km/h", value: "299" }
    ],
    titleAccent: "challenging",
    titleLead: "never stop",
    totalLabel: "03"
  },
  {
    alt: "mt-09 performance bike",
    ctaHref: "#featured-model",
    ctaLabel: "discover mt-09",
    description:
      "torque-rich acceleration, sharper electronics, and a hyper naked stance that owns the road.",
    eyebrow: "hyper naked performance",
    image: getAssetUrl("hlym/generated-1772089393521.png"),
    indexLabel: "02",
    price: "rm57,998",
    stats: [
      { label: "engine", value: "890cc" },
      { label: "power", value: "119 ps" },
      { label: "weight", value: "193 kg" }
    ],
    titleAccent: "of japan",
    titleLead: "dark side",
    totalLabel: "03"
  },
  {
    alt: "nmax premium scooter",
    ctaHref: "#featured-model",
    ctaLabel: "see urban range",
    description:
      "premium urban mobility with connected tech, practical comfort, and everyday " +
      "yamaha refinement.",
    eyebrow: "smart mobility redefined",
    image: getAssetUrl("hlym/generated-1772089340820.png"),
    indexLabel: "03",
    price: "rm9,998",
    stats: [
      { label: "engine", value: "155cc" },
      { label: "range", value: "300 km" },
      { label: "smart key", value: "yes" }
    ],
    titleAccent: "the city",
    titleLead: "own",
    totalLabel: "03"
  }
] as const;
