import { PRODUCT_PAGE_MODELS } from "../constants/product-page.constants";

export function useProductPageState() {
  const pathname = typeof window === "undefined" ? "/" : window.location.pathname;
  const slug = pathname.split("/").filter(Boolean)[1] ?? "";
  const activeModel =
    PRODUCT_PAGE_MODELS.find((model) => model.slug === slug) ?? PRODUCT_PAGE_MODELS[0]!;

  return {
    activeModel
  };
}
