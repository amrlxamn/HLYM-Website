import { useState } from "react";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { PRODUCT_COLOR_OPTIONS } from "../constants/product-colors.constants";
import { PRODUCT_PAGE_COPY } from "../constants/product-page.constants";
import {
  ProductColorCurrentName,
  ProductColorName,
  ProductColorOptionMeta,
  ProductColorPanel,
  ProductColorSelectionIndicator,
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

type ProductColorSelectorProps = {
  colors?: readonly ProductColorOption[];
  onColorChange: (color: ProductColorOption) => void;
  selectedColor: ProductColorOption;
  swatchGroupLabel?: string;
};

export function ProductColorSelector({
  colors = PRODUCT_COLOR_OPTIONS,
  onColorChange,
  selectedColor,
  swatchGroupLabel = "Yamaha NVX body colors"
}: ProductColorSelectorProps) {
  return (
    <ProductColorPanel>
      <ProductColorCurrentName>{selectedColor.label}</ProductColorCurrentName>
      <ProductSwatchGrid aria-label={swatchGroupLabel} role="group">
        {colors.map((color) => (
          <ProductSwatchButton
            key={color.label}
            $isActive={color.label === selectedColor.label}
            aria-label={color.label}
            aria-pressed={color.label === selectedColor.label}
            onClick={() => onColorChange(color)}
            type="button"
          >
            <ProductColorOptionMeta>
              {color.label === selectedColor.label && (
                <ProductColorName>{color.label}</ProductColorName>
              )}
              <ProductColorSelectionIndicator
                $isActive={color.label === selectedColor.label}
                $swatch={color.swatch}
                aria-hidden="true"
              />
            </ProductColorOptionMeta>
          </ProductSwatchButton>
        ))}
      </ProductSwatchGrid>
    </ProductColorPanel>
  );
}

export function ProductColorsSection({
  ariaLabel = PRODUCT_PAGE_COPY.colorSectionAriaLabel,
  colors = PRODUCT_COLOR_OPTIONS,
  swatchGroupLabel = "Yamaha NVX body colors"
}: ProductColorsSectionProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0] ?? PRODUCT_COLOR_OPTIONS[0]!);

  return (
    <ProductColorsRoot aria-label={toSentenceCase(ariaLabel)}>
      <ProductColorsInner>
        <ProductColorStage>
          <img alt={selectedColor.alt} src={selectedColor.image} />
        </ProductColorStage>

        <ProductColorSelector
          colors={colors}
          onColorChange={setSelectedColor}
          selectedColor={selectedColor}
          swatchGroupLabel={swatchGroupLabel}
        />
      </ProductColorsInner>
    </ProductColorsRoot>
  );
}
