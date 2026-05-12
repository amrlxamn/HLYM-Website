import { useState } from "react";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { PRODUCT_COLOR_OPTIONS } from "../constants/product-colors.constants";
import { PRODUCT_PAGE_COPY } from "../constants/product-page.constants";
import {
  ProductColorName,
  ProductColorPanel,
  ProductColorsInner,
  ProductColorsRoot,
  ProductColorStage,
  ProductSwatchButton,
  ProductSwatchGrid
} from "../styles/product-colors-section.styles";
import type { ProductColorOption } from "../types/product-page.types";

type ProductColorsSectionProps = {
  ariaLabel?: string;
  colors?: readonly ProductColorOption[];
  swatchGroupLabel?: string;
};

export function ProductColorsSection({
  ariaLabel = PRODUCT_PAGE_COPY.colorSectionAriaLabel,
  colors = PRODUCT_COLOR_OPTIONS,
  swatchGroupLabel = "Yamaha NVX body colors"
}: ProductColorsSectionProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0] ?? PRODUCT_COLOR_OPTIONS[0]!);

  return (
    <ProductColorsRoot aria-label={toSentenceCase(ariaLabel)} data-cursor-tone="light">
      <ProductColorsInner>
        <ProductColorStage>
          <img alt={selectedColor.alt} src={selectedColor.image} />
        </ProductColorStage>

        <ProductColorPanel>
          <ProductSwatchGrid aria-label={swatchGroupLabel} role="group">
            {colors.map((color) => (
              <ProductSwatchButton
                key={color.label}
                $isActive={color.label === selectedColor.label}
                aria-label={color.label}
                aria-pressed={color.label === selectedColor.label}
                onClick={() => setSelectedColor(color)}
                type="button"
              >
                <img alt="" src={color.swatch} />
              </ProductSwatchButton>
            ))}
          </ProductSwatchGrid>
          <ProductColorName>{selectedColor.label}</ProductColorName>
        </ProductColorPanel>
      </ProductColorsInner>
    </ProductColorsRoot>
  );
}
