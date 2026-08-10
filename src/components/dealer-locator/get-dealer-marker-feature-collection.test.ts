import { describe, expect, it } from "vitest";
import { DEALER_LOCATIONS } from "@/data/dealer-locations.constants";
import { getDealerMarkerFeatureCollection } from "./get-dealer-marker-feature-collection";

describe("getDealerMarkerFeatureCollection", () => {
  it("creates one clusterable point feature per dealer", () => {
    const collection = getDealerMarkerFeatureCollection(DEALER_LOCATIONS);
    const firstDealer = DEALER_LOCATIONS[0]!;

    expect(collection.features).toHaveLength(DEALER_LOCATIONS.length);
    expect(collection.features[0]).toEqual({
      geometry: {
        coordinates: [...firstDealer.coordinates],
        type: "Point"
      },
      properties: {
        dealerId: firstDealer.id
      },
      type: "Feature"
    });
  });
});
