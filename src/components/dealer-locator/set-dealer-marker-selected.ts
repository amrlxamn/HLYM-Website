export function setDealerMarkerSelected(element: HTMLElement, isSelected: boolean) {
  element.classList.toggle("is-selected", isSelected);
  element.style.zIndex = isSelected ? "999" : "1";
}
