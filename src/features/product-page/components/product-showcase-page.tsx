import { useState } from "react";
import { PRODUCT_PAGE_COPY, PRODUCT_PAGE_MODELS } from "../constants/product-page.constants";
import { PRODUCT_COLOR_OPTIONS } from "../constants/product-colors.constants";
import type { ProductColorOption, ProductPageModel } from "../types/product-page.types";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { ProductRotationViewer } from "./product-rotation-viewer";
import { ProductColorSelector } from "./product-colors-section";
import { useProductPageState } from "../hooks/use-product-page-state";
import {
  FeaturedBannerSpecItem,
  FeaturedBannerSpecLabel,
  FeaturedBannerSpecValue
} from "@/components/featured/featured-banner.styles";
import {
  ProductImagePanel,
  ProductShowcaseBackdrop,
  ProductShowcaseBrand,
  ProductShowcaseCategory,
  ProductShowcaseDetails,
  ProductShowcaseMark,
  ProductShowcaseMedia,
  ProductShowcaseSpecs,
  ProductRotationGuide
} from "../styles/product-showcase-media.styles";
import {
  ProductShowcasePageInner,
  ProductShowcasePageRoot,
  ProductShowcaseStage
} from "../styles/product-showcase-page.styles";

type ProductShowcasePageProps = {
  ariaLabel?: string;
  colors?: readonly ProductColorOption[];
  model?: ProductPageModel;
};

export const PRODUCT_BACKDROP_LABELS: Record<string, readonly [string, string?]> = {
  xsr155: ["XSR", "155"],
  "xmax-300": ["XMAX", "300"],
  y16zr: ["Y16", "ZR-R"],
  y15zr: ["Y15", "ZR"],
  "135lc-fi": ["135", "LC FI"],
  "yzf-r25": ["YZF", "R25"],
  tmax: ["TMAX"],
  "tenere-700": ["TENERE", "700"],
  "pg-1": ["PG-", "1"],
  "tracer-9-gt": ["TRACER", "9 GT"],
  nmax: ["NMAX"],
  "ego-avantiz": ["EGO", "AVANTIZ"],
  ez115: ["EZ", "115"],
  "ego-gear": ["EGO", "GEAR"],
  "mt-09": ["MT-", "09"],
  nvx: ["NVX", "SP"],
  r15m: ["R15", "M"],
  "xmax-250": ["XMAX", "250"],
  yseries: ["YSE", "RIES"],
  "mt-15": ["MT-", "15"],
  "y16zr-6mro-limited-edition": ["6MRO", "LIMITED"],
  "mt-25": ["MT-", "25"],
  "y16zr-doxou": ["Y16", "DOXOU"]
};

// Calibrated against the NVX main mark at the same container width and font size.
export const PRODUCT_BACKDROP_SCALE: Record<string, number> = {
  xsr155: 1.13,
  "xmax-300": 0.73,
  y16zr: 1.18,
  y15zr: 1.18,
  "135lc-fi": 1.24,
  "yzf-r25": 1.18,
  tmax: 0.75,
  "tenere-700": 0.61,
  "pg-1": 1.25,
  "tracer-9-gt": 0.58,
  nmax: 0.72,
  "ego-avantiz": 1.06,
  ez115: 1.76,
  "ego-gear": 1.06,
  "mt-09": 1.14,
  nvx: 1,
  r15m: 1.19,
  "xmax-250": 0.73,
  yseries: 1.21,
  "mt-15": 1.14,
  "y16zr-6mro-limited-edition": 0.75,
  "mt-25": 1.14,
  "y16zr-doxou": 1.18
};

export function ProductShowcasePage({
  ariaLabel = PRODUCT_PAGE_COPY.ariaLabel,
  colors,
  model
}: ProductShowcasePageProps) {
  const { activeModel } = useProductPageState();
  const productModel = model ?? activeModel ?? PRODUCT_PAGE_MODELS[0]!;
  const [selectedColor, setSelectedColor] = useState<ProductColorOption | null>(null);
  const showsNvxColors = productModel.slug === "nvx";
  const productColors = colors ?? (showsNvxColors ? PRODUCT_COLOR_OPTIONS : []);
  const activeColor =
    productColors.find((color) => color.label === selectedColor?.label) ?? productColors[0];
  const rotationFrames =
    !activeColor || activeColor === productColors[0] ? productModel.frames : undefined;
  const [backdropMain, backdropSuffix] =
    PRODUCT_BACKDROP_LABELS[productModel.slug] ??
    ([productModel.posterLabel.toUpperCase(), undefined] as const);

  return (
    <ProductShowcasePageRoot aria-label={toSentenceCase(ariaLabel)}>
      <ProductShowcasePageInner>
        <ProductShowcaseStage>
          <ProductShowcaseBrand>
            {productModel.posterMark && (
              <ProductShowcaseMark
                alt={productModel.posterMark.alt}
                src={productModel.posterMark.src}
              />
            )}
            <ProductShowcaseCategory>{productModel.category.toUpperCase()}</ProductShowcaseCategory>
          </ProductShowcaseBrand>
          <ProductShowcaseMedia>
            {productModel.specs.length > 0 && (
              <ProductShowcaseDetails>
                <ProductShowcaseSpecs
                  aria-label={`${toSentenceCase(productModel.name)} key specifications`}
                >
                  {productModel.specs.slice(0, 3).map((stat) => (
                    <FeaturedBannerSpecItem key={stat.label}>
                      <FeaturedBannerSpecValue>{stat.value}</FeaturedBannerSpecValue>
                      <FeaturedBannerSpecLabel>{stat.label}</FeaturedBannerSpecLabel>
                    </FeaturedBannerSpecItem>
                  ))}
                </ProductShowcaseSpecs>
              </ProductShowcaseDetails>
            )}
            <ProductImagePanel>
              <ProductShowcaseBackdrop
                $scale={PRODUCT_BACKDROP_SCALE[productModel.slug] ?? 1}
                aria-hidden="true"
              >
                <span>
                  {[...backdropMain].map((letter, index) => (
                    <span key={`${letter}-${index}`}>{letter}</span>
                  ))}
                </span>
                {backdropSuffix && <span>{backdropSuffix}</span>}
              </ProductShowcaseBackdrop>
              {rotationFrames ? (
                <>
                  <ProductRotationGuide aria-hidden="true">
                    <span>360°</span>
                  </ProductRotationGuide>
                  <ProductRotationViewer
                    key={productModel.slug}
                    alt={activeColor?.alt ?? productModel.alt}
                    frames={rotationFrames}
                    normalize
                    poster={activeColor?.image ?? productModel.image}
                  />
                </>
              ) : activeColor ? (
                <ProductRotationViewer
                  key={`${productModel.slug}-${activeColor.label}`}
                  alt={activeColor.alt}
                  frames={[activeColor.image]}
                  interactive={false}
                  normalize
                  poster={activeColor.image}
                />
              ) : (
                <img alt={productModel.alt} src={productModel.image} />
              )}
            </ProductImagePanel>
            {activeColor && (
              <ProductColorSelector
                colors={productColors}
                onColorChange={setSelectedColor}
                selectedColor={activeColor}
                swatchGroupLabel={`Yamaha ${showsNvxColors ? "NVX" : productModel.name} body colors`}
              />
            )}
          </ProductShowcaseMedia>
        </ProductShowcaseStage>
      </ProductShowcasePageInner>
    </ProductShowcasePageRoot>
  );
}
