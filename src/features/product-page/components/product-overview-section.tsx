import { useState } from "react";
import { getAssetUrl } from "@/lib/get-asset-url";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { PRODUCT_OVERVIEW_GALLERY_SLIDES } from "../constants/product-overview-gallery.constants";
import {
  ProductOverviewGallery,
  ProductOverviewGalleryAlignment,
  ProductOverviewGalleryCopy,
  ProductOverviewGalleryImage,
  ProductOverviewGalleryPreview,
  ProductOverviewGalleryPreviews,
  ProductOverviewGallerySlide,
  ProductOverviewGalleryTitle
} from "../styles/product-overview-gallery.styles";
import { ProductOverviewRoot } from "../styles/product-overview-shell.styles";
import { ProductFullSpecificationSection } from "./product-full-specification-section";
import { ProductSubHeader } from "./product-sub-header";
import { ProductPageAnchor } from "../styles/product-page-anchor.styles";
import { PRODUCT_FULL_SPECIFICATION_CONTENT } from "../constants/product-full-specification.constants";
import { PRODUCT_TECHNICAL_SPECIFICATIONS } from "../constants/product-technical-specifications.constants";
import { PRODUCT_OVERVIEW_CONTENT } from "../constants/product-overview.constants";
import { PRODUCT_PAGE_MODELS } from "../constants/product-page-models.constants";
import type {
  ProductFullSpecificationContent,
  ProductOverviewSpec,
  ProductPageModel
} from "../types/product-page.types";

type ProductOverviewSectionProps = {
  ariaLabel?: string;
  description?: string;
  features?: ProductFullSpecificationContent;
  gallery?: readonly { alt: string; description: string; src: string; title: string }[] | undefined;
  model?: ProductPageModel;
  specifications?: readonly { title: string; items: readonly ProductOverviewSpec[] }[] | undefined;
};

export function ProductOverviewSection({
  ariaLabel,
  description = PRODUCT_OVERVIEW_CONTENT.description,
  features = PRODUCT_FULL_SPECIFICATION_CONTENT,
  gallery,
  model = PRODUCT_PAGE_MODELS[0]!,
  specifications = PRODUCT_TECHNICAL_SPECIFICATIONS
}: ProductOverviewSectionProps) {
  const modelName = model.slug === "nvx" ? "NVX" : model.name;
  const galleryName = model.slug === "nvx" ? "NVX SP" : model.name;
  const slides =
    gallery ??
    PRODUCT_OVERVIEW_GALLERY_SLIDES.map((slide) => ({
      ...slide,
      src: getAssetUrl(`hlym/nvx-gallery/${slide.src}`)
    }));
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [skipMotion, setSkipMotion] = useState(false);

  function showSlide(index: number, instant = false) {
    if (index < 0 || index >= slides.length) return;
    setSkipMotion(instant);
    setActiveSlideIndex(index);
  }

  return (
    <ProductOverviewRoot aria-label={toSentenceCase(ariaLabel ?? `Yamaha ${modelName} overview`)}>
      <ProductSubHeader />

      <ProductOverviewGallery
        aria-label={`Yamaha ${galleryName} photo gallery`}
        aria-roledescription="carousel"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            showSlide(activeSlideIndex + (event.key === "ArrowLeft" ? -1 : 1), true);
          }
        }}
        tabIndex={0}
      >
        {slides.map((slide, index) => (
          <ProductOverviewGallerySlide
            $active={index === activeSlideIndex}
            $instant={skipMotion}
            aria-hidden={index !== activeSlideIndex}
            key={slide.src}
          >
            <ProductOverviewGalleryImage
              alt={index === activeSlideIndex ? slide.alt : ""}
              src={slide.src}
            />
            <ProductOverviewGalleryAlignment>
              <ProductOverviewGalleryCopy>
                <ProductOverviewGalleryTitle>{slide.title}</ProductOverviewGalleryTitle>
                <p>{slide.description}</p>
              </ProductOverviewGalleryCopy>
            </ProductOverviewGalleryAlignment>
          </ProductOverviewGallerySlide>
        ))}
        <ProductOverviewGalleryAlignment>
          <ProductOverviewGalleryPreviews aria-label={`Choose ${galleryName} photo`} role="group">
            {slides.map((slide, index) => (
              <ProductOverviewGalleryPreview
                $active={index === activeSlideIndex}
                aria-label={`Show ${galleryName} photo ${index + 1}: ${slide.title}`}
                aria-pressed={index === activeSlideIndex}
                key={slide.src}
                onClick={() => showSlide(index)}
                type="button"
              >
                <ProductOverviewGalleryImage alt="" src={slide.src} />
              </ProductOverviewGalleryPreview>
            ))}
          </ProductOverviewGalleryPreviews>
        </ProductOverviewGalleryAlignment>
      </ProductOverviewGallery>

      <ProductPageAnchor id="product-features">
        <ProductFullSpecificationSection
          content={features}
          description={description}
          model={model}
          specifications={specifications}
        />
      </ProductPageAnchor>
    </ProductOverviewRoot>
  );
}
