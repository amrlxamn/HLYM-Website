import type { ControlPosition } from "mapbox-gl";
import { useState } from "react";
import { SITE_COPY } from "@/data/site-copy.constants";
import type { DealerLocation } from "@/data/site-content.types";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { DealerMapStaticStage } from "./dealer-map-static-stage";
import { DealerMapLoading } from "./dealer-map-loading.styles";
import { DEALER_LOCATOR_MAP_CONFIG } from "./dealer-locator-map.constants";
import type { BrowserCoordinates, DealerRoute } from "./dealer-location.types";
import { DealerMapCanvas, DealerMapStaticImage } from "./dealer-locator.styles";
import { DealerMapUnavailable } from "./dealer-map-unavailable";
import { getDealerMarkerLabel } from "./get-dealer-marker-label";
import { getAssetUrl } from "@/lib/get-asset-url";
import { useDealerMapCamera } from "./use-dealer-map-camera";
import { useDealerMapClusters } from "./use-dealer-map-clusters";
import { useDealerMapInstance } from "./use-dealer-map-instance";
import { useDealerMapPopup } from "./use-dealer-map-popup";
import { useDealerMapRoute } from "./use-dealer-map-route";
import { useDealerMapUserLocation } from "./use-dealer-map-user-location";
import { useSelectedDealerMapMarker } from "./use-selected-dealer-map-marker";

type DealerMapMapboxStageProps = {
  controlPosition?: ControlPosition;
  dealers: readonly DealerLocation[];
  fallbackToImage?: boolean;
  onSelectDealer: (dealerId: string) => void;
  route: DealerRoute | null;
  selectedDealer: DealerLocation;
  selectedDealerId: string;
  userCoordinates: BrowserCoordinates | null;
};

export function DealerMapMapboxStage({
  controlPosition = "top-right",
  dealers,
  fallbackToImage = false,
  onSelectDealer,
  route,
  selectedDealer,
  selectedDealerId,
  userCoordinates
}: DealerMapMapboxStageProps) {
  const dealerLocatorCopy = SITE_COPY.dealerLocator;
  const [hasStaticMapError, setHasStaticMapError] = useState(false);
  const { canvasRef, hasMapInitError, mapInstance } = useDealerMapInstance(controlPosition);
  const { openPopup, popupDealerId } = useDealerMapPopup({
    mapInstance,
    onSelectDealer,
    selectedDealerId
  });

  useDealerMapRoute({
    mapInstance,
    route
  });
  useDealerMapClusters({
    dealers,
    mapInstance,
    onSelectDealer: openPopup
  });
  useSelectedDealerMapMarker({
    isPopupOpen: popupDealerId === selectedDealerId,
    mapInstance,
    onSelectDealer: openPopup,
    selectedDealer
  });
  const isMapNavigating = useDealerMapCamera({
    mapInstance,
    selectedDealer
  });
  useDealerMapUserLocation({
    coordinates: userCoordinates,
    mapInstance
  });

  if (hasMapInitError) {
    if (fallbackToImage) {
      if (hasStaticMapError) return <DealerMapUnavailable dealer={selectedDealer} />;

      const [longitude, latitude] = selectedDealer.coordinates;
      const mapUrl = new URL(
        `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/${longitude},${latitude},13/1280x720`
      );
      mapUrl.searchParams.set("access_token", DEALER_LOCATOR_MAP_CONFIG.accessToken);

      return (
        <DealerMapStaticImage>
          <img
            alt={`Map showing ${selectedDealer.label}`}
            onError={() => setHasStaticMapError(true)}
            src={mapUrl.toString()}
          />
          <span aria-hidden="true" className="location-pin">
            {getDealerMarkerLabel(selectedDealer) === "YQS" ? (
              <img alt="" src={getAssetUrl("hlym/yqs-logo.png")} />
            ) : (
              getDealerMarkerLabel(selectedDealer)
            )}
          </span>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Open full map
          </a>
        </DealerMapStaticImage>
      );
    }

    return (
      <DealerMapStaticStage
        dealers={dealers}
        onSelectDealer={onSelectDealer}
        selectedDealerId={selectedDealerId}
      />
    );
  }

  return (
    <>
      <DealerMapCanvas
        aria-label={toSentenceCase(dealerLocatorCopy.mapAriaLabel)}
        ref={canvasRef}
        role="img"
      />
      {isMapNavigating && (
        <DealerMapLoading
          $corner={controlPosition === "bottom-right" ? "bottom" : "top"}
          aria-live="polite"
        >
          Loading {selectedDealer.label}...
        </DealerMapLoading>
      )}
    </>
  );
}
