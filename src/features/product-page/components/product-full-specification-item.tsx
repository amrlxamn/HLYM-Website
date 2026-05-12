import {
  ProductFullSpecificationDescription,
  ProductFullSpecificationDivider,
  ProductFullSpecificationItemRoot,
  ProductFullSpecificationItemTitle,
  ProductFullSpecificationNumber
} from "../styles/product-full-specification-item.styles";
import type { ProductFullSpecificationItem as ProductFullSpecificationItemData } from "../types/product-page.types";

type ProductFullSpecificationItemProps = {
  index: number;
  item: ProductFullSpecificationItemData;
};

export function ProductFullSpecificationItem({ index, item }: ProductFullSpecificationItemProps) {
  const displayIndex = String(index + 1).padStart(2, "0");

  return (
    <ProductFullSpecificationItemRoot>
      <ProductFullSpecificationNumber>{displayIndex}</ProductFullSpecificationNumber>
      <ProductFullSpecificationItemTitle>{item.title}</ProductFullSpecificationItemTitle>
      <ProductFullSpecificationDivider />
      <ProductFullSpecificationDivider />
      <ProductFullSpecificationDescription>{item.description}</ProductFullSpecificationDescription>
    </ProductFullSpecificationItemRoot>
  );
}
