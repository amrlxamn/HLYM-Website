export const MOTION_DURATIONS = {
  instant: "0ms",
  fast: "125ms",
  press: "160ms",
  base: "240ms",
  slow: "420ms",
  reveal: "700ms"
} as const;

export const MOTION_EASINGS = {
  standard: "cubic-bezier(0.22, 1, 0.36, 1)",
  out: "cubic-bezier(0.23, 1, 0.32, 1)",
  inOut: "cubic-bezier(0.77, 0, 0.175, 1)",
  drawer: "cubic-bezier(0.32, 0.72, 0, 1)"
} as const;
