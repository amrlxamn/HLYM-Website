export function getCursorTargetAtPoint(x: number, y: number): Element | null {
  return document.elementFromPoint(x, y);
}
