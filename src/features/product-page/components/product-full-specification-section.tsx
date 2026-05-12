import { toSentenceCase } from "@/lib/to-sentence-case";
import { PRODUCT_FULL_SPECIFICATION_CONTENT } from "../constants/product-full-specification.constants";
import {
  ProductFullSpecificationBody,
  ProductFullSpecificationEyebrow,
  ProductFullSpecificationHeader,
  ProductFullSpecificationImagePanel,
  ProductFullSpecificationInner,
  ProductFullSpecificationList,
  ProductFullSpecificationListViewport,
  ProductFullSpecificationRoot,
  ProductFullSpecificationTitle
} from "../styles/product-full-specification-section.styles";
import type { ProductFullSpecificationContent } from "../types/product-page.types";
import { ProductFullSpecificationItem } from "./product-full-specification-item";

type ProductFullSpecificationSectionProps = {
  ariaLabel?: string;
  content?: ProductFullSpecificationContent;
};

export function ProductFullSpecificationSection({
  ariaLabel = "Yamaha NVX full specification",
  content = PRODUCT_FULL_SPECIFICATION_CONTENT
}: ProductFullSpecificationSectionProps) {
  return (
    <ProductFullSpecificationRoot aria-label={toSentenceCase(ariaLabel)} data-cursor-tone="light">
      <ProductFullSpecificationInner>
        <ProductFullSpecificationHeader>
          <ProductFullSpecificationEyebrow>{content.eyebrow}</ProductFullSpecificationEyebrow>
          <ProductFullSpecificationTitle>
            {content.titleLines[0]}
            <br />
            {content.titleLines[1]}
          </ProductFullSpecificationTitle>
        </ProductFullSpecificationHeader>

        <ProductFullSpecificationBody>
          <ProductFullSpecificationImagePanel>
            <img alt={content.image.alt} src={content.image.src} />
          </ProductFullSpecificationImagePanel>
          <ProductFullSpecificationListViewport>
            <ProductFullSpecificationList>
              {content.items.map((item, index) => (
                <ProductFullSpecificationItem index={index} item={item} key={item.title} />
              ))}
            </ProductFullSpecificationList>
          </ProductFullSpecificationListViewport>
        </ProductFullSpecificationBody>
      </ProductFullSpecificationInner>
    </ProductFullSpecificationRoot>
  );
}
