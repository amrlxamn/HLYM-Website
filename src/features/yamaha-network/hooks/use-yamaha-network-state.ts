import { useMemo, useState } from "react";
import type { DealerCategory } from "@/data/site-content.types";
import { filterDealersByCategories } from "../utils/filter-dealers-by-categories";
import { filterDealersBySearchQuery } from "../utils/filter-dealers-by-search-query";
import { getDealerState } from "../utils/get-dealer-state";
import type { YamahaDealerLocation } from "../yamaha-network.types";

export function useYamahaNetworkState(dealers: readonly YamahaDealerLocation[]) {
  const [selectedDealerId, setSelectedDealerId] = useState(dealers[0]!.id);
  const [activeCategories, setActiveCategories] = useState<readonly DealerCategory[]>(() => {
    const category = new URLSearchParams(window.location.search).get("category");
    return category &&
      dealers.some((dealer) => dealer.categories.includes(category as DealerCategory))
      ? [category as DealerCategory]
      : [];
  });
  const [selectedState, setSelectedState] = useState(() => {
    const state = new URLSearchParams(window.location.search).get("state");
    return state && dealers.some((dealer) => getDealerState(dealer.address) === state) ? state : "";
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [isGridLayout, setIsGridLayout] = useState(false);
  const selectedDealer = dealers.find((dealer) => dealer.id === selectedDealerId) ?? dealers[0]!;
  const states = useMemo(
    () => [...new Set(dealers.map((dealer) => getDealerState(dealer.address)))].sort(),
    [dealers]
  );

  const scopedDealers = useMemo(() => {
    const filtered = filterDealersByCategories(dealers, activeCategories);
    return filterDealersBySearchQuery(
      selectedState
        ? filtered.filter((dealer) => getDealerState(dealer.address) === selectedState)
        : filtered,
      searchQuery
    );
  }, [activeCategories, dealers, searchQuery, selectedState]);

  return {
    activeCategories,
    isGridLayout,
    scopedDealers,
    searchQuery,
    selectedState,
    selectedDealer,
    selectedDealerId,
    setActiveCategories,
    setIsGridLayout,
    setSearchQuery,
    setSelectedState,
    setSelectedDealerId,
    states
  };
}
