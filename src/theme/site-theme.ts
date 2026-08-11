import {
  ALPHA_COLORS,
  BRAND_COLORS,
  NEUTRAL_COLORS,
  SEMANTIC_COLORS
} from "./tokens/color-tokens.constants";
import { BREAKPOINTS, CONTAINERS, Z_INDEX } from "./tokens/layout-tokens.constants";
import { MOTION_DURATIONS, MOTION_EASINGS } from "./tokens/motion-tokens.constants";
import { RADII, SHADOWS, SPACING } from "./tokens/spacing-tokens.constants";
import {
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LETTER_SPACINGS,
  LINE_HEIGHTS
} from "./tokens/typography-tokens.constants";

export const siteTheme = {
  alpha: ALPHA_COLORS,
  breakpoints: BREAKPOINTS,
  colors: {
    background: {
      base: "#0a0a0a",
      canvas: "#ffffff",
      mutedSurface: "#f8f8f8",
      raised: "#0f0f0f",
      surface: "#fafafa"
    },
    border: {
      brandSubtle: "rgba(236, 28, 36, 0.4)",
      muted: "#eaecf0",
      inverse: "#ffffff18",
      subtle: "#00000014"
    },
    brand: {
      ...BRAND_COLORS,
      marker: BRAND_COLORS[400],
      primary: BRAND_COLORS[500]
    },
    neutral: NEUTRAL_COLORS,
    semantic: SEMANTIC_COLORS,
    shadow: {
      card: "0 24px 60px rgba(0, 0, 0, 0.14)"
    },
    text: {
      inverse: "#ffffff",
      dim: "#52525b",
      mutedOnDark: "#ffffff80",
      mutedOnLight: "#00000066",
      neutralOnDark: "#989898",
      primary: "#0a0a0a",
      readableOnDark: "#cacaca",
      softOnDark: "#ffffff50",
      washOnDark: "rgba(255, 255, 255, 0.47)",
      subtle: "#00000050"
    }
  },
  containers: CONTAINERS,
  contactHero: {
    gradients: {
      leftShade:
        "linear-gradient(90deg, rgba(10, 10, 10, 0.84) 0%, rgba(10, 10, 10, 0.52) 25%, rgba(10, 10, 10, 0) 58%)",
      verticalShade:
        "linear-gradient(180deg, rgba(10, 10, 10, 0.18) 0%, rgba(10, 10, 10, 0) 42%, rgba(10, 10, 10, 0.26) 100%)"
    },
    search: {
      border: "rgba(255, 255, 255, 0.24)",
      inset: "inset 0 1px 0 rgba(255, 255, 255, 0.18)",
      shadow: "0 14px 32px -14px rgba(0, 0, 0, 0.28)",
      surface: "rgba(255, 255, 255, 0.15)"
    }
  },
  productColors: {
    electricYellow: "#888a8c",
    violetRush: "#143a52"
  },
  layout: {
    container: CONTAINERS.default
  },
  motion: {
    duration: MOTION_DURATIONS,
    easing: MOTION_EASINGS
  },
  radii: RADII,
  shadows: SHADOWS,
  spacing: SPACING,
  typography: {
    body: FONT_FAMILIES.body,
    family: FONT_FAMILIES,
    letterSpacing: LETTER_SPACINGS,
    lineHeight: LINE_HEIGHTS,
    size: FONT_SIZES,
    weight: FONT_WEIGHTS
  },
  zIndex: Z_INDEX
} as const;

export type SiteTheme = typeof siteTheme;
