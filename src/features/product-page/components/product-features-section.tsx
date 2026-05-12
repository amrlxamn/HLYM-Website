import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { PRODUCT_FEATURES } from "../constants/product-features.constants";
import { PRODUCT_PAGE_COPY } from "../constants/product-page.constants";
import {
  ProductFeatureArrow,
  ProductFeatureControls,
  ProductFeatureCopy,
  ProductFeatureCounter,
  ProductFeatureDescription,
  ProductFeatureEyebrow,
  ProductFeatureImage,
  ProductFeatureImagePanel,
  ProductFeaturesRoot,
  ProductFeatureTitle
} from "../styles/product-features-section.styles";
import type { ProductFeature } from "../types/product-page.types";

type ProductFeaturesSectionProps = {
  ariaLabel?: string;
  features?: readonly ProductFeature[];
};

export function ProductFeaturesSection({
  ariaLabel = PRODUCT_PAGE_COPY.featuresSectionAriaLabel,
  features = PRODUCT_FEATURES
}: ProductFeaturesSectionProps) {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const activeFeature = features[activeFeatureIndex] ?? PRODUCT_FEATURES[0]!;
  const featureCount = features.length;
  const counter = `${String(activeFeatureIndex + 1).padStart(2, "0")} / ${String(featureCount).padStart(2, "0")}`;

  return (
    <ProductFeaturesRoot
      aria-label={toSentenceCase(ariaLabel)}
      data-cursor-tone="light"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          setActiveFeatureIndex((currentIndex) => {
            return currentIndex === 0 ? featureCount - 1 : currentIndex - 1;
          });
        }

        if (event.key === "ArrowRight") {
          event.preventDefault();
          setActiveFeatureIndex((currentIndex) => {
            return (currentIndex + 1) % featureCount;
          });
        }
      }}
      tabIndex={0}
    >
      <ProductFeatureImagePanel>
        <ProductFeatureImage alt={activeFeature.imageAlt} src={activeFeature.image} />
      </ProductFeatureImagePanel>

      <ProductFeatureCopy aria-live="polite">
        <ProductFeatureControls>
          <ProductFeatureCounter>{counter}</ProductFeatureCounter>
          <div>
            <ProductFeatureArrow
              aria-label="Previous NVX feature"
              onClick={() => {
                setActiveFeatureIndex((currentIndex) => {
                  return currentIndex === 0 ? featureCount - 1 : currentIndex - 1;
                });
              }}
              type="button"
            >
              <ChevronLeft aria-hidden="true" size={22} strokeWidth={1.8} />
            </ProductFeatureArrow>
            <ProductFeatureArrow
              aria-label="Next NVX feature"
              onClick={() => {
                setActiveFeatureIndex((currentIndex) => {
                  return (currentIndex + 1) % featureCount;
                });
              }}
              type="button"
            >
              <ChevronRight aria-hidden="true" size={22} strokeWidth={1.8} />
            </ProductFeatureArrow>
          </div>
        </ProductFeatureControls>

        <ProductFeatureEyebrow>{activeFeature.eyebrow}</ProductFeatureEyebrow>
        <ProductFeatureTitle>{activeFeature.title}</ProductFeatureTitle>
        <ProductFeatureDescription>{activeFeature.description}</ProductFeatureDescription>
      </ProductFeatureCopy>
    </ProductFeaturesRoot>
  );
}
