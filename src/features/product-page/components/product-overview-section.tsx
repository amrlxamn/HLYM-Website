import { useScroll } from "framer-motion";
import { useRef } from "react";
import { toSentenceCase } from "@/lib/to-sentence-case";
import {
  PRODUCT_OVERVIEW_COLORS,
  PRODUCT_OVERVIEW_CONTENT
} from "../constants/product-overview.constants";
import {
  ProductOverviewContent,
  ProductOverviewDescription,
  ProductOverviewEyebrow,
  ProductOverviewTitle
} from "../styles/product-overview-copy.styles";
import {
  ProductOverviewColorGrid,
  ProductOverviewColorRunway
} from "../styles/product-overview-colors.styles";
import { ProductOverviewSpecList } from "../styles/product-overview-specs.styles";
import { ProductOverviewInner, ProductOverviewRoot } from "../styles/product-overview-shell.styles";
import type {
  ProductOverviewColor,
  ProductOverviewContent as ProductOverviewCopy
} from "../types/product-page.types";
import { ProductOverviewColorCard } from "./product-overview-color-card";
import { ProductOverviewSpecRow } from "./product-overview-spec-row";

type ProductOverviewSectionProps = {
  ariaLabel?: string;
  colors?: readonly ProductOverviewColor[];
  content?: ProductOverviewCopy;
};

export function ProductOverviewSection({
  ariaLabel = "Yamaha NVX overview",
  colors = PRODUCT_OVERVIEW_COLORS,
  content = PRODUCT_OVERVIEW_CONTENT
}: ProductOverviewSectionProps) {
  const runwayRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    target: runwayRef
  });

  return (
    <ProductOverviewRoot aria-label={toSentenceCase(ariaLabel)} data-cursor-tone="dark">
      <ProductOverviewInner>
        <ProductOverviewContent>
          <ProductOverviewEyebrow>{content.eyebrow}</ProductOverviewEyebrow>
          <ProductOverviewTitle>
            {content.titleLines[0]}
            <br />
            {content.titleLines[1]}
          </ProductOverviewTitle>
          <ProductOverviewDescription>{content.description}</ProductOverviewDescription>
        </ProductOverviewContent>

        <ProductOverviewSpecList>
          {content.specs.map((spec, index) => (
            <ProductOverviewSpecRow key={spec.label} index={index} spec={spec} />
          ))}
        </ProductOverviewSpecList>

        <ProductOverviewColorRunway $cardCount={colors.length} ref={runwayRef}>
          <ProductOverviewColorGrid>
            {colors.map((color, index) => (
              <ProductOverviewColorCard
                color={color}
                count={colors.length}
                index={index}
                key={color.label}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </ProductOverviewColorGrid>
        </ProductOverviewColorRunway>
      </ProductOverviewInner>
    </ProductOverviewRoot>
  );
}
