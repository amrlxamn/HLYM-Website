import type { ProductFullSpecificationContent } from "../types/product-page.types";
import officialFeatures from "./product-official-features.json";

export const PRODUCT_FULL_SPECIFICATION_CONTENT: ProductFullSpecificationContent = {
  items: officialFeatures.nvx,
  titleLines: ["Built to respond.", "Made to connect."]
} as const;
