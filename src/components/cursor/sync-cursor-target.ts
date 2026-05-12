import type { MutableRefObject } from "react";
import { getCursorLabel } from "./get-cursor-label";
import { getCursorTone } from "./get-cursor-tone";
import { syncCursorLabelObserver } from "./sync-cursor-label-observer";

type SyncCursorTargetParams = {
  cursorElementRef: MutableRefObject<HTMLElement | null>;
  observerRef: MutableRefObject<MutationObserver | null>;
  onLabelChange: (label: string | null) => void;
  target: EventTarget | null;
};

export function syncCursorTarget({
  cursorElementRef,
  observerRef,
  onLabelChange,
  target
}: SyncCursorTargetParams) {
  const labelObserver = syncCursorLabelObserver({
    currentElement: cursorElementRef.current,
    observer: observerRef.current,
    onChange: onLabelChange,
    target
  });

  cursorElementRef.current = labelObserver.currentElement;
  observerRef.current = labelObserver.observer;

  return {
    label: getCursorLabel(target),
    tone: getCursorTone(target)
  };
}
