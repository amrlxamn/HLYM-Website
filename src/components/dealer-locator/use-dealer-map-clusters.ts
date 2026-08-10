import { useEffect, useRef } from "react";
import type { GeoJSONSource, Map, MapLayerMouseEvent } from "mapbox-gl";
import type { DealerLocation } from "@/data/site-content.types";
import {
  DEALER_CLUSTER_COUNT_LAYER_ID,
  DEALER_CLUSTER_LAYER_ID,
  DEALER_CLUSTER_SOURCE_ID,
  DEALER_MARKER_LAYER_ID
} from "./dealer-map-cluster.constants";
import { syncDealerMapClusterLayers } from "./sync-dealer-map-cluster-layers";

type UseDealerMapClustersOptions = {
  dealers: readonly DealerLocation[];
  mapInstance: Map | null;
  onSelectDealer: (dealerId: string) => void;
};

export function useDealerMapClusters({
  dealers,
  mapInstance,
  onSelectDealer
}: UseDealerMapClustersOptions) {
  const onSelectDealerRef = useRef(onSelectDealer);
  onSelectDealerRef.current = onSelectDealer;

  useEffect(() => {
    if (!mapInstance) {
      return;
    }

    const map = mapInstance;
    let isCancelled = false;

    function selectDealer(event: MapLayerMouseEvent) {
      const dealerId = event.features?.[0]?.properties?.dealerId;

      if (typeof dealerId === "string") {
        onSelectDealerRef.current(dealerId);
      }
    }

    function expandCluster(event: MapLayerMouseEvent) {
      const clusterId = Number(event.features?.[0]?.properties?.cluster_id);
      const source = map.getSource(DEALER_CLUSTER_SOURCE_ID) as GeoJSONSource | undefined;

      if (!source || !Number.isFinite(clusterId)) {
        return;
      }

      source.getClusterExpansionZoom(clusterId, (error, zoom) => {
        if (!error && typeof zoom === "number" && !isCancelled) {
          map.easeTo({ center: event.lngLat, zoom });
        }
      });
    }

    function syncClusters() {
      if (isCancelled) {
        return;
      }

      syncDealerMapClusterLayers(map, dealers);

      map.on("click", DEALER_MARKER_LAYER_ID, selectDealer);
      map.on("click", DEALER_CLUSTER_LAYER_ID, expandCluster);
    }

    if (map.isStyleLoaded()) {
      syncClusters();
    } else {
      map.once("load", syncClusters);
    }

    return () => {
      isCancelled = true;
      map.off("load", syncClusters);
      map.off("click", DEALER_MARKER_LAYER_ID, selectDealer);
      map.off("click", DEALER_CLUSTER_LAYER_ID, expandCluster);

      if (!map.isStyleLoaded()) {
        return;
      }

      for (const layerId of [
        DEALER_CLUSTER_COUNT_LAYER_ID,
        DEALER_CLUSTER_LAYER_ID,
        DEALER_MARKER_LAYER_ID
      ]) {
        if (map.getLayer(layerId)) {
          map.removeLayer(layerId);
        }
      }

      if (map.getSource(DEALER_CLUSTER_SOURCE_ID)) {
        map.removeSource(DEALER_CLUSTER_SOURCE_ID);
      }
    };
  }, [dealers, mapInstance]);
}
