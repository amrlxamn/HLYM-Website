import {
  ProductFullSpecificationDescription,
  ProductFullSpecificationDivider,
  ProductFullSpecificationItemImage,
  ProductFullSpecificationItemRoot,
  ProductFullSpecificationItemTitle
} from "../styles/product-full-specification-item.styles";
import type { ProductFullSpecificationItem as ProductFullSpecificationItemData } from "../types/product-page.types";

type ProductFullSpecificationItemProps = {
  item: ProductFullSpecificationItemData;
};

export function ProductFullSpecificationItem({ item }: ProductFullSpecificationItemProps) {
  return (
    <ProductFullSpecificationItemRoot>
      <ProductFullSpecificationItemTitle>
        {item.eyebrow ? `${item.eyebrow} ${item.title}` : item.title}
      </ProductFullSpecificationItemTitle>
      <ProductFullSpecificationItemImage alt={item.image.alt} loading="lazy" src={item.image.src} />
      <ProductFullSpecificationDivider />
      {item.description && (
        <ProductFullSpecificationDescription>
          {item.description}
        </ProductFullSpecificationDescription>
      )}
    </ProductFullSpecificationItemRoot>
  );
}
