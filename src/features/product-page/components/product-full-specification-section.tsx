import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { ContactEnquiryPanel } from "@/features/contact-page";
import { PRODUCT_COLOR_OPTIONS } from "../constants/product-colors.constants";
import { PRODUCT_FULL_SPECIFICATION_CONTENT } from "../constants/product-full-specification.constants";
import officialHotspots from "../constants/product-official-hotspots.json";
import { PRODUCT_OVERVIEW_CONTENT } from "../constants/product-overview.constants";
import { PRODUCT_TECHNICAL_SPECIFICATIONS } from "../constants/product-technical-specifications.constants";
import { PRODUCT_PAGE_MODELS } from "../constants/product-page-models.constants";
import {
  ProductFullSpecificationBody,
  ProductFullSpecificationFeatureImage,
  ProductFullSpecificationHeader,
  ProductFullSpecificationHotspotSection,
  ProductFullSpecificationImagePanel,
  ProductFullSpecificationInner,
  ProductFullSpecificationList,
  ProductFullSpecificationListViewport,
  ProductFullSpecificationRoot,
  ProductFullSpecificationSpecs,
  ProductFullSpecificationSpecsInner,
  ProductFullSpecificationTitle
} from "../styles/product-full-specification-section.styles";
import {
  ProductOverviewDescription,
  ProductOverviewTitle
} from "../styles/product-overview-copy.styles";
import {
  ProductOverviewSpecIndex,
  ProductOverviewSpecLabel,
  ProductOverviewSpecList,
  ProductOverviewSpecValue,
  ProductTechnicalSpecDetail,
  ProductTechnicalSpecDetails,
  ProductTechnicalSpecHeading,
  ProductTechnicalSpecMenu,
  ProductTechnicalSpecPanels
} from "../styles/product-overview-specs.styles";
import {
  ProductRelatedModelActions,
  ProductRelatedModelCopy,
  ProductRelatedModelDescription,
  ProductRelatedModelImage,
  ProductRelatedModelInner,
  ProductRelatedModelRoot,
  ProductRelatedModelText,
  ProductRelatedModelTitle
} from "../styles/product-related-model.styles";
import type {
  ProductFullSpecificationContent,
  ProductOverviewSpec,
  ProductPageModel
} from "../types/product-page.types";
import {
  getActiveFeatureIndex,
  SPECIFICATION_SCROLL_RANGE
} from "../utils/get-active-feature-index";
import { ProductFullSpecificationItem } from "./product-full-specification-item";
import { ProductSpecificationHotspots } from "./product-specification-hotspots";

type ProductFullSpecificationSectionProps = {
  ariaLabel?: string;
  content?: ProductFullSpecificationContent;
  description?: string;
  model?: ProductPageModel;
  specifications?: readonly { title: string; items: readonly ProductOverviewSpec[] }[];
};

