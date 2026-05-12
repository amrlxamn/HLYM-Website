import type { ProductColorOption } from "../types/product-page.types";

export const PRODUCT_COLOR_OPTIONS: readonly ProductColorOption[] = [
  {
    alt: "Yamaha NVX in Gunmetal Grey",
    image: "/assets/hlym/nvx-colors/gunmetal-grey-transparent.webp",
    label: "Gunmetal Grey",
    swatch: "/assets/hlym/nvx-colors/gunmetal-grey-swatch.jpg"
  },
  {
    alt: "Yamaha NVX in Cyber Blu",
    image: "/assets/hlym/nvx-colors/cyber-blu-transparent.webp",
    label: "Cyber Blu",
    swatch: "/assets/hlym/nvx-colors/cyber-blu-swatch.jpg"
  },
  {
    alt: "Yamaha NVX in Electric Yellow",
    image: "/assets/hlym/nvx-colors/electric-yellow-transparent.webp",
    label: "Electric Yellow",
    swatch: "/assets/hlym/nvx-colors/electric-yellow-swatch.jpg"
  },
  {
    alt: "Yamaha NVX in Violet Rush",
    image: "/assets/hlym/nvx-colors/violet-rush-transparent.webp",
    label: "Violet Rush",
    swatch: "/assets/hlym/nvx-colors/violet-rush-swatch.jpg"
  }
] as const;
