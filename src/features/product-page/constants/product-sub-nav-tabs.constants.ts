import type { ProductSubNavTab } from "../types/product-page.types";

export const PRODUCT_SUB_NAV_TABS: readonly ProductSubNavTab[] = [
  { id: "overview", label: "overview", targetId: "product-overview" },
  { id: "models", label: "models", targetId: "product-models" },
  { id: "specification", label: "specification", targetId: "product-specification" },
  { id: "features", label: "features", targetId: "product-features" },
  { id: "accessories", label: "accessories", targetId: "product-accessories" }
] as const;
