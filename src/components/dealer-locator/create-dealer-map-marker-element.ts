import type { DealerLocation } from "@/data/site-content.types";

type CreateDealerMapMarkerElementOptions = {
  dealer: DealerLocation;
  isSelected: boolean;
  onSelectDealer: (dealerId: string) => void;
};

export function createDealerMapMarkerElement({
  dealer,
  isSelected,
  onSelectDealer
}: CreateDealerMapMarkerElementOptions) {
  const markerButton = document.createElement("button");
  const markerTooltip = document.createElement("span");
  const markerTooltipMedia = document.createElement("span");
  const markerTooltipBody = document.createElement("span");
  const markerTooltipTitle = document.createElement("span");
  const markerTooltipMeta = document.createElement("span");
  const markerInner = document.createElement("span");
  const markerMiddle = document.createElement("span");
  const markerOuter = document.createElement("span");

  markerButton.type = "button";
  markerButton.className = isSelected ? "dealer-map-marker is-selected" : "dealer-map-marker";
  markerButton.setAttribute("aria-label", `Show ${dealer.label}`);
  markerButton.addEventListener("click", () => {
    onSelectDealer(dealer.id);
  });

  markerInner.className = "dealer-map-marker__inner";
  markerMiddle.className = "dealer-map-marker__middle";
  markerOuter.className = "dealer-map-marker__outer";
  markerTooltip.className = "dealer-map-marker__tooltip";
  markerTooltipMedia.className = dealer.image
    ? "dealer-map-marker__tooltip-media has-image"
    : "dealer-map-marker__tooltip-media";
  markerTooltipBody.className = "dealer-map-marker__tooltip-body";
  markerTooltipTitle.className = "dealer-map-marker__tooltip-title";
  markerTooltipMeta.className = "dealer-map-marker__tooltip-meta";

  markerInner.setAttribute("aria-hidden", "true");
  markerMiddle.setAttribute("aria-hidden", "true");
  markerOuter.setAttribute("aria-hidden", "true");
  markerTooltip.setAttribute("aria-hidden", "true");
  markerTooltipMedia.setAttribute("aria-hidden", "true");

  if (dealer.image) {
    markerTooltipMedia.style.backgroundImage = `url("${dealer.image}")`;
  } else {
    markerTooltipMedia.textContent = dealer.label
      .split(" ")
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
  }

  markerTooltipTitle.textContent = dealer.label;
  markerTooltipMeta.textContent = dealer.locality;
  markerTooltipBody.append(markerTooltipTitle, markerTooltipMeta);
  markerTooltip.append(markerTooltipMedia, markerTooltipBody);

  markerButton.append(markerTooltip, markerOuter, markerMiddle, markerInner);

  return markerButton;
}
