import { PRODUCT_PAGE_COPY, PRODUCT_PAGE_MODELS } from "../constants/product-page.constants";
import type { ProductPageModel } from "../types/product-page.types";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { ProductRotationViewer } from "./product-rotation-viewer";
import { useProductPageState } from "../hooks/use-product-page-state";
import { ProductImagePanel } from "../styles/product-showcase-media.styles";
import {
  ProductShowcasePageInner,
  ProductShowcasePageRoot,
  ProductShowcaseStage
} from "../styles/product-showcase-page.styles";

type ProductShowcasePageProps = {
  ariaLabel?: string;
  model?: ProductPageModel;
};

export function ProductShowcasePage({
  ariaLabel = PRODUCT_PAGE_COPY.ariaLabel,
  model
}: ProductShowcasePageProps) {
  const { activeModel } = useProductPageState();
  const productModel = model ?? activeModel ?? PRODUCT_PAGE_MODELS[0]!;

  return (
    <ProductShowcasePageRoot aria-label={toSentenceCase(ariaLabel)}>
      <ProductShowcasePageInner>
        <ProductShowcaseStage>
          <ProductImagePanel>
            {productModel.frames ? (
              <ProductRotationViewer
                key={productModel.name}
                alt={productModel.alt}
                frames={productModel.frames}
              />
            ) : (
              <img alt={productModel.alt} src={productModel.image} />
            )}
          </ProductImagePanel>
        </ProductShowcaseStage>
      </ProductShowcasePageInner>
    </ProductShowcasePageRoot>
  );
}
