import { useEffect } from "react";
import type { DealerLocation } from "@/data/site-content.types";
import type { Map } from "mapbox-gl";

type UseDealerMapCameraOptions = {
  dealers: readonly DealerLocation[];
  mapInstance: Map | null;
  selectedDealerId: string;
};

export function useDealerMapCamera({
  dealers,
  mapInstance,
  selectedDealerId
}: UseDealerMapCameraOptions) {
  useEffect(() => {
    if (!mapInstance) {
      return;
    }

    const selectedDealer = dealers.find((dealer) => dealer.id === selectedDealerId) ?? dealers[0]!;
    const containerWidth = mapInstance.getContainer().clientWidth;
    const desktopPanelWidth = Math.min(540, Math.round(containerWidth * 0.36));
    const offsetX = containerWidth > 980 ? Math.round(desktopPanelWidth * -0.5) : 0;

    mapInstance.easeTo({
      center: [...selectedDealer.coordinates],
      duration: 900,
      essential: true,
      offset: [offsetX, 0]
    });
  }, [dealers, mapInstance, selectedDealerId]);
}
