import { useEffect, useState } from "react";
import type { DealerLocation } from "@/data/site-content.types";
import { DEALER_LOCATOR_MAP_CONFIG } from "./dealer-locator-map.constants";
import type { BrowserCoordinates, DealerRoute } from "./dealer-location.types";
import { getDistanceBetweenCoordinates } from "./get-distance-between-coordinates";

type UseDealerRouteOptions = {
  destination: DealerLocation;
  origin: BrowserCoordinates | null;
};

type DirectionsApiRoute = {
  distance?: number;
  duration?: number;
  geometry?: {
    coordinates?: readonly [number, number][];
    type?: string;
  };
};

function createFallbackRoute(origin: BrowserCoordinates, destination: DealerLocation): DealerRoute {
  return {
    coordinates: [origin, destination.coordinates],
    distanceKilometers: getDistanceBetweenCoordinates(origin, destination.coordinates),
    durationMinutes: null
  };
}

export function useDealerRoute({ destination, origin }: UseDealerRouteOptions) {
  const [route, setRoute] = useState<DealerRoute | null>(null);

  useEffect(() => {
    if (!origin) {
      setRoute(null);
      return;
    }

    const fallbackRoute = createFallbackRoute(origin, destination);

    if (!DEALER_LOCATOR_MAP_CONFIG.accessToken) {
      setRoute(fallbackRoute);
      return;
    }

    const abortController = new AbortController();
    const destinationPoint = destination.coordinates.join(",");
    const originPoint = origin.join(",");
    const directionsUrl =
      "https://api.mapbox.com/directions/v5/mapbox/driving/" +
      `${originPoint};${destinationPoint}` +
      `?alternatives=false&geometries=geojson&overview=full&access_token=${DEALER_LOCATOR_MAP_CONFIG.accessToken}`;

    void fetch(directionsUrl, { signal: abortController.signal })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch dealer route");
        }

        return (await response.json()) as { routes?: DirectionsApiRoute[] };
      })
      .then((payload) => {
        const liveRoute = payload.routes?.[0];
        const routeCoordinates = liveRoute?.geometry?.coordinates;

        if (!routeCoordinates || routeCoordinates.length < 2) {
          setRoute(fallbackRoute);
          return;
        }

        setRoute({
          coordinates: routeCoordinates,
          distanceKilometers:
            typeof liveRoute.distance === "number"
              ? liveRoute.distance / 1000
              : fallbackRoute.distanceKilometers,
          durationMinutes:
            typeof liveRoute.duration === "number"
              ? liveRoute.duration / 60
              : fallbackRoute.durationMinutes
        });
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        setRoute(fallbackRoute);
      });

    return () => {
      abortController.abort();
    };
  }, [destination, origin]);

  return route;
}
