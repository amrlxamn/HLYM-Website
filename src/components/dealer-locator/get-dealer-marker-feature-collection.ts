import type { FeatureCollection, Point } from "geojson";
import type { DealerLocation } from "@/data/site-content.types";
import { getDealerMarkerLabel } from "./get-dealer-marker-label";

type DealerMarkerProperties = {
  dealerId: string;
  markerLabel: string;
};

export function getDealerMarkerFeatureCollection(
  dealers: readonly DealerLocation[]
): FeatureCollection<Point, DealerMarkerProperties> {
  return {
    features: dealers.map((dealer) => ({
      geometry: {
        coordinates: [...dealer.coordinates],
        type: "Point"
      },
      properties: {
        dealerId: dealer.id,
        markerLabel: getDealerMarkerLabel(dealer)
      },
      type: "Feature"
    })),
    type: "FeatureCollection"
  };
}
