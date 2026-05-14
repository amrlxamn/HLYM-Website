import type { ProductColorOption } from "../types/product-page.types";
import { getAssetUrl } from "@/lib/get-asset-url";

export const PRODUCT_COLOR_OPTIONS: readonly ProductColorOption[] = [
  {
    alt: "Yamaha NVX in Gunmetal Grey",
    image: getAssetUrl("hlym/nvx-colors/gunmetal-grey-transparent.webp"),
    label: "Gunmetal Grey",
    swatch: getAssetUrl("hlym/nvx-colors/gunmetal-grey-swatch.jpg")
  },
  {
    alt: "Yamaha NVX in Cyber Blu",
    image: getAssetUrl("hlym/nvx-colors/cyber-blu-transparent.webp"),
    label: "Cyber Blu",
    swatch: getAssetUrl("hlym/nvx-colors/cyber-blu-swatch.jpg")
  },
  {
    alt: "Yamaha NVX in Electric Yellow",
    image: getAssetUrl("hlym/nvx-colors/electric-yellow-transparent.webp"),
    label: "Electric Yellow",
    swatch: getAssetUrl("hlym/nvx-colors/electric-yellow-swatch.jpg")
  },
  {
    alt: "Yamaha NVX in Violet Rush",
    image: getAssetUrl("hlym/nvx-colors/violet-rush-transparent.webp"),
    label: "Violet Rush",
    swatch: getAssetUrl("hlym/nvx-colors/violet-rush-swatch.jpg")
  }
] as const;
