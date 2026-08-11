import {
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LETTER_SPACINGS,
  LINE_HEIGHTS
} from "@/theme/tokens/typography-tokens.constants";

export const DOC_FONT_FAMILIES = Object.entries(FONT_FAMILIES).map(([name, value]) => ({
  name,
  token: `--font-family-${name === "body" ? "base" : name}`,
  value
}));

export const DOC_FONT_SIZES = Object.entries(FONT_SIZES).map(([name, value]) => ({
  name,
  token: `--font-size-${name}`,
  value
}));

export const DOC_FONT_WEIGHTS = Object.entries(FONT_WEIGHTS).map(([name, value]) => ({
  name,
  token: `--font-weight-${name}`,
  value: String(value)
}));

export const DOC_LINE_HEIGHTS = Object.entries(LINE_HEIGHTS).map(([name, value]) => ({
  name,
  token: `--leading-${name}`,
  value: String(value)
}));

export const DOC_LETTER_SPACINGS = Object.entries(LETTER_SPACINGS).map(([name, value]) => ({
  name,
  token: `--tracking-${name}`,
  value
}));
