export function observeCursorLabel(
  element: HTMLElement,
  onChange: (label: string | null) => void
): MutationObserver {
  const observer = new MutationObserver(() => {
    onChange(element.dataset.cursorLabel ?? null);
  });

  observer.observe(element, {
    attributeFilter: ["data-cursor-label"],
    attributes: true
  });

  return observer;
}
