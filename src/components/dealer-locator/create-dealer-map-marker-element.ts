import type { DealerLocation } from "@/data/site-content.types";
import { isDealerOpenNow } from "./is-dealer-open-now";

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
  const hoursIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const hoursIconCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  const hoursIconHands = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const hoursText = document.createElement("span");
  const hoursSeparator = document.createElement("span");
  const openStatus = document.createElement("span");

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
  hoursIcon.setAttribute("class", "dealer-map-marker__tooltip-hours-icon");
  hoursIcon.setAttribute("aria-hidden", "true");
  hoursIcon.setAttribute("fill", "none");
  hoursIcon.setAttribute("stroke", "currentColor");
  hoursIcon.setAttribute("stroke-linecap", "round");
  hoursIcon.setAttribute("stroke-linejoin", "round");
  hoursIcon.setAttribute("stroke-width", "2");
  hoursIcon.setAttribute("viewBox", "0 0 24 24");
  hoursIconCircle.setAttribute("cx", "12");
  hoursIconCircle.setAttribute("cy", "12");
  hoursIconCircle.setAttribute("r", "10");
  hoursIconHands.setAttribute("d", "M12 6v6l4 2");
  hoursIcon.append(hoursIconCircle, hoursIconHands);
  hoursText.textContent = dealer.hours || "Hours unavailable";
  hoursSeparator.className = "dealer-map-marker__tooltip-hours-separator";
  hoursSeparator.setAttribute("aria-hidden", "true");
  openStatus.className = `dealer-map-marker__tooltip-status ${
    isDealerOpenNow(dealer.hours) ? "is-open" : "is-closed"
  }`;
  openStatus.textContent = isDealerOpenNow(dealer.hours) ? "Open Now" : "Closed";
  title.textContent = dealer.label;
  tag.textContent = dealer.category;
  meta.textContent = dealer.locality;
  hours.append(hoursIcon, hoursText, hoursSeparator, openStatus);

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
