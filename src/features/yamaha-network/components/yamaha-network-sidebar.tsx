import type { DealerCategory } from "@/data/site-content.types";
import { SearchField } from "@/components/shared/search-field";
import type { BrowserCoordinates } from "@/components/dealer-locator/dealer-location.types";
import type { YamahaDealerLocation } from "../yamaha-network.types";
import {
  NetworkCategoryRow,
  NetworkListHeader,
  NetworkListPanel,
  NetworkSearchRow
} from "../styles/yamaha-network-shell.styles";
import {
  NetworkDealerCount,
  NetworkFilterField,
  NetworkFilterSelect,
  NetworkSelectedDealer
} from "../styles/yamaha-network-category-filter.styles";
import { YamahaNetworkDealerList } from "./yamaha-network-dealer-list";
import { YamahaNetworkLayoutToggle } from "./yamaha-network-layout-toggle";

type YamahaNetworkSidebarProps = {
  activeCategories: readonly DealerCategory[];
  dealers: readonly YamahaDealerLocation[];
  isGridLayout: boolean;
  origin: BrowserCoordinates | null;
  onSelectDealer: (dealerId: string) => void;
  onSelectCategory: (category: DealerCategory | "all") => void;
  onSelectState: (state: string) => void;
  onSearchChange: (value: string) => void;
  onToggleLayout: (isGrid: boolean) => void;
  searchQuery: string;
  selectedDealer: YamahaDealerLocation;
  selectedDealerId: string;
  selectedState: string;
  states: readonly string[];
};

const CATEGORY_TAGS: readonly { label: string; value: DealerCategory | "all" }[] = [
  { label: "All categories", value: "all" },
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
  activeCategories,
  dealers,
  isGridLayout,
  origin,
  onSelectDealer,
  onSelectCategory,
  onSelectState,
  onSearchChange,
  onToggleLayout,
  searchQuery,
  selectedDealer,
  selectedDealerId,
  selectedState,
  states
}: YamahaNetworkSidebarProps) {
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
          <NetworkFilterField>
            State
            <NetworkFilterSelect
              aria-label="Filter dealers by state"
              onChange={(event) => onSelectState(event.currentTarget.value)}
              value={selectedState}
            >
              <option value="">All states</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </NetworkFilterSelect>
          </NetworkFilterField>
          <NetworkFilterField>
            Category
            <NetworkFilterSelect
              aria-label="Filter dealers by category"
              onChange={(event) =>
                onSelectCategory(event.currentTarget.value as DealerCategory | "all")
              }
              value={activeCategories[0] ?? "all"}
            >
              {CATEGORY_TAGS.map((tag) => (
                <option key={tag.value} value={tag.value}>
                  {tag.label}
                </option>
              ))}
            </NetworkFilterSelect>
          </NetworkFilterField>
          <NetworkDealerCount aria-live="polite">{dealers.length} Dealers</NetworkDealerCount>
        </NetworkCategoryRow>
        {dealers.some((dealer) => dealer.id === selectedDealerId) && (
          <NetworkSelectedDealer>
            <strong>{selectedDealer.label}</strong>
            <div>
              {(selectedDealer.phone || selectedDealer.mobile) && (
                <a href={`tel:${selectedDealer.phone || selectedDealer.mobile}`}>
                  {selectedDealer.categories.includes("yqs")
                    ? "Call to arrange service"
                    : "Call dealer"}
                </a>
              )}
              <a href={selectedDealer.mapUrl} rel="noopener noreferrer" target="_blank">
                Directions
              </a>
            </div>
          </NetworkSelectedDealer>
        )}
      </NetworkListHeader>
      <YamahaNetworkDealerList
        dealers={dealers}
        isGrid={isGridLayout}
        origin={origin}
        onSelectDealer={onSelectDealer}
        selectedDealerId={selectedDealerId}
      />
    </NetworkListPanel>
  );
}
