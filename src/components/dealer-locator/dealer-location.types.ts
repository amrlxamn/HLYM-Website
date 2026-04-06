import type { DealerLocation } from "@/data/site-content.types";

export type BrowserCoordinates = DealerLocation["coordinates"];

export type DealerRoute = {
  coordinates: readonly BrowserCoordinates[];
  distanceKilometers: number;
  durationMinutes: number | null;
};
