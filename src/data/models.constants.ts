import type { ModelCard, ModelCategory } from "@/data/site-content.types";
import { getAssetUrl } from "@/lib/get-asset-url";
import {
  MT_15_360_FRAMES,
  MT_09_360_FRAMES,
  NMAX_360_FRAMES,
  NVX_360_FRAMES,
  TMAX_360_FRAMES,
  XSR155_360_FRAMES,
  Y16ZR_R_360_FRAMES,
  Y15ZR_360_FRAMES
} from "./model-360-frames.constants";

export const MODEL_TABS: readonly Exclude<ModelCategory, "all models">[] = [
  "moped",
  "automatic",
  "street",
  "big bikes"
] as const;

export const DEFAULT_MODEL_CATEGORY: ModelCategory = "all models";

export const MODELS: readonly ModelCard[] = [
  {
    alt: "xsr155",
    category: "street",
    detailHref: "https://www.yamaha-motor.com.my/portfolio_page/xsr155/",
    engine: "155cc",
    frames: XSR155_360_FRAMES,
    image: getAssetUrl("hlym/product-curtain/xsr155.jpg"),
    name: "xsr155",
    power: "19.3 ps",
    price: "rm14,998",
    summary:
      "neo-retro character with modern performance for riders who want a confident and distinctive everyday machine.",
    weight: "134 kg"
  },
  {
    alt: "nvx 155",
    category: "automatic",
    detailHref: "https://www.yamaha-motor.com.my/portfolio_page/nvx/",
    engine: "155cc",
    frames: NVX_360_FRAMES,
    image: getAssetUrl("hlym/product-curtain/nvx.jpg"),
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
    detailHref: "https://www.yamaha-motor.com.my/portfolio_page/mt-09/",
    engine: "890cc",
    frames: MT_09_360_FRAMES,
    image: getAssetUrl("hlym/product-curtain/mt-09.jpg"),
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
    detailHref: "https://www.yamaha-motor.com.my/portfolio_page/y15zr/",
    engine: "149cc",
    frames: Y15ZR_360_FRAMES,
    image: getAssetUrl("hlym/product-curtain/y15zr.jpg"),
    name: "y15zr",
    power: "15.4 ps",
    price: "rm9,498",
    summary:
      "a compact underbone built for quick city moves, proven reliability, and strong daily-use value.",
    weight: "115 kg"
  },
  {
    alt: "y16zr-r",
    category: "moped",
    compact: true,
    detailHref: "https://www.yamaha-motor.com.my/portfolio_page/y16zr/",
    engine: "155cc",
    frames: Y16ZR_R_360_FRAMES,
    image: getAssetUrl("hlym/product-curtain/y16zr-r.jpg"),
    name: "y16zr-r",
    power: "18.5 ps",
    price: "rm11,398",
    summary:
      "race-bred underbone performance with a six-speed gearbox, traction control, and confident ABS braking.",
    weight: "124 kg"
  },
  {
    alt: "nmax",
    category: "automatic",
    detailHref: "https://www.yamaha-motor.com.my/portfolio_page/nmax/",
    engine: "155cc",
    frames: NMAX_360_FRAMES,
    image: getAssetUrl("hlym/product-curtain/nmax.jpg"),
    name: "nmax",
    power: "15.4 ps",
    price: "rm11,498",
    summary:
      "premium city comfort with dual-channel ABS, connected convenience, and generous everyday storage.",
    weight: "131 kg"
  },
  {
    alt: "mt-15",
    category: "street",
    detailHref: "https://www.yamaha-motor.com.my/portfolio_page/mt-15/",
    engine: "155cc",
    frames: MT_15_360_FRAMES,
    image: getAssetUrl("hlym/product-curtain/mt-15.jpg"),
    name: "mt-15",
    power: "19.3 ps",
    price: "rm12,498",
    summary:
      "lightweight naked-bike agility with VVA performance, an upright stance, and sharp urban handling.",
    weight: "133 kg"
  },
  {
    alt: "tmax 560",
    category: "big bikes",
    compact: true,
    detailHref: "#featured-model",
    engine: "562cc",
    frames: TMAX_360_FRAMES,
    image: getAssetUrl("hlym/product-curtain/tmax.jpg"),
    name: "tmax 560",
    power: "47.6 ps",
    price: "rm75,888",
    summary:
      "maxi scooter comfort with big-bike road presence for riders who want premium touring convenience.",
    weight: "221 kg"
  }
] as const;
