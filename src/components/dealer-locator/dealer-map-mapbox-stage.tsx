import { SITE_COPY } from "@/data/site-copy.constants";
import type { DealerLocation } from "@/data/site-content.types";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { DealerMapStaticStage } from "./dealer-map-static-stage";
import { DEALER_LOCATOR_MAP_CONFIG } from "./dealer-locator-map.constants";
import type { BrowserCoordinates, DealerRoute } from "./dealer-location.types";
import { DealerMapCanvas } from "./dealer-locator.styles";
import { useDealerMapCamera } from "./use-dealer-map-camera";
import { useDealerMapInstance } from "./use-dealer-map-instance";
import { useDealerMapMarkers } from "./use-dealer-map-markers";
import { useDealerMapRoute } from "./use-dealer-map-route";
import { useDealerMapUserLocation } from "./use-dealer-map-user-location";

type DealerMapMapboxStageProps = {
  dealers: readonly DealerLocation[];
  onSelectDealer: (dealerId: string) => void;
  route: DealerRoute | null;
  selectedDealerId: string;
  userCoordinates: BrowserCoordinates | null;
};

export function DealerMapMapboxStage({
  dealers,
  onSelectDealer,
  route,
  selectedDealerId,
  userCoordinates
}: DealerMapMapboxStageProps) {
  const dealerLocatorCopy = SITE_COPY.dealerLocator;
  const { canvasRef, hasMapInitError, mapInstance } = useDealerMapInstance();

  useDealerMapMarkers({
    dealers,
    mapInstance,
    onSelectDealer,
    selectedDealerId
  });
  useDealerMapCamera({
    dealers,
    mapInstance,
    selectedDealerId,
    userCoordinates
  });
  useDealerMapRoute({
    mapInstance,
    route
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
    <DealerMapCanvas
      aria-label={toSentenceCase(dealerLocatorCopy.mapAriaLabel)}
      ref={canvasRef}
      role="img"
    />
  );
}
