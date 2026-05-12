import { PRODUCT_PAGE_MODELS } from "../constants/product-page.constants";

export function useProductPageState() {
  const activeModel = PRODUCT_PAGE_MODELS[0]!;

  return {
    activeModel
  };
}
