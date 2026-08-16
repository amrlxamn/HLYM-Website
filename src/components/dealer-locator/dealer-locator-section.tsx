import { useEffect, useRef } from "react";
import { DEALER_LOCATIONS } from "@/data/dealer-locations.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { DealerLocatorContent } from "./dealer-locator-content";
import { DealerNetworkCta } from "./dealer-network-cta";
import { DealerMapStageView } from "./dealer-map-stage";
import { getNearestDealer } from "./get-nearest-dealer";
import { useBrowserLocation } from "./use-browser-location";
import { useDealerRoute } from "./use-dealer-route";
import { useDealerLocatorState } from "./use-dealer-locator-state";
import { DealerLocatorSectionRoot } from "./dealer-locator.styles";
import { SITE_COPY } from "@/data/site-copy.constants";

export function DealerLocatorSection() {
  const dealerLocatorCopy = SITE_COPY.dealerLocator;
  const hasAutoSelectedNearestDealer = useRef(false);
  const {
    panelDirection,
    selectedDealer,
    selectedDealerId,
    selectedRegion,
    selectedRegionDealers,
    selectNextDealer,
    selectPreviousDealer,
    setSelectedDealerId,
    setSelectedRegion
  } = useDealerLocatorState();
  const { coordinates } = useBrowserLocation();
  const route = useDealerRoute({
    destination: selectedDealer,
    origin: coordinates
  });

  useEffect(() => {
    if (!coordinates || hasAutoSelectedNearestDealer.current) {
      return;
    }

    const nearestDealer = getNearestDealer(coordinates, DEALER_LOCATIONS);

    if (!nearestDealer) {
      return;
    }

    hasAutoSelectedNearestDealer.current = true;

    if (nearestDealer.id !== selectedDealerId) {
      setSelectedDealerId(nearestDealer.id);
    }
  }, [coordinates, selectedDealerId, setSelectedDealerId]);

  return (
    <>
      <DealerLocatorSectionRoot aria-label={toSentenceCase(dealerLocatorCopy.ariaLabel)}>
        <DealerMapStageView
          dealers={DEALER_LOCATIONS}
          onSelectDealer={setSelectedDealerId}
          route={route}
          selectedDealer={selectedDealer}
          selectedDealerId={selectedDealerId}
          userCoordinates={coordinates}
        />
        <DealerLocatorContent
          dealer={selectedDealer}
          dealerCount={selectedRegionDealers.length}
          dealerIndex={selectedRegionDealers.findIndex((dealer) => dealer.id === selectedDealerId)}
          onSelectRegion={setSelectedRegion}
          onSelectNextDealer={selectNextDealer}
          onSelectPreviousDealer={selectPreviousDealer}
          panelDirection={panelDirection}
          selectedRegion={selectedRegion}
        />
      </DealerLocatorSectionRoot>
      <DealerNetworkCta />
    </>
  );
}
