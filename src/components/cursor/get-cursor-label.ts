import { getCursorElement } from "./get-cursor-element";

export function getCursorLabel(target: EventTarget | null): string | null {
  return getCursorElement(target)?.dataset.cursorLabel ?? null;
}
