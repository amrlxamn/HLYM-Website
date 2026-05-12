import { getCursorElement } from "./get-cursor-element";
import { observeCursorLabel } from "./observe-cursor-label";

type SyncCursorLabelObserverParams = {
  currentElement: HTMLElement | null;
  observer: MutationObserver | null;
  onChange: (label: string | null) => void;
  target: EventTarget | null;
};

export function syncCursorLabelObserver({
  currentElement,
  observer,
  onChange,
  target
}: SyncCursorLabelObserverParams) {
  const cursorElement = getCursorElement(target);

  if (currentElement === cursorElement) {
    return { currentElement, observer };
  }

  observer?.disconnect();

  return {
    currentElement: cursorElement,
    observer: cursorElement ? observeCursorLabel(cursorElement, onChange) : null
  };
}
