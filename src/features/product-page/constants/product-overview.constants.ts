import type { ProductOverviewColor, ProductOverviewContent } from "../types/product-page.types";
import { getAssetUrl } from "@/lib/get-asset-url";

export const PRODUCT_OVERVIEW_CONTENT: ProductOverviewContent = {
  description:
    "The Yamaha NVX SP 155 combines sporty performance, advanced features, and everyday practicality. It's designed to move you through the city with confidence.",
  titleLines: ["Meet the NVX SP.", "Built for the city."]
} as const;

export const PRODUCT_OVERVIEW_COLORS: readonly ProductOverviewColor[] = [
  {
    accentColor: "var(--red)",
    alt: "Yamaha NVX in Gunmetal Grey",
    description: "Signature edition. Loud, proud, unapologetic.",
    image: getAssetUrl("hlym/nvx/gunmetal-grey.png"),
    isFeatured: true,
    label: "Gunmetal Grey"
  },
  {
    accentColor: "var(--color-bg-primary)",
    alt: "Yamaha NVX in Cyber Blu",
    description: "Stealth meets sophistication. For the night riders.",
    image: getAssetUrl("hlym/nvx/cyber-blu.png"),
    label: "Cyber Blu"
  },
  {
    accentColor: "var(--product-color-violet-rush)",
    alt: "Yamaha NVX in Violet Rush",
    description: "Depth and dimension. A study in cool restraint.",
    image: getAssetUrl("hlym/nvx/violet-rush.png"),
    label: "Violet Rush"
  },
  {
    accentColor: "var(--product-color-electric-yellow)",
    alt: "Yamaha NVX in Electric Yellow",
    description: "Industrial elegance. A modern classic, recast.",
    image: getAssetUrl("hlym/nvx/electric-yellow.png"),
    label: "Electric Yellow"
  }
] as const;
