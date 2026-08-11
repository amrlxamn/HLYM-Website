export const FONT_FAMILIES = {
  body: '"Lato", Arial, sans-serif',
  display: '"Lato", Arial, sans-serif',
  mono: 'ui-monospace, "SFMono-Regular", Menlo, Monaco, Consolas, monospace'
} as const;

export const FONT_SIZES = {
  xs: "10px",
  sm: "11px",
  base: "13px",
  md: "14px",
  lg: "16px",
  xl: "18px",
  "2xl": "20px",
  "3xl": "24px",
  "4xl": "32px",
  "5xl": "40px",
  "6xl": "56px",
  "7xl": "80px",
  "8xl": "110px"
} as const;

export const FONT_WEIGHTS = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
} as const;

export const LINE_HEIGHTS = {
  none: 1,
  tight: 1.05,
  snug: 1.15,
  normal: 1.5,
  relaxed: 1.6,
  loose: 1.7
} as const;

export const LETTER_SPACINGS = {
  tighter: "-2px",
  tight: "-1px",
  normal: "0",
  wide: "1px",
  wider: "2px",
  widest: "4px"
} as const;
