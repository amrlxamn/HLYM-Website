import type { DealerCategory } from "@/data/site-content.types";
import { SearchField } from "@/components/shared/search-field";
import type { YamahaDealerLocation } from "../yamaha-network.types";
import { useScrollFade } from "../hooks/use-scroll-fade";
import {
  NetworkCategoryLabel,
  NetworkCategoryRow,
  NetworkCategoryScroll,
  NetworkListHeader,
  NetworkListPanel,
  NetworkSearchRow
} from "../styles/yamaha-network-shell.styles";
import { NetworkFilterTag } from "../styles/yamaha-network-controls.styles";
import { YamahaNetworkDealerList } from "./yamaha-network-dealer-list";
import { YamahaNetworkLayoutToggle } from "./yamaha-network-layout-toggle";

type YamahaNetworkSidebarProps = {
  activeCategory: DealerCategory | "all";
  dealers: readonly YamahaDealerLocation[];
  isGridLayout: boolean;
  onSelectDealer: (dealerId: string) => void;
  onSelectCategory: (category: DealerCategory | "all") => void;
  onSearchChange: (value: string) => void;
  onToggleLayout: (isGrid: boolean) => void;
  searchQuery: string;
  selectedDealerId: string;
};

const CATEGORY_TAGS: readonly { label: string; value: DealerCategory | "all" }[] = [
  { label: "all", value: "all" },
  { label: "authorized dealer", value: "authorized dealer" },
  { label: "yqs", value: "yqs" },
  { label: "spare parts stockist", value: "spare parts stockist" },
  { label: "hq and branch", value: "hq and branch" },
  { label: "star center", value: "star center" },
  { label: "star shop", value: "star shop" },
  { label: "big bike", value: "big bike" },
  { label: "ygp store", value: "ygp store" },
  { label: "genblu merchant", value: "genblu merchant" },
  { label: "yes", value: "yes" }
];

export function YamahaNetworkSidebar({
  activeCategory,
  dealers,
  isGridLayout,
  onSelectDealer,
  onSelectCategory,
  onSearchChange,
  onToggleLayout,
  searchQuery,
  selectedDealerId
}: YamahaNetworkSidebarProps) {
  const { fadeState, scrollRef } = useScrollFade();

  return (
    <NetworkListPanel>
      <NetworkListHeader>
        <NetworkSearchRow>
          <SearchField
            ariaLabel="Search dealer, area, or region"
            onChange={(event) => onSearchChange(event.currentTarget.value)}
            placeholder="Search dealer, area, or region"
            value={searchQuery}
            variant="plain"
          />
          <YamahaNetworkLayoutToggle isGrid={isGridLayout} onToggle={onToggleLayout} />
        </NetworkSearchRow>
        <NetworkCategoryRow>
          <NetworkCategoryLabel>Category:</NetworkCategoryLabel>
          <NetworkCategoryScroll
            ref={scrollRef}
            $canScrollLeft={fadeState.canScrollLeft}
            $canScrollRight={fadeState.canScrollRight}
          >
            {CATEGORY_TAGS.map((tag) => (
              <NetworkFilterTag
                $isActive={activeCategory === tag.value}
                aria-pressed={activeCategory === tag.value}
                key={tag.value}
                onClick={() => onSelectCategory(tag.value)}
                type="button"
              >
                {tag.label}
              </NetworkFilterTag>
            ))}
          </NetworkCategoryScroll>
        </NetworkCategoryRow>
      </NetworkListHeader>
      <YamahaNetworkDealerList
        dealers={dealers}
        isGrid={isGridLayout}
        onSelectDealer={onSelectDealer}
        selectedDealerId={selectedDealerId}
      />
    </NetworkListPanel>
  );
}
