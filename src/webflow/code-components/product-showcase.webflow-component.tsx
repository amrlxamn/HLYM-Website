import { ProductShowcasePage } from "@/features/product-page";
import { createProductPageModel } from "./create-product-page-model";
import type { ProductShowcaseWebflowProps } from "./product-showcase.types";

export function ProductShowcaseWebflow(props: ProductShowcaseWebflowProps) {
  return (
    <ProductShowcasePage
      model={createProductPageModel(props)}
      {...(props.ariaLabel ? { ariaLabel: props.ariaLabel } : {})}
      {...(props.brandLabel ? { brandLabel: props.brandLabel } : {})}
    />
  );
}
