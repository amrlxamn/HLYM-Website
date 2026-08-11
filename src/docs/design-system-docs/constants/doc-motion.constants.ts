import type { DocMotionToken } from "../types/design-system-docs.types";

export const DOC_MOTION_TOKENS: readonly DocMotionToken[] = [
  {
    description: "Standard duration for most UI transitions: hovers, toggles, small state changes.",
    duration: "240ms",
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    name: "Base Duration",
    property: "transform, opacity, color"
  },
  {
    description: "Extended duration for larger transitions: modals, drawers, page reveals.",
    duration: "420ms",
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    name: "Slow Duration",
    property: "transform, opacity"
  },
  {
    description: "Fast duration for button press feedback and micro-interactions.",
    duration: "160ms",
    easing: "cubic-bezier(0.23, 1, 0.32, 1)",
    name: "Press Feedback",
    property: "transform"
  },
  {
    description: "Tooltip and small popover entrance.",
    duration: "125ms",
    easing: "cubic-bezier(0.23, 1, 0.32, 1)",
    name: "Tooltip Enter",
    property: "transform, opacity"
  }
] as const;

export const DOC_EASING_PRESETS: readonly { css: string; name: string }[] = [
  { css: "cubic-bezier(0.23, 1, 0.32, 1)", name: "Strong Ease-Out" },
  { css: "cubic-bezier(0.77, 0, 0.175, 1)", name: "Strong Ease-In-Out" },
  { css: "cubic-bezier(0.32, 0.72, 0, 1)", name: "Drawer (iOS-like)" }
] as const;
