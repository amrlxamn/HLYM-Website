import { SITE_COPY } from "@/data/site-copy.constants";
import type { DealerRegion } from "@/data/site-content.types";
import { DealerRegionTab, DealerRegionTabList } from "./dealer-region-tabs.styles";

type DealerRegionTabsProps = {
  onSelectRegion: (region: DealerRegion) => void;
  selectedRegion: DealerRegion;
};

const REGION_ORDER: readonly DealerRegion[] = [
  "central",
  "northern",
  "southern",
  "sabah",
  "sarawak"
];

export function DealerRegionTabs({ onSelectRegion, selectedRegion }: DealerRegionTabsProps) {
  const dealerLocatorCopy = SITE_COPY.dealerLocator;

  return (
    <DealerRegionTabList aria-label={dealerLocatorCopy.regionTabsAriaLabel} role="tablist">
      {REGION_ORDER.map((region) => (
        <DealerRegionTab
          $isActive={selectedRegion === region}
          aria-selected={selectedRegion === region}
          key={region}
          onClick={() => onSelectRegion(region)}
          role="tab"
          type="button"
        >
          {dealerLocatorCopy.regionLabels[region]}
        </DealerRegionTab>
      ))}
    </DealerRegionTabList>
  );
}
