import type { EasingOptions } from "mapbox-gl";
import type { DealerLocation } from "@/data/site-content.types";
import { DEALER_LOCATOR_MAP_CONFIG } from "./dealer-locator-map.constants";

const DESKTOP_BREAKPOINT = 980;
const PANEL_LEFT = 16;
const PANEL_WIDTH = 480;
const SAFE_MARGIN = 32;

export function getDealerCameraOptions(
  dealer: DealerLocation,
  containerWidth: number
): EasingOptions {
  const leftBoundary = PANEL_LEFT + PANEL_WIDTH + SAFE_MARGIN;
  const rightBoundary = containerWidth - SAFE_MARGIN;
  const visibleCenter = (leftBoundary + rightBoundary) / 2;
  const offsetX = containerWidth > DESKTOP_BREAKPOINT ? visibleCenter - containerWidth / 2 : 0;

  return {
    bearing: DEALER_LOCATOR_MAP_CONFIG.bearing,
    center: [...dealer.coordinates],
    curve: 1.1,
    duration: 900,
    essential: true,
    offset: [offsetX, 0],
    pitch: DEALER_LOCATOR_MAP_CONFIG.pitch,
    speed: 1.8,
    zoom: DEALER_LOCATOR_MAP_CONFIG.zoom
  };
}
