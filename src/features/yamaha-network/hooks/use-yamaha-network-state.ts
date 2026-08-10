import { useMemo, useState } from "react";
import type { DealerCategory } from "@/data/site-content.types";
import { filterDealersBySearchQuery } from "../utils/filter-dealers-by-search-query";
import type { YamahaDealerLocation } from "../yamaha-network.types";

export function useYamahaNetworkState(dealers: readonly YamahaDealerLocation[]) {
  const [selectedDealerId, setSelectedDealerId] = useState(dealers[0]!.id);
  const [activeCategory, setActiveCategory] = useState<DealerCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isGridLayout, setIsGridLayout] = useState(false);
  const selectedDealer = dealers.find((dealer) => dealer.id === selectedDealerId) ?? dealers[0]!;

  const scopedDealers = useMemo(() => {
    let filtered = dealers;

    if (activeCategory !== "all") {
      filtered = filtered.filter((dealer) => dealer.categories.includes(activeCategory));
    }

    return filterDealersBySearchQuery(filtered, searchQuery);
  }, [activeCategory, dealers, searchQuery]);

  return {
    activeCategory,
    isGridLayout,
    scopedDealers,
    searchQuery,
    selectedDealer,
    selectedDealerId,
    setActiveCategory,
    setIsGridLayout,
    setSearchQuery,
    setSelectedDealerId
  };
}
