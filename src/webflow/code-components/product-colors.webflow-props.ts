import { props } from "@webflow/data-types";
import { PRODUCT_COLOR_OPTIONS } from "@/features/product-page";
import { PRODUCT_PAGE_COPY } from "@/features/product-page";
import { toSentenceCase } from "@/lib/to-sentence-case";

const CONTENT_GROUP = "content";
const COLOR_1_GROUP = "color 1";
const COLOR_2_GROUP = "color 2";
const COLOR_3_GROUP = "color 3";
const COLOR_4_GROUP = "color 4";

export const PRODUCT_COLORS_WEBFLOW_PROPS = {
  ariaLabel: props.Text({
    name: toSentenceCase("aria label"),
    group: CONTENT_GROUP,
    defaultValue: PRODUCT_PAGE_COPY.colorSectionAriaLabel
  }),
  visibleColorCount: props.Number({
    name: toSentenceCase("visible color count"),
    group: CONTENT_GROUP,
    defaultValue: 4,
    min: 1,
    max: 4,
    decimals: 0
  }),
  color1Label: props.Text({
    name: toSentenceCase("label"),
    group: COLOR_1_GROUP,
    defaultValue: PRODUCT_COLOR_OPTIONS[0]!.label
  }),
  color1Alt: props.Text({
    name: toSentenceCase("alt text"),
    group: COLOR_1_GROUP,
    defaultValue: PRODUCT_COLOR_OPTIONS[0]!.alt
  }),
  color1Image: props.Image({ name: toSentenceCase("image"), group: COLOR_1_GROUP }),
  color1Swatch: props.Image({ name: toSentenceCase("swatch"), group: COLOR_1_GROUP }),
  color2Label: props.Text({
    name: toSentenceCase("label"),
    group: COLOR_2_GROUP,
    defaultValue: PRODUCT_COLOR_OPTIONS[1]!.label
  }),
  color2Alt: props.Text({
    name: toSentenceCase("alt text"),
    group: COLOR_2_GROUP,
    defaultValue: PRODUCT_COLOR_OPTIONS[1]!.alt
  }),
  color2Image: props.Image({ name: toSentenceCase("image"), group: COLOR_2_GROUP }),
  color2Swatch: props.Image({ name: toSentenceCase("swatch"), group: COLOR_2_GROUP }),
  color3Label: props.Text({
    name: toSentenceCase("label"),
    group: COLOR_3_GROUP,
    defaultValue: PRODUCT_COLOR_OPTIONS[2]!.label
  }),
  color3Alt: props.Text({
    name: toSentenceCase("alt text"),
    group: COLOR_3_GROUP,
    defaultValue: PRODUCT_COLOR_OPTIONS[2]!.alt
  }),
  color3Image: props.Image({ name: toSentenceCase("image"), group: COLOR_3_GROUP }),
  color3Swatch: props.Image({ name: toSentenceCase("swatch"), group: COLOR_3_GROUP }),
  color4Label: props.Text({
    name: toSentenceCase("label"),
    group: COLOR_4_GROUP,
    defaultValue: PRODUCT_COLOR_OPTIONS[3]!.label
  }),
  color4Alt: props.Text({
    name: toSentenceCase("alt text"),
    group: COLOR_4_GROUP,
    defaultValue: PRODUCT_COLOR_OPTIONS[3]!.alt
  }),
  color4Image: props.Image({ name: toSentenceCase("image"), group: COLOR_4_GROUP }),
  color4Swatch: props.Image({ name: toSentenceCase("swatch"), group: COLOR_4_GROUP })
};
