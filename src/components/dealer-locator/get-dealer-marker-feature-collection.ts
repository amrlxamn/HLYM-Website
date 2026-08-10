import type { FeatureCollection, Point } from "geojson";
import type { DealerLocation } from "@/data/site-content.types";

type DealerMarkerProperties = {
  dealerId: string;
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
        dealerId: dealer.id
      },
      type: "Feature"
    })),
    type: "FeatureCollection"
  };
}
