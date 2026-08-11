export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "980px",
  xl: "1360px"
} as const;

export const CONTAINERS = {
  prose: "720px",
  compact: "920px",
  default: "1240px",
  wide: "1360px"
} as const;

export const Z_INDEX = {
  base: 0,
  raised: 1,
  dropdown: 10,
  sticky: 50,
  sidebar: 100,
  overlay: 1000,
  modal: 1001,
  toast: 1100,
  splash: 1200
} as const;
