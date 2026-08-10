import type { GeoJSONSource, Map } from "mapbox-gl";
import type { DealerLocation } from "@/data/site-content.types";
import {
  DEALER_CLUSTER_COUNT_LAYER_ID,
  DEALER_CLUSTER_LAYER_ID,
  DEALER_CLUSTER_SOURCE_ID,
  DEALER_MARKER_LAYER_ID
} from "./dealer-map-cluster.constants";
import { getDealerMarkerFeatureCollection } from "./get-dealer-marker-feature-collection";

export function syncDealerMapClusterLayers(map: Map, dealers: readonly DealerLocation[]) {
  const featureCollection = getDealerMarkerFeatureCollection(dealers);
  const existingSource = map.getSource(DEALER_CLUSTER_SOURCE_ID) as GeoJSONSource | undefined;

  if (existingSource) {
    existingSource.setData(featureCollection);
  } else {
    map.addSource(DEALER_CLUSTER_SOURCE_ID, {
      cluster: true,
      clusterMaxZoom: 14,
      clusterRadius: 52,
      data: featureCollection,
      type: "geojson"
    });
  }

  if (!map.getLayer(DEALER_CLUSTER_LAYER_ID)) {
    map.addLayer({
      filter: ["has", "point_count"],
      id: DEALER_CLUSTER_LAYER_ID,
      paint: {
        "circle-color": "#ad1e28",
        "circle-opacity": 0.9,
        "circle-radius": ["step", ["get", "point_count"], 18, 10, 22, 30, 27],
        "circle-stroke-color": "#ffffff",
        "circle-stroke-width": 2
      },
      source: DEALER_CLUSTER_SOURCE_ID,
      type: "circle"
    });
  }

  if (!map.getLayer(DEALER_CLUSTER_COUNT_LAYER_ID)) {
    map.addLayer({
      filter: ["has", "point_count"],
      id: DEALER_CLUSTER_COUNT_LAYER_ID,
      layout: {
        "text-field": ["get", "point_count_abbreviated"],
        "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
        "text-size": 11
      },
      paint: { "text-color": "#ffffff" },
      source: DEALER_CLUSTER_SOURCE_ID,
      type: "symbol"
    });
  }

  if (!map.getLayer(DEALER_MARKER_LAYER_ID)) {
    map.addLayer({
      filter: ["!", ["has", "point_count"]],
      id: DEALER_MARKER_LAYER_ID,
      paint: {
        "circle-color": "#ee393d",
        "circle-radius": 7,
        "circle-stroke-color": "#ffffff",
        "circle-stroke-width": 2
      },
      source: DEALER_CLUSTER_SOURCE_ID,
      type: "circle"
    });
  }
}
