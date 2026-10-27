export const DEALER_LOCATOR_MAP_CONFIG = {
  accessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN ?? "",
  autoRouteMaxDistanceKilometers: 120,
  bearing: -24,
  center: [101.564444, 3.228056] as const,
  config: {
    basemap: {
      lightPreset: "day",
      showPlaceLabels: false,
      showPointOfInterestLabels: false,
      showRoadLabels: true,
      show3dObjects: false,
      showTransitLabels: false,
      theme: "default"
    }
  },
  pitch: 68,
  style: "mapbox://styles/mapbox/standard",
  zoom: 13.6,
  maxZoom: 15,
  minZoom: 13
} as const;
