import type { ControlPosition } from "mapbox-gl";
import { SITE_COPY } from "@/data/site-copy.constants";
import type { DealerLocation } from "@/data/site-content.types";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { DealerMapStaticStage } from "./dealer-map-static-stage";
import { DealerMapLoading } from "./dealer-map-loading.styles";
import { DEALER_LOCATOR_MAP_CONFIG } from "./dealer-locator-map.constants";
import type { BrowserCoordinates, DealerRoute } from "./dealer-location.types";
import { DealerMapCanvas } from "./dealer-locator.styles";
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
  onSelectDealer: (dealerId: string) => void;
  route: DealerRoute | null;
  selectedDealer: DealerLocation;
  selectedDealerId: string;
  userCoordinates: BrowserCoordinates | null;
};

export function DealerMapMapboxStage({
  controlPosition = "top-right",
  dealers,
  onSelectDealer,
  route,
  selectedDealer,
  selectedDealerId,
  userCoordinates
}: DealerMapMapboxStageProps) {
  const dealerLocatorCopy = SITE_COPY.dealerLocator;
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

  if (!DEALER_LOCATOR_MAP_CONFIG.accessToken || hasMapInitError) {
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
