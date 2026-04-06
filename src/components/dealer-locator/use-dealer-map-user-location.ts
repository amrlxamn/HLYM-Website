import { useEffect } from "react";
import type { Map, Marker } from "mapbox-gl";
import type { BrowserCoordinates } from "./dealer-location.types";

type UseDealerMapUserLocationOptions = {
  coordinates: BrowserCoordinates | null;
  mapInstance: Map | null;
};

function createDealerUserLocationMarkerElement() {
  const marker = document.createElement("div");
  const markerDot = document.createElement("span");
  const markerRing = document.createElement("span");
  const markerLabel = document.createElement("span");

  marker.className = "dealer-map-user-marker";
  markerDot.className = "dealer-map-user-marker__dot";
  markerRing.className = "dealer-map-user-marker__ring";
  markerLabel.className = "dealer-map-user-marker__label";
  markerLabel.textContent = "Your location";
  markerLabel.setAttribute("aria-hidden", "true");
  markerDot.setAttribute("aria-hidden", "true");
  markerRing.setAttribute("aria-hidden", "true");
  marker.append(markerRing, markerDot, markerLabel);

  return marker;
}

export function useDealerMapUserLocation({
  coordinates,
  mapInstance
}: UseDealerMapUserLocationOptions) {
  useEffect(() => {
    if (!coordinates || !mapInstance) {
      return;
    }

    let isCancelled = false;
    let marker: Marker | null = null;

    void import("mapbox-gl").then((mapboxgl) => {
      if (isCancelled) {
        return;
      }

      marker = new mapboxgl.default.Marker({
        anchor: "center",
        element: createDealerUserLocationMarkerElement()
      })
        .setLngLat([...coordinates])
        .addTo(mapInstance);
    });

    return () => {
      isCancelled = true;
      marker?.remove();
    };
  }, [coordinates, mapInstance]);
}
