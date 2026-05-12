import type { ProductOverviewColor, ProductOverviewContent } from "../types/product-page.types";

export const PRODUCT_OVERVIEW_CONTENT: ProductOverviewContent = {
  description:
    "The Yamaha NVX SP 155 combines sporty performance, advanced features, and everyday practicality. Its designed to move you through the city with confidence.",
  eyebrow: "Overview",
  specs: [
    {
      label: "Engine",
      value: "155cc"
    },
    {
      label: "Maximum torque",
      value: "14.2Nm (1.4 kgf.m) / 6,500 r/min"
    },
    {
      label: "Oil capacity",
      value: "1.1L (SP version), 1.0L (ABS version)"
    },
    {
      label: "Fuel system",
      value: "Fuel injection"
    }
  ],
  titleLines: ["Smart performance.", "Built for the city."]
} as const;

export const PRODUCT_OVERVIEW_COLORS: readonly ProductOverviewColor[] = [
  {
    accentColor: "var(--red)",
    alt: "Yamaha NVX in Gunmetal Grey",
    description: "Signature edition. Loud, proud, unapologetic.",
    image: "/assets/hlym/nvx/gunmetal-grey.png",
    isFeatured: true,
    label: "Gunmetal Grey"
  },
  {
    accentColor: "var(--color-bg-primary)",
    alt: "Yamaha NVX in Cyber Blu",
    description: "Stealth meets sophistication. For the night riders.",
    image: "/assets/hlym/nvx/cyber-blu.png",
    label: "Cyber Blu"
  },
  {
    accentColor: "var(--product-color-violet-rush)",
    alt: "Yamaha NVX in Violet Rush",
    description: "Depth and dimension. A study in cool restraint.",
    image: "/assets/hlym/nvx/violet-rush.png",
    label: "Violet Rush"
  },
  {
    accentColor: "var(--product-color-electric-yellow)",
    alt: "Yamaha NVX in Electric Yellow",
    description: "Industrial elegance. A modern classic, recast.",
    image: "/assets/hlym/nvx/electric-yellow.png",
    label: "Electric Yellow"
  }
] as const;