export function ProductFullSpecificationSection({
  ariaLabel,
  content = PRODUCT_FULL_SPECIFICATION_CONTENT,
  description = PRODUCT_OVERVIEW_CONTENT.description,
  model = PRODUCT_PAGE_MODELS[0]!,
  specifications = PRODUCT_TECHNICAL_SPECIFICATIONS
}: ProductFullSpecificationSectionProps) {
  const modelName = model.slug === "nvx" ? "NVX" : model.name;
  const hotspotData = officialHotspots[model.slug as keyof typeof officialHotspots];
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [listOverflow, setListOverflow] = useState(0);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [isDealerPanelOpen, setIsDealerPanelOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });
  const specificationListY = useTransform(scrollYProgress, SPECIFICATION_SCROLL_RANGE, [
    0,
    -listOverflow
  ]);
  useEffect(() => {
    const list = listRef.current;
    const viewport = viewportRef.current;
    if (!list || !viewport) return;
    const measure = () => setListOverflow(Math.max(0, list.scrollHeight - viewport.clientHeight));
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [content.items.length]);
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setActiveFeatureIndex(getActiveFeatureIndex(progress, content.items.length));
  });

  return (
    <>
      <ProductFullSpecificationRoot
        ref={sectionRef}
        $items={content.items.length}
        aria-label={toSentenceCase(ariaLabel ?? `Yamaha ${modelName} features`)}
      >
        <ProductFullSpecificationInner>
          <ProductFullSpecificationHeader>
            <ProductFullSpecificationTitle>
              <span>
                {content.titleLines[0]}
                <br />
                {content.titleLines[1]}
              </span>
            </ProductFullSpecificationTitle>
            <ProductOverviewDescription>{description}</ProductOverviewDescription>
          </ProductFullSpecificationHeader>

          <ProductFullSpecificationBody>
            <ProductFullSpecificationImagePanel aria-live="polite">
              {content.items.map((item, index) => (
                <ProductFullSpecificationFeatureImage
                  $active={index === activeFeatureIndex}
                  alt={index === activeFeatureIndex ? item.image.alt : ""}
                  aria-hidden={index !== activeFeatureIndex}
                  key={item.title}
                  src={item.image.src}
                />
              ))}
            </ProductFullSpecificationImagePanel>
            <ProductFullSpecificationListViewport ref={viewportRef}>
              <ProductFullSpecificationList ref={listRef} style={{ y: specificationListY }}>
                {content.items.map((item) => (
                  <ProductFullSpecificationItem item={item} key={item.title} />
                ))}
              </ProductFullSpecificationList>
            </ProductFullSpecificationListViewport>
          </ProductFullSpecificationBody>
        </ProductFullSpecificationInner>
      </ProductFullSpecificationRoot>
      {hotspotData && (
        <ProductFullSpecificationHotspotSection
          aria-label={`Yamaha ${modelName} tagged motorcycle`}
        >
          <ProductSpecificationHotspots data={hotspotData} key={model.slug} modelName={modelName} />
        </ProductFullSpecificationHotspotSection>
      )}
      <ProductFullSpecificationSpecs
        aria-label={`Yamaha ${modelName} technical specifications`}
        id="product-specification"
      >
        <ProductFullSpecificationSpecsInner>
          <ProductOverviewTitle>Technical specifications</ProductOverviewTitle>
          <ProductOverviewSpecList>
            <ProductTechnicalSpecMenu aria-label="Specification categories" role="group">
              {specifications.map((group, index) => (
                <ProductTechnicalSpecHeading
                  aria-controls={`product-specification-details-${index}`}
                  aria-pressed={index === selectedGroupIndex}
                  key={group.title}
                  onClick={() => setSelectedGroupIndex(index)}
                  type="button"
                >
                  <ProductOverviewSpecIndex>
                    {String(index + 1).padStart(2, "0")}
                  </ProductOverviewSpecIndex>
                  <span>{group.title}</span>
                </ProductTechnicalSpecHeading>
              ))}
            </ProductTechnicalSpecMenu>
            <ProductTechnicalSpecPanels aria-live="polite">
              {specifications.map((group, index) => (
                <ProductTechnicalSpecDetails
                  $active={index === selectedGroupIndex}
                  aria-hidden={index !== selectedGroupIndex}
                  aria-label={`${group.title} specifications`}
                  id={`product-specification-details-${index}`}
                  key={group.title}
                >
                  {group.items.map((spec) => (
                    <ProductTechnicalSpecDetail key={spec.label}>
                      <ProductOverviewSpecLabel as="dt">{spec.label}</ProductOverviewSpecLabel>
                      <ProductOverviewSpecValue as="dd">{spec.value}</ProductOverviewSpecValue>
                    </ProductTechnicalSpecDetail>
                  ))}
                </ProductTechnicalSpecDetails>
              ))}
            </ProductTechnicalSpecPanels>
          </ProductOverviewSpecList>
        </ProductFullSpecificationSpecsInner>
      </ProductFullSpecificationSpecs>
      <ProductRelatedModelRoot
        aria-label={`Yamaha ${model.slug === "nvx" ? "NVX SP" : model.name} dealer enquiry`}
      >
        <ProductRelatedModelInner>
          <ProductRelatedModelCopy>
            <ProductRelatedModelText>
              <ProductRelatedModelTitle>
                {model.slug === "nvx" ? "NVX SP" : model.name}
              </ProductRelatedModelTitle>
              <ProductRelatedModelDescription>
                {model.slug === "nvx"
                  ? "Contact your nearest dealer for more information on the new NVX SP: you will be contacted to provide additional details and active financing proposals."
                  : `Contact your nearest dealer for more information on the Yamaha ${model.name}.`}
              </ProductRelatedModelDescription>
            </ProductRelatedModelText>
            <ProductRelatedModelActions>
              <Button onClick={() => setIsDealerPanelOpen(true)} size="sm" variant="light">
                CONTACT DEALER
              </Button>
            </ProductRelatedModelActions>
          </ProductRelatedModelCopy>
          <ProductRelatedModelImage
            alt={model.slug === "nvx" ? "Yamaha NVX SP in Gunmetal Grey" : model.alt}
            loading="lazy"
            src={model.slug === "nvx" ? PRODUCT_COLOR_OPTIONS[0]!.image : model.image}
          />
        </ProductRelatedModelInner>
      </ProductRelatedModelRoot>
      <ContactEnquiryPanel
        defaultTopic="Sales & Marketing"
        isOpen={isDealerPanelOpen}
        onClose={() => setIsDealerPanelOpen(false)}
        source="webflow-product-page"
        title="CONTACT DEALER"
      />
    </>
  );
}
