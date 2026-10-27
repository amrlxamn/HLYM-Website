import type { ProductSubNavTab } from "../types/product-page.types";

export const PRODUCT_SUB_NAV_TABS: readonly ProductSubNavTab[] = [
  { id: "overview", label: "overview" },
  { id: "features", label: "features" },
  { id: "specification", label: "specification" }
] as const;
