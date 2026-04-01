import { toSentenceCase } from "@/lib/to-sentence-case";
import { DealerLocatorContent } from "./dealer-locator-content";
import { DealerMapStageView } from "./dealer-map-stage";
import { useDealerLocatorState } from "./use-dealer-locator-state";
import { DealerLocatorSectionRoot } from "./dealer-locator.styles";
import { SITE_COPY } from "@/data/site-copy.constants";

export function DealerLocatorSection() {
  const dealerLocatorCopy = SITE_COPY.dealerLocator;
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

  return (
    <DealerLocatorSectionRoot aria-label={toSentenceCase(dealerLocatorCopy.ariaLabel)}>
      <DealerMapStageView
        dealers={selectedRegionDealers}
        onSelectDealer={setSelectedDealerId}
        selectedDealerId={selectedDealerId}
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
  );
}
