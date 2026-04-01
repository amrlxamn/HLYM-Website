import type { DealerLocation } from "@/data/site-content.types";

const STATIC_MAP_BOUNDS = {
  east: 119.8,
  north: 7.5,
  south: 0.8,
  west: 99.3
} as const;

const STATIC_MAP_PADDING = {
  horizontal: 8,
  vertical: 12
} as const;

export function getStaticMarkerPosition(coordinates: DealerLocation["coordinates"]) {
  const [longitude, latitude] = coordinates;
  const horizontalRange = STATIC_MAP_BOUNDS.east - STATIC_MAP_BOUNDS.west;
  const verticalRange = STATIC_MAP_BOUNDS.north - STATIC_MAP_BOUNDS.south;
  const rawLeft = (longitude - STATIC_MAP_BOUNDS.west) / horizontalRange;
  const rawTop = (STATIC_MAP_BOUNDS.north - latitude) / verticalRange;
  const paddedLeft =
    STATIC_MAP_PADDING.horizontal + rawLeft * (100 - STATIC_MAP_PADDING.horizontal * 2);
  const paddedTop = STATIC_MAP_PADDING.vertical + rawTop * (100 - STATIC_MAP_PADDING.vertical * 2);
  const left = Math.min(
    100 - STATIC_MAP_PADDING.horizontal,
    Math.max(STATIC_MAP_PADDING.horizontal, paddedLeft)
  );
  const top = Math.min(
    100 - STATIC_MAP_PADDING.vertical,
    Math.max(STATIC_MAP_PADDING.vertical, paddedTop)
  );

  return {
    left: `${left}%`,
    top: `${top}%`
  };
}
