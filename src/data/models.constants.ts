import type { ModelCard, ModelCategory } from "@/data/site-content.types";
import { getAssetUrl } from "@/lib/get-asset-url";

export const MODEL_TABS: readonly Exclude<ModelCategory, "all models">[] = [
  "moped",
  "automatic",
  "street",
  "big bikes"
] as const;

export const DEFAULT_MODEL_CATEGORY: ModelCategory = "all models";

export const MODELS: readonly ModelCard[] = [
  {
    alt: "yzf-r15m",
    category: "street",
    detailHref: "#featured-model",
    engine: "155cc",
    image: getAssetUrl("hlym/generated-1772088891491.png"),
    name: "yzf-r15m",
    power: "19.3 ps",
    price: "rm14,998",
    summary:
      "track-inspired bodywork and lightweight control for riders who want a sharp everyday supersport.",
    weight: "137 kg"
  },
  {
    alt: "nvx 155",
    category: "automatic",
    detailHref: "#featured-model",
    engine: "155cc",
    image: getAssetUrl("hlym/generated-1772088898269.png"),
    name: "nvx 155",
    power: "15.4 ps",
    price: "rm11,998",
    summary:
      "premium automatic comfort with connected urban practicality and a rider-friendly daily posture.",
    weight: "127 kg"
  },
  {
    alt: "mt-09",
    category: "big bikes",
    detailHref: "#featured-model",
    engine: "890cc",
    image: getAssetUrl("hlym/generated-1772088892507.png"),
    name: "mt-09",
    power: "119 ps",
    price: "rm57,998",
    summary:
      "hyper naked aggression with torque-rich power delivery and electronics tuned for harder riding.",
    weight: "193 kg"
  },
  {
    alt: "y15zr",
    category: "moped",
    compact: true,
    detailHref: "#featured-model",
    engine: "149cc",
    image: getAssetUrl("hlym/generated-1772088894678.png"),
    name: "y15zr",
    power: "15.4 ps",
    price: "rm9,498",
    summary:
      "a compact underbone built for quick city moves, proven reliability, and strong daily-use value.",
    weight: "115 kg"
  },
  {
    alt: "tmax 560",
    category: "big bikes",
    compact: true,
    detailHref: "#featured-model",
    engine: "562cc",
    image: getAssetUrl("hlym/generated-1772088896897.png"),
    name: "tmax 560",
    power: "47.6 ps",
    price: "rm75,888",
    summary:
      "maxi scooter comfort with big-bike road presence for riders who want premium touring convenience.",
    weight: "221 kg"
  }
] as const;
