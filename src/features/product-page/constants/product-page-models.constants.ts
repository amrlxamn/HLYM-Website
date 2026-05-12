import type { ProductPageModel } from "../types/product-page.types";
import { PRODUCT_HERO_VIDEO } from "./product-hero-video.constants";
import { NVX_360_FRAMES } from "./nvx-360-frames.constants";

export const PRODUCT_PAGE_MODELS: readonly ProductPageModel[] = [
  {
    alt: "nvx 155 automatic scooter",
    category: "automatic",
    ctaHref: "#site-footer",
    ctaLabel: "build & price",
    frames: NVX_360_FRAMES,
    image: "/assets/hlym/generated-1772088898269.png",
    name: "nvx 155",
    posterLabel: "nvx sp",
    posterMark: PRODUCT_HERO_VIDEO.brandMark,
    price: "rm11,998",
    specs: [
      { label: "engine", value: "155cc" },
      { label: "power", value: "15.4 ps" },
      { label: "weight", value: "127 kg" },
      { label: "msrp", value: "rm11,998" }
    ]
  },
  {
    alt: "yzf-r15m street motorcycle",
    category: "street",
    ctaHref: "#site-footer",
    ctaLabel: "build & price",
    image: "/assets/hlym/generated-1772088891491.png",
    name: "yzf-r15m",
    posterLabel: "r15m",
    price: "rm14,998",
    specs: [
      { label: "engine", value: "155cc" },
      { label: "power", value: "19.3 ps" },
      { label: "weight", value: "137 kg" },
      { label: "msrp", value: "rm14,998" }
    ]
  },
  {
    alt: "mt-09 hyper naked motorcycle",
    category: "big bikes",
    ctaHref: "#site-footer",
    ctaLabel: "build & price",
    image: "/assets/hlym/generated-1772088892507.png",
    name: "mt-09",
    posterLabel: "mt-09",
    price: "rm57,998",
    specs: [
      { label: "engine", value: "890cc" },
      { label: "power", value: "119 ps" },
      { label: "weight", value: "193 kg" },
      { label: "msrp", value: "rm57,998" }
    ]
  },
  {
    alt: "y15zr underbone motorcycle",
    category: "moped",
    ctaHref: "#site-footer",
    ctaLabel: "build & price",
    image: "/assets/hlym/generated-1772088894678.png",
    name: "y15zr",
    posterLabel: "y15zr",
    price: "rm9,498",
    specs: [
      { label: "engine", value: "149cc" },
      { label: "power", value: "15.4 ps" },
      { label: "weight", value: "115 kg" },
      { label: "msrp", value: "rm9,498" }
    ]
  },
  {
    alt: "tmax 560 maxi scooter",
    category: "big bikes",
    ctaHref: "#site-footer",
    ctaLabel: "build & price",
    image: "/assets/hlym/generated-1772088896897.png",
    name: "tmax 560",
    posterLabel: "tmax",
    price: "rm75,888",
    specs: [
      { label: "engine", value: "562cc" },
      { label: "power", value: "47.6 ps" },
      { label: "weight", value: "221 kg" },
      { label: "msrp", value: "rm75,888" }
    ]
  }
] as const;
