import { PRODUCT_PAGE_COPY, PRODUCT_PAGE_MODELS } from "../constants/product-page.constants";
import type { ProductPageModel } from "../types/product-page.types";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { ProductRotationViewer } from "./product-rotation-viewer";
import { useProductPageState } from "../hooks/use-product-page-state";
import { ProductSpecs, ProductSpecCard } from "../styles/product-showcase-actions.styles";
import {
  ProductModelName,
  ProductPosterLogo,
  ProductPosterText,
  ProductTitleLayer
} from "../styles/product-showcase-copy.styles";
import { ProductImagePanel } from "../styles/product-showcase-media.styles";
import {
  ProductBottomPanel,
  ProductShowcasePageInner,
  ProductShowcasePageRoot,
  ProductShowcaseStage
} from "../styles/product-showcase-page.styles";

type ProductShowcasePageProps = {
  ariaLabel?: string;
  brandLabel?: string;
  model?: ProductPageModel;
};

export function ProductShowcasePage({
  ariaLabel = PRODUCT_PAGE_COPY.ariaLabel,
  brandLabel = "YAMAHA",
  model
}: ProductShowcasePageProps) {
  const { activeModel } = useProductPageState();
  const productModel = model ?? activeModel ?? PRODUCT_PAGE_MODELS[0]!;

  return (
    <ProductShowcasePageRoot aria-label={toSentenceCase(ariaLabel)} data-cursor-tone="light">
      <ProductShowcasePageInner>
        <ProductShowcaseStage>
          <ProductTitleLayer>
            <ProductModelName>{brandLabel}</ProductModelName>
            {productModel.posterMark ? (
              <ProductPosterLogo>
                <img alt={productModel.posterMark.alt} src={productModel.posterMark.src} />
              </ProductPosterLogo>
            ) : (
              <ProductPosterText>{productModel.posterLabel}</ProductPosterText>
            )}
          </ProductTitleLayer>

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

          <ProductBottomPanel>
            <ProductSpecs>
              {productModel.specs.map((spec) => (
                <ProductSpecCard key={spec.label}>
                  <strong>{spec.value}</strong>
                  <span>{spec.label}</span>
                </ProductSpecCard>
              ))}
            </ProductSpecs>
          </ProductBottomPanel>
        </ProductShowcaseStage>
      </ProductShowcasePageInner>
    </ProductShowcasePageRoot>
  );
}
