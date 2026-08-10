import type { DealerLocation } from "@/data/site-content.types";

export function createDealerMapMarkerElement(
  dealer: DealerLocation,
  onSelectDealer: (dealerId: string) => void
) {
  const element = document.createElement("button");
  const outerPulse = document.createElement("span");
  const middlePulse = document.createElement("span");
  const dot = document.createElement("span");
  const card = document.createElement("span");
  const media = document.createElement("span");
  const body = document.createElement("span");
  const title = document.createElement("strong");
  const tag = document.createElement("span");
  const meta = document.createElement("span");
  const hours = document.createElement("span");

  element.className = "dealer-map-marker";
  element.type = "button";
  element.setAttribute("aria-label", `Show ${dealer.label}`);
  element.addEventListener("click", () => onSelectDealer(dealer.id));
  outerPulse.className = "dealer-map-marker__outer";
  middlePulse.className = "dealer-map-marker__middle";
  dot.className = "dealer-map-marker__inner";
  card.className = "dealer-map-marker__tooltip";
  media.className = "dealer-map-marker__tooltip-media";
  body.className = "dealer-map-marker__tooltip-body";
  title.className = "dealer-map-marker__tooltip-title";
  tag.className = "dealer-map-marker__tooltip-tag";
  meta.className = "dealer-map-marker__tooltip-meta";
  hours.className = "dealer-map-marker__tooltip-hours";
  title.textContent = dealer.label;
  tag.textContent = dealer.category;
  meta.textContent = dealer.locality;
  hours.textContent = dealer.hours;

  if (dealer.image) {
    const image = document.createElement("img");

    image.alt = "";
    image.decoding = "async";
    image.loading = "lazy";
    image.src = dealer.image;
    media.classList.add("has-image");
    media.append(image);
  } else {
    media.textContent = "Yamaha";
  }

  body.append(title, tag, meta, hours);
  card.append(media, body);
  element.append(outerPulse, middlePulse, dot, card);

  return element;
}
