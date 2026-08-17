import { SectionTag } from "@/components/shared/section-tag";
import { SITE_COPY } from "@/data/site-copy.constants";
import type { DealerLocation, DealerRegion } from "@/data/site-content.types";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { DealerInfoPanel } from "./dealer-info-panel";
import { DealerRegionTabs } from "./dealer-region-tabs";
import {
  DealerContent,
  DealerContentInner,
  DealerDescription,
  DealerHeading
} from "./dealer-locator.styles";

type DealerLocatorContentProps = {
  dealer: DealerLocation;
  dealerCount: number;
  dealerIndex: number;
  onSelectRegion: (region: DealerRegion) => void;
  onSelectNextDealer: () => void;
  onSelectPreviousDealer: () => void;
  panelDirection: 1 | -1;
  selectedRegion: DealerRegion;
};

export function DealerLocatorContent({
  dealer,
  dealerCount,
  dealerIndex,
  onSelectRegion,
  onSelectNextDealer,
  onSelectPreviousDealer,
  panelDirection,
  selectedRegion
}: DealerLocatorContentProps) {
  const dealerLocatorCopy = SITE_COPY.dealerLocator;

  return (
    <DealerContent id="dealer-locator">
      <DealerContentInner>
        <SectionTag accent label={dealerLocatorCopy.tagLabel} lineWidth="wide" />
        <DealerHeading>{dealerLocatorCopy.headingLines}</DealerHeading>
        <DealerDescription>{toSentenceCase(dealerLocatorCopy.description)}</DealerDescription>
        <DealerRegionTabs onSelectRegion={onSelectRegion} selectedRegion={selectedRegion} />
        <DealerInfoPanel
          dealer={dealer}
          dealerCount={dealerCount}
          dealerIndex={dealerIndex}
          onSelectNextDealer={onSelectNextDealer}
          onSelectPreviousDealer={onSelectPreviousDealer}
          panelDirection={panelDirection}
        />
      </DealerContentInner>
    </DealerContent>
  );
}
