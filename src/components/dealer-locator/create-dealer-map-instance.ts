import type { ControlPosition, Map } from "mapbox-gl";
import { DEALER_LOCATOR_MAP_CONFIG } from "./dealer-locator-map.constants";

export async function createDealerMapInstance(
  container: HTMLDivElement,
  controlPosition: ControlPosition = "top-right"
): Promise<Map | null> {
  const mapboxgl = await import("mapbox-gl");

  if (!mapboxgl.default.supported()) {
    return null;
  }

  mapboxgl.default.accessToken = DEALER_LOCATOR_MAP_CONFIG.accessToken;

  const map = new mapboxgl.default.Map({
    antialias: true,
    bearing: DEALER_LOCATOR_MAP_CONFIG.bearing,
    center: [...DEALER_LOCATOR_MAP_CONFIG.center],
    config: DEALER_LOCATOR_MAP_CONFIG.config,
    container,
    cooperativeGestures: false,
    interactive: true,
    maxZoom: DEALER_LOCATOR_MAP_CONFIG.maxZoom,
    minZoom: DEALER_LOCATOR_MAP_CONFIG.minZoom,
    pitch: DEALER_LOCATOR_MAP_CONFIG.pitch,
    style: DEALER_LOCATOR_MAP_CONFIG.style,
    zoom: DEALER_LOCATOR_MAP_CONFIG.zoom
  });

  map.addControl(
    new mapboxgl.default.NavigationControl({
      showCompass: false,
      showZoom: true,
      visualizePitch: false
    }),
    controlPosition
  );

  return map;
}
