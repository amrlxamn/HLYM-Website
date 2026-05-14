import type { ProductHeroVideo } from "../types/product-page.types";
import { getAssetUrl } from "@/lib/get-asset-url";

export const PRODUCT_HERO_VIDEO = {
  alt: "Yamaha NVX performance film",
  ariaLabel: "Yamaha NVX hero video",
  brandMark: { alt: "Yamaha NVX SP", src: getAssetUrl("nvx-sp.png") },
  copy: "A fastback scooter designed for the rush of urban performance.",
  poster: getAssetUrl("hlym/nvx-360/frame-01.jpg"),
  sources: [{ src: getAssetUrl("hlym/nvx-hero.mp4"), type: "video/mp4" }]
} as const satisfies ProductHeroVideo;
