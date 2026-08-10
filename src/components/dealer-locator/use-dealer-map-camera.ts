import { useEffect, useState } from "react";
import type { DealerLocation } from "@/data/site-content.types";
import type { Map } from "mapbox-gl";
import { getDealerCameraOptions } from "./get-dealer-camera-options";

type UseDealerMapCameraOptions = {
  mapInstance: Map | null;
  selectedDealer: DealerLocation;
};

const TILE_PRELOAD_TIMEOUT_MS = 3000;

export function useDealerMapCamera({ mapInstance, selectedDealer }: UseDealerMapCameraOptions) {
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    if (!mapInstance) {
      return;
    }

    const map = mapInstance;
    let isCancelled = false;
    let preloadTimeout: ReturnType<typeof setTimeout> | null = null;

    const startFlight = () => {
      if (isCancelled) {
        return;
      }

      if (preloadTimeout) {
        clearTimeout(preloadTimeout);
      }

      map.off("idle", startFlight);
      setIsNavigating(false);
      map.flyTo(getDealerCameraOptions(selectedDealer, map.getContainer().clientWidth));
    };

    const preloadFlight = () => {
      if (isCancelled) {
        return;
      }

      map.stop();
      setIsNavigating(true);
      map.once("idle", startFlight);
      map.flyTo({
        ...getDealerCameraOptions(selectedDealer, map.getContainer().clientWidth),
        preloadOnly: true
      });
      preloadTimeout = setTimeout(startFlight, TILE_PRELOAD_TIMEOUT_MS);
    };

    if (map.isStyleLoaded()) {
      preloadFlight();
    } else {
      map.once("load", preloadFlight);
    }

    return () => {
      isCancelled = true;
      map.off("load", preloadFlight);
      map.off("idle", startFlight);
      if (preloadTimeout) {
        clearTimeout(preloadTimeout);
      }
      map.stop();
    };
  }, [mapInstance, selectedDealer]);

  return isNavigating;
}
