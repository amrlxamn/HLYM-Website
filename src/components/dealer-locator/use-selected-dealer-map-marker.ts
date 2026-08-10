import { useEffect, useRef } from "react";
import type { Map as MapboxMap } from "mapbox-gl";
import type { DealerLocation } from "@/data/site-content.types";
import { createDealerMapMarkerElement } from "./create-dealer-map-marker-element";
import { setDealerMarkerSelected } from "./set-dealer-marker-selected";

type UseSelectedDealerMapMarkerOptions = {
  mapInstance: MapboxMap | null;
  onSelectDealer: (dealerId: string) => void;
  selectedDealer: DealerLocation;
};

export function useSelectedDealerMapMarker({
  mapInstance,
  onSelectDealer,
  selectedDealer
}: UseSelectedDealerMapMarkerOptions) {
  const onSelectDealerRef = useRef(onSelectDealer);
  onSelectDealerRef.current = onSelectDealer;

  useEffect(() => {
    if (!mapInstance) {
      return;
    }

    let isCancelled = false;
    let selectedMarker: import("mapbox-gl").Marker | null = null;

    void import("mapbox-gl").then(({ default: mapboxgl }) => {
      if (isCancelled) {
        return;
      }

      const element = createDealerMapMarkerElement(selectedDealer, (dealerId) =>
        onSelectDealerRef.current(dealerId)
      );

      setDealerMarkerSelected(element, true);
      selectedMarker = new mapboxgl.Marker({ anchor: "center", element })
        .setLngLat([...selectedDealer.coordinates])
        .addTo(mapInstance);
    });

    return () => {
      isCancelled = true;
      selectedMarker?.remove();
    };
  }, [mapInstance, selectedDealer]);
}
