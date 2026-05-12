import type { CustomCursorState } from "./custom-cursor-state.types";

export const INITIAL_CUSTOM_CURSOR_STATE: CustomCursorState = {
  isActive: false,
  isEnabled: false,
  isVisible: false,
  label: null,
  tone: "auto",
  x: 0,
  y: 0
};
