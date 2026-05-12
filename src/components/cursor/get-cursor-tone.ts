export type CursorTone = "auto" | "dark" | "light";

export function getCursorTone(target: EventTarget | null): CursorTone {
  if (!(target instanceof Element)) {
    return "auto";
  }

  const cursorElement = target.closest<HTMLElement>("[data-cursor-tone]");

  if (cursorElement?.dataset.cursorTone === "dark") {
    return "dark";
  }

  if (cursorElement?.dataset.cursorTone === "light") {
    return "light";
  }

  return "auto";
}
