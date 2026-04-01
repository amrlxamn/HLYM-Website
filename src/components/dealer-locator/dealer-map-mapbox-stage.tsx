import { SITE_COPY } from "@/data/site-copy.constants";
import type { DealerLocation } from "@/data/site-content.types";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { DealerMapStaticStage } from "./dealer-map-static-stage";
import { DEALER_LOCATOR_MAP_CONFIG } from "./dealer-locator-map.constants";
import { DealerMapCanvas } from "./dealer-locator.styles";
import { useDealerMapCamera } from "./use-dealer-map-camera";
import { useDealerMapInstance } from "./use-dealer-map-instance";
import { useDealerMapMarkers } from "./use-dealer-map-markers";

type DealerMapMapboxStageProps = {
  dealers: readonly DealerLocation[];
  onSelectDealer: (dealerId: string) => void;
  selectedDealerId: string;
};

export function DealerMapMapboxStage({
  dealers,
  onSelectDealer,
  selectedDealerId
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
    selectedDealerId
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
