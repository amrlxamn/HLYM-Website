import { useEffect, useRef, useState } from "react";
import type { ControlPosition, Map } from "mapbox-gl";
import { createDealerMapInstance } from "./create-dealer-map-instance";

export function useDealerMapInstance(controlPosition: ControlPosition = "top-right") {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const [hasMapInitError, setHasMapInitError] = useState(false);
  const [mapInstance, setMapInstance] = useState<Map | null>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const observedCanvas = canvasRef.current;
    let isCancelled = false;
    let liveMapInstance: Awaited<ReturnType<typeof createDealerMapInstance>> = null;
    let resizeObserver: ResizeObserver | null = null;

    const syncMapSize = () => {
      liveMapInstance?.resize();
    };

    void createDealerMapInstance(observedCanvas, controlPosition)
      .then((map) => {
        if (isCancelled) {
          map?.remove();
          return;
        }

        if (!map) {
          setHasMapInitError(true);
          return;
        }

        liveMapInstance = map;
        setMapInstance(map);
        resizeObserver =
          typeof ResizeObserver === "undefined"
            ? null
            : new ResizeObserver(() => {
                syncMapSize();
              });

        resizeObserver?.observe(observedCanvas);
        window.addEventListener("resize", syncMapSize);

        map.once("load", () => {
          syncMapSize();
        });
      })
      .catch(() => {
        if (!isCancelled) {
          setHasMapInitError(true);
        }
      });

    return () => {
      isCancelled = true;
      resizeObserver?.disconnect();
      window.removeEventListener("resize", syncMapSize);
      setMapInstance(null);
      liveMapInstance?.remove();
    };
  }, [controlPosition]);

  return {
    canvasRef,
    hasMapInitError,
    mapInstance
  };
}
