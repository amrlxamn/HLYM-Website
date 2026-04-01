import { useState } from "react";
import { DEALER_LOCATIONS, DEFAULT_DEALER_LOCATION_ID } from "@/data/dealer-locations.constants";
import type { DealerRegion } from "@/data/site-content.types";
import { getAdjacentDealerId } from "./get-adjacent-dealer-id";
import { getDealersByRegion } from "./get-dealers-by-region";
import { getSelectedDealer } from "./get-selected-dealer";

export function useDealerLocatorState() {
  const [panelDirection, setPanelDirection] = useState<1 | -1>(1);
  const [selectedDealerId, setRawSelectedDealerId] = useState(DEFAULT_DEALER_LOCATION_ID);
  const selectedDealer = getSelectedDealer(selectedDealerId);
  const selectedRegion = selectedDealer.region;
  const selectedRegionDealers = getDealersByRegion(selectedRegion);

  function setSelectedRegion(region: DealerRegion) {
    const nextDealer = DEALER_LOCATIONS.find((dealer) => dealer.region === region);
    if (!nextDealer) {
      return;
    }

    setPanelDirection(1);
    setRawSelectedDealerId(nextDealer.id);
  }

  function setSelectedDealerId(dealerId: string) {
    const nextDealer = DEALER_LOCATIONS.find((dealer) => dealer.id === dealerId);
    if (!nextDealer || nextDealer.id === selectedDealerId) {
      return;
    }

    if (nextDealer.region !== selectedRegion) {
      setPanelDirection(1);
      setRawSelectedDealerId(nextDealer.id);
      return;
    }

    const currentIndex = selectedRegionDealers.findIndex(
      (dealer) => dealer.id === selectedDealerId
    );
    const nextIndex = selectedRegionDealers.findIndex((dealer) => dealer.id === dealerId);

    setPanelDirection(nextIndex > currentIndex ? 1 : -1);
    setRawSelectedDealerId(nextDealer.id);
  }

  function selectNextDealer() {
    setPanelDirection(1);
    setRawSelectedDealerId(getAdjacentDealerId(selectedDealerId, selectedRegionDealers, 1));
  }

  function selectPreviousDealer() {
    setPanelDirection(-1);
    setRawSelectedDealerId(getAdjacentDealerId(selectedDealerId, selectedRegionDealers, -1));
  }

  return {
    panelDirection,
    selectedDealer,
    selectedDealerId,
    selectedRegion,
    selectedRegionDealers,
    selectNextDealer,
    selectPreviousDealer,
    setSelectedDealerId,
    setSelectedRegion
  };
}
