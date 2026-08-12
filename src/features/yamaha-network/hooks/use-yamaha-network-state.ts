import { useMemo, useState } from "react";
import type { DealerCategory } from "@/data/site-content.types";
import { filterDealersByCategories } from "../utils/filter-dealers-by-categories";
import { filterDealersBySearchQuery } from "../utils/filter-dealers-by-search-query";
import type { YamahaDealerLocation } from "../yamaha-network.types";

export function useYamahaNetworkState(dealers: readonly YamahaDealerLocation[]) {
  const [selectedDealerId, setSelectedDealerId] = useState(dealers[0]!.id);
  const [activeCategories, setActiveCategories] = useState<readonly DealerCategory[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isGridLayout, setIsGridLayout] = useState(false);
  const selectedDealer = dealers.find((dealer) => dealer.id === selectedDealerId) ?? dealers[0]!;

  const scopedDealers = useMemo(() => {
    const filtered = filterDealersByCategories(dealers, activeCategories);
    return filterDealersBySearchQuery(filtered, searchQuery);
  }, [activeCategories, dealers, searchQuery]);

  return {
    activeCategories,
    isGridLayout,
    scopedDealers,
    searchQuery,
    selectedDealer,
    selectedDealerId,
    setActiveCategories,
    setIsGridLayout,
    setSearchQuery,
    setSelectedDealerId
  };
}
