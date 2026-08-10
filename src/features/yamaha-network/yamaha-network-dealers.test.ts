import { describe, expect, it } from "vitest";
import dataset from "./yamaha-dealers.json";

const DEALER_CATEGORIES = new Set([
  "authorized dealer",
  "big bike",
  "genblu merchant",
  "spare parts stockist",
  "star center",
  "star shop",
  "yes",
  "ygp store",
  "yqs"
]);

const CORRECTED_COORDINATES: Record<string, readonly [number, number]> = {
  "CHOONG KOK MOTORS": [101.1524684, 4.3115985],
  "CSL BROTHERS SDN BHD": [100.548069, 5.515066],
  "HOCK LIONG MOTOR SDN BHD": [112.090255, 2.892479],
  "KEDAI MOTOR FASROI": [101.072156, 4.819661],
  "P & U CYCLE (M) SDN.BHD.": [101.74125, 3.177571],
  "SOON HUAT SENG BROTHERS (DUNGUN) SDN BHD": [103.0872773, 5.1263734],
  "SOON TEAK TRADING": [102.2453863, 2.1994824],
  "SYKT MOTORCYCLE SALES CENTRE S/B": [101.6424345, 3.1229577],
  "TEXAAN MOTORS SDN BHD": [101.0255893, 4.4987674],
  "TIGA-S MOTORSIKAL SDN BHD": [101.7502412, 3.2029366]
};

describe("Yamaha dealer dataset", () => {
  it("contains the complete unique dealer snapshot", () => {
    const ids = dataset.dealers.map((dealer) => dealer.id);

    expect(dataset.count).toBe(252);
    expect(dataset.dealers).toHaveLength(dataset.count);
    expect(new Set(ids).size).toBe(dataset.count);
  });

  it("is alphabetically sorted", () => {
    const labels = dataset.dealers.map((dealer) => dealer.label);
    const sortedLabels = [...labels].sort((left, right) =>
      left.localeCompare(right, "en", { sensitivity: "base" })
    );

    expect(labels).toEqual(sortedLabels);
  });

  it("contains valid map coordinates and categories", () => {
    for (const dealer of dataset.dealers) {
      expect(dealer.coordinates).toHaveLength(2);
      expect(dealer.coordinates.every(Number.isFinite)).toBe(true);
      expect(dealer.categories.length).toBeGreaterThan(0);
      expect(dealer.categories.every((category) => DEALER_CATEGORIES.has(category))).toBe(true);
    }
  });

  it("serves every dealer image from the public Supabase asset bucket", () => {
    for (const dealer of dataset.dealers) {
      const imageUrl = new URL(dealer.image);

      expect(imageUrl.hostname).toBe("fbnhcdpvqlkfkahtigwh.supabase.co");
      expect(imageUrl.pathname).toMatch(
        /^\/storage\/v1\/object\/public\/site-assets\/hlym\/dealers\//
      );
    }
  });

  it("keeps audited coordinate corrections and navigation links aligned", () => {
    for (const dealer of dataset.dealers) {
      const [longitude, latitude] = dealer.coordinates;

      expect(latitude).toBeGreaterThanOrEqual(0.5);
      expect(latitude).toBeLessThanOrEqual(7.5);
      expect(longitude).toBeGreaterThanOrEqual(99.5);
      expect(longitude).toBeLessThanOrEqual(119.5);
      expect(new URL(dealer.mapUrl).searchParams.get("q")?.split(",").map(Number)).toEqual([
        latitude,
        longitude
      ]);
      expect(new URL(dealer.wazeUrl).searchParams.get("ll")?.split(",").map(Number)).toEqual([
        latitude,
        longitude
      ]);
    }

    for (const [label, coordinates] of Object.entries(CORRECTED_COORDINATES)) {
      expect(dataset.dealers.find((dealer) => dealer.label === label)?.coordinates).toEqual(
        coordinates
      );
    }
  });
});
