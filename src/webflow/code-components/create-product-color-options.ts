import { PRODUCT_COLOR_OPTIONS } from "@/features/product-page";
import type { ProductColorOption } from "@/features/product-page";
import type { ProductColorsWebflowProps } from "./product-colors.types";

export function createProductColorOptions(
  props: ProductColorsWebflowProps
): readonly ProductColorOption[] {
  const colors = [
    {
      alt: props.color1Alt || props.color1Image?.alt || PRODUCT_COLOR_OPTIONS[0]!.alt,
      image: props.color1Image?.src || PRODUCT_COLOR_OPTIONS[0]!.image,
      label: props.color1Label || PRODUCT_COLOR_OPTIONS[0]!.label,
      swatch: props.color1Swatch?.src || PRODUCT_COLOR_OPTIONS[0]!.swatch
    },
    {
      alt: props.color2Alt || props.color2Image?.alt || PRODUCT_COLOR_OPTIONS[1]!.alt,
      image: props.color2Image?.src || PRODUCT_COLOR_OPTIONS[1]!.image,
      label: props.color2Label || PRODUCT_COLOR_OPTIONS[1]!.label,
      swatch: props.color2Swatch?.src || PRODUCT_COLOR_OPTIONS[1]!.swatch
    },
    {
      alt: props.color3Alt || props.color3Image?.alt || PRODUCT_COLOR_OPTIONS[2]!.alt,
      image: props.color3Image?.src || PRODUCT_COLOR_OPTIONS[2]!.image,
      label: props.color3Label || PRODUCT_COLOR_OPTIONS[2]!.label,
      swatch: props.color3Swatch?.src || PRODUCT_COLOR_OPTIONS[2]!.swatch
    },
    {
      alt: props.color4Alt || props.color4Image?.alt || PRODUCT_COLOR_OPTIONS[3]!.alt,
      image: props.color4Image?.src || PRODUCT_COLOR_OPTIONS[3]!.image,
      label: props.color4Label || PRODUCT_COLOR_OPTIONS[3]!.label,
      swatch: props.color4Swatch?.src || PRODUCT_COLOR_OPTIONS[3]!.swatch
    }
  ];

  return colors.slice(0, props.visibleColorCount || colors.length);
}
