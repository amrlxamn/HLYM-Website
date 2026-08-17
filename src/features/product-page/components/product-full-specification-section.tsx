import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
import { ProductFullSpecificationRotationViewer } from "./product-full-specification-rotation-viewer";

type ProductFullSpecificationSectionProps = {
  ariaLabel?: string;
  content?: ProductFullSpecificationContent;
};

const SPECIFICATION_SCROLL_RANGE: [number, number] = [0.12, 0.88];
const SPECIFICATION_LIST_END_OFFSET = "-65%";

export function ProductFullSpecificationSection({
  ariaLabel = "Yamaha NVX full specification",
  content = PRODUCT_FULL_SPECIFICATION_CONTENT
}: ProductFullSpecificationSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });
  const specificationListY = useTransform(scrollYProgress, SPECIFICATION_SCROLL_RANGE, [
    "0%",
    SPECIFICATION_LIST_END_OFFSET
  ]);

  return (
    <ProductFullSpecificationRoot ref={sectionRef} aria-label={toSentenceCase(ariaLabel)}>
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
            <ProductFullSpecificationRotationViewer
              alt={content.image.alt}
              frames={content.image.frames}
              scrollProgress={scrollYProgress}
              scrollRange={SPECIFICATION_SCROLL_RANGE}
            />
          </ProductFullSpecificationImagePanel>
          <ProductFullSpecificationListViewport>
            <ProductFullSpecificationList style={{ y: specificationListY }}>
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
