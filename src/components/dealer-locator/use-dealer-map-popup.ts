import { useEffect, useRef, useState } from "react";
import type { Map, MapMouseEvent } from "mapbox-gl";
import { DEALER_MARKER_LAYER_ID } from "./dealer-map-cluster.constants";

type UseDealerMapPopupOptions = {
  mapInstance: Map | null;
  onSelectDealer: (dealerId: string) => void;
  selectedDealerId: string;
};

export function useDealerMapPopup({
  mapInstance,
  onSelectDealer,
  selectedDealerId
}: UseDealerMapPopupOptions) {
  const [popupDealerId, setPopupDealerId] = useState<string | null>(null);
  const onSelectDealerRef = useRef(onSelectDealer);
  const pendingMapSelectionRef = useRef<string | null>(null);
  const previousSelectedDealerIdRef = useRef(selectedDealerId);
  onSelectDealerRef.current = onSelectDealer;

  useEffect(() => {
    if (previousSelectedDealerIdRef.current === selectedDealerId) {
      return;
    }

    if (pendingMapSelectionRef.current === selectedDealerId) {
      pendingMapSelectionRef.current = null;
    } else {
      setPopupDealerId(null);
    }

    previousSelectedDealerIdRef.current = selectedDealerId;
  }, [selectedDealerId]);

  useEffect(() => {
    if (!mapInstance) {
      return;
    }

    const map = mapInstance;

    function closeOnMapClick(event: MapMouseEvent) {
      const clickedDealer = map.getLayer(DEALER_MARKER_LAYER_ID)
        ? map.queryRenderedFeatures(event.point, { layers: [DEALER_MARKER_LAYER_ID] }).length > 0
        : false;

      if (!clickedDealer) {
        pendingMapSelectionRef.current = null;
        setPopupDealerId(null);
      }
    }

    function closePopup() {
      pendingMapSelectionRef.current = null;
      setPopupDealerId(null);
    }

    map.on("click", closeOnMapClick);
    map.on("dragstart", closePopup);

    return () => {
      map.off("click", closeOnMapClick);
      map.off("dragstart", closePopup);
    };
  }, [mapInstance]);

  return {
    closePopup: () => {
      pendingMapSelectionRef.current = null;
      setPopupDealerId(null);
    },
    openPopup: (dealerId: string) => {
      pendingMapSelectionRef.current = dealerId;
      onSelectDealerRef.current(dealerId);
      setPopupDealerId(dealerId);
    },
    popupDealerId
  };
}
