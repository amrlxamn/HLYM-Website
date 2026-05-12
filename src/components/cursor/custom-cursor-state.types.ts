import type { CursorTone } from "./get-cursor-tone";

export type CustomCursorState = {
  isActive: boolean;
  isEnabled: boolean;
  isVisible: boolean;
  label: string | null;
  tone: CursorTone;
  x: number;
  y: number;
};
