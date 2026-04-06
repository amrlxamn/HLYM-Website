import { useEffect } from "react";
import type { DealerLocation } from "@/data/site-content.types";
import type { Map } from "mapbox-gl";
import { DEALER_LOCATOR_MAP_CONFIG } from "./dealer-locator-map.constants";
import type { BrowserCoordinates } from "./dealer-location.types";

type UseDealerMapCameraOptions = {
  dealers: readonly DealerLocation[];
  mapInstance: Map | null;
  selectedDealerId: string;
  userCoordinates: BrowserCoordinates | null;
};

export function useDealerMapCamera({
  dealers,
  mapInstance,
  selectedDealerId,
  userCoordinates
}: UseDealerMapCameraOptions) {
  useEffect(() => {
    if (!mapInstance) {
      return;
    }

    const selectedDealer = dealers.find((dealer) => dealer.id === selectedDealerId) ?? dealers[0]!;
    const containerWidth = mapInstance.getContainer().clientWidth;
    const desktopPanelWidth = Math.min(540, Math.round(containerWidth * 0.36));
    const offsetX = containerWidth > 980 ? Math.round(desktopPanelWidth * -0.5) : 0;

    if (userCoordinates) {
      const [userLongitude, userLatitude] = userCoordinates;
      const [dealerLongitude, dealerLatitude] = selectedDealer.coordinates;

      mapInstance.fitBounds(
        [
          [Math.min(userLongitude, dealerLongitude), Math.min(userLatitude, dealerLatitude)],
          [Math.max(userLongitude, dealerLongitude), Math.max(userLatitude, dealerLatitude)]
        ],
        {
          bearing: DEALER_LOCATOR_MAP_CONFIG.bearing,
          duration: 900,
          essential: true,
          maxZoom: 13.8,
          padding: {
            bottom: 72,
            left: containerWidth > 980 ? 84 : 32,
            right: containerWidth > 980 ? desktopPanelWidth + 84 : 32,
            top: 72
          },
          pitch: DEALER_LOCATOR_MAP_CONFIG.pitch
        }
      );

      return;
    }

    mapInstance.easeTo({
      bearing: DEALER_LOCATOR_MAP_CONFIG.bearing,
      center: [...selectedDealer.coordinates],
      duration: 900,
      essential: true,
      offset: [offsetX, 0],
      pitch: DEALER_LOCATOR_MAP_CONFIG.pitch
    });
  }, [dealers, mapInstance, selectedDealerId, userCoordinates]);
}
