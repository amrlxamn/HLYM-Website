import type { ProductHeroVideo } from "../types/product-page.types";
import nvxSpMarkSrc from "../../../../assets/nvx-sp.png";

export const PRODUCT_HERO_VIDEO = {
  alt: "Yamaha NVX performance film",
  ariaLabel: "Yamaha NVX hero video",
  brandMark: { alt: "Yamaha NVX SP", src: nvxSpMarkSrc },
  copy: "A fastback scooter designed for the rush of urban performance.",
  poster: "/assets/hlym/nvx-360/frame-01.jpg",
  sources: [{ src: "/assets/hlym/nvx-hero.mp4", type: "video/mp4" }]
} as const satisfies ProductHeroVideo;
