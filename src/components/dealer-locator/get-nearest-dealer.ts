import type { DealerLocation } from "@/data/site-content.types";
import type { BrowserCoordinates } from "./dealer-location.types";
import { getDistanceBetweenCoordinates } from "./get-distance-between-coordinates";

export function getNearestDealer(origin: BrowserCoordinates, dealers: readonly DealerLocation[]) {
  let nearestDealer = dealers[0] ?? null;
  let nearestDistance = nearestDealer
    ? getDistanceBetweenCoordinates(origin, nearestDealer.coordinates)
    : Number.POSITIVE_INFINITY;

  dealers.forEach((dealer) => {
    const distance = getDistanceBetweenCoordinates(origin, dealer.coordinates);

    if (distance >= nearestDistance) {
      return;
    }

    nearestDealer = dealer;
    nearestDistance = distance;
  });

  return nearestDealer;
}
