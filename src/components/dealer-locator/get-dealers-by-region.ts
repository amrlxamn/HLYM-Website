import { DEALER_LOCATIONS } from "@/data/dealer-locations.constants";
import type { DealerLocation, DealerRegion } from "@/data/site-content.types";

export function getDealersByRegion(region: DealerRegion): readonly DealerLocation[] {
  return DEALER_LOCATIONS.filter((dealer) => dealer.region === region);
}
