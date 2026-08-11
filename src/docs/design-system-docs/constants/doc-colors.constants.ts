import {
  BRAND_COLORS,
  NEUTRAL_COLORS,
  SEMANTIC_COLORS
} from "@/theme/tokens/color-tokens.constants";

export const DOC_COLOR_SCALES = [
  {
    description: "Yamaha red is the only chromatic brand accent. 500 is the canonical brand value.",
    name: "Brand",
    prefix: "--color-brand",
    values: BRAND_COLORS
  },
  {
    description:
      "A cool-neutral ramp spanning light canvases through the primary off-black background.",
    name: "Neutral",
    prefix: "--color-neutral",
    values: NEUTRAL_COLORS
  }
] as const;

export const DOC_SEMANTIC_COLORS = [
  { name: "Success", token: "--color-success", value: SEMANTIC_COLORS.success },
  { name: "Warning", token: "--color-warning", value: SEMANTIC_COLORS.warning },
  { name: "Error", token: "--color-error", value: SEMANTIC_COLORS.error },
  { name: "Information", token: "--color-info", value: SEMANTIC_COLORS.info }
] as const;
