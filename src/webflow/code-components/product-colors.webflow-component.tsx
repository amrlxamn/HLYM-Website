import { ProductColorsSection } from "@/features/product-page";
import { PRODUCT_PAGE_COPY } from "@/features/product-page";
import { createProductColorOptions } from "./create-product-color-options";
import type { ProductColorsWebflowProps } from "./product-colors.types";

export function ProductColorsWebflow(props: ProductColorsWebflowProps) {
  const ariaLabel = props.ariaLabel || PRODUCT_PAGE_COPY.colorSectionAriaLabel;

  return <ProductColorsSection ariaLabel={ariaLabel} colors={createProductColorOptions(props)} />;
}
