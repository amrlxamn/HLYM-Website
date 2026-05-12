import {
  ProductOverviewSpecContent,
  ProductOverviewSpecDivider,
  ProductOverviewSpecIndex,
  ProductOverviewSpecItem,
  ProductOverviewSpecLabel,
  ProductOverviewSpecValue
} from "../styles/product-overview-specs.styles";
import type { ProductOverviewSpec } from "../types/product-page.types";

type ProductOverviewSpecRowProps = {
  index: number;
  spec: ProductOverviewSpec;
};

export function ProductOverviewSpecRow({ index, spec }: ProductOverviewSpecRowProps) {
  const displayIndex = String(index + 1).padStart(2, "0");

  return (
    <ProductOverviewSpecItem>
      <ProductOverviewSpecContent>
        <ProductOverviewSpecIndex>{displayIndex}</ProductOverviewSpecIndex>
        <ProductOverviewSpecLabel>{spec.label}</ProductOverviewSpecLabel>
        <ProductOverviewSpecValue>{spec.value}</ProductOverviewSpecValue>
      </ProductOverviewSpecContent>
      <ProductOverviewSpecDivider />
    </ProductOverviewSpecItem>
  );
}
