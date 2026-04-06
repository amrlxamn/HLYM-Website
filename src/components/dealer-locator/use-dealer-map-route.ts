import { useEffect } from "react";
import type { Feature, LineString } from "geojson";
import type { GeoJSONSource, Map } from "mapbox-gl";
import type { DealerRoute } from "./dealer-location.types";

type UseDealerMapRouteOptions = {
  mapInstance: Map | null;
  route: DealerRoute | null;
};

const DEALER_ROUTE_LAYER_ID = "dealer-route-layer";
const DEALER_ROUTE_SOURCE_ID = "dealer-route-source";

export function useDealerMapRoute({ mapInstance, route }: UseDealerMapRouteOptions) {
  useEffect(() => {
    if (!mapInstance) {
      return;
    }

    const map = mapInstance;
    let isCancelled = false;

    function syncRouteLayer() {
      if (isCancelled) {
        return;
      }

      const existingLayer = map.getLayer(DEALER_ROUTE_LAYER_ID);
      const existingSource = map.getSource(DEALER_ROUTE_SOURCE_ID) as GeoJSONSource | undefined;

      if (!route) {
        if (existingLayer) {
          map.removeLayer(DEALER_ROUTE_LAYER_ID);
        }

        if (existingSource) {
          map.removeSource(DEALER_ROUTE_SOURCE_ID);
        }

        return;
      }

      const routeFeature: Feature<LineString> = {
        geometry: {
          coordinates: route.coordinates.map(([longitude, latitude]) => [longitude, latitude]),
          type: "LineString"
        },
        properties: {},
        type: "Feature"
      } as const;

      if (existingSource) {
        existingSource.setData(routeFeature);
      } else {
        map.addSource(DEALER_ROUTE_SOURCE_ID, {
          data: routeFeature,
          type: "geojson"
        });
      }

      if (existingLayer) {
        return;
      }

      map.addLayer({
        id: DEALER_ROUTE_LAYER_ID,
        layout: {
          "line-cap": "round",
          "line-join": "round"
        },
        paint: {
          "line-color": "#ee393d",
          "line-opacity": 0.94,
          "line-width": 5
        },
        source: DEALER_ROUTE_SOURCE_ID,
        type: "line"
      });
    }

    if (map.isStyleLoaded()) {
      syncRouteLayer();
    } else {
      map.once("load", syncRouteLayer);
    }

    return () => {
      isCancelled = true;

      if (!map.isStyleLoaded()) {
        return;
      }

      if (map.getLayer(DEALER_ROUTE_LAYER_ID)) {
        map.removeLayer(DEALER_ROUTE_LAYER_ID);
      }

      if (map.getSource(DEALER_ROUTE_SOURCE_ID)) {
        map.removeSource(DEALER_ROUTE_SOURCE_ID);
      }
    };
  }, [mapInstance, route]);
}
