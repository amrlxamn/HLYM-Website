import { AnimatePresence, type PanInfo, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SITE_COPY } from "@/data/site-copy.constants";
import type { DealerLocation } from "@/data/site-content.types";
import { toSentenceCase } from "@/lib/to-sentence-case";
import {
  DealerInfoCard,
  DealerInfoEyebrow,
  DealerInfoHeader,
  DealerInfoGrid,
  DealerInfoItem,
  DealerInfoLabel,
  DealerInfoLocation,
  DealerInfoNav,
  DealerInfoNavButton,
  DealerInfoNavMeta,
  DealerPanelAction,
  DealerInfoTitle,
  DealerInfoValue,
  DealerPanelHint,
  DealerServiceList,
  DealerServiceTag
} from "./dealer-locator.styles";

type DealerInfoPanelProps = {
  dealer: DealerLocation;
  dealerCount: number;
  dealerIndex: number;
  onSelectNextDealer: () => void;
  onSelectPreviousDealer: () => void;
  panelDirection: 1 | -1;
};

const DEALER_INFO_CARD_VARIANTS = {
  center: {
    opacity: 1,
    x: 0
  },
  enter: (direction: 1 | -1) => ({
    opacity: 0,
    x: direction > 0 ? 42 : -42
  }),
  exit: (direction: 1 | -1) => ({
    opacity: 0,
    x: direction > 0 ? -42 : 42
  })
} as const;

export function DealerInfoPanel({
  dealer,
  dealerCount,
  dealerIndex,
  onSelectNextDealer,
  onSelectPreviousDealer,
  panelDirection
}: DealerInfoPanelProps) {
  const dealerLocatorCopy = SITE_COPY.dealerLocator;
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence custom={panelDirection} initial={false} mode="wait">
      <DealerInfoCard
        animate="center"
        aria-live="polite"
        custom={panelDirection}
        drag={prefersReducedMotion ? false : "x"}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.18}
        exit="exit"
        initial="enter"
        key={dealer.id}
        onDragEnd={(_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
          if (info.offset.x <= -72) {
            onSelectNextDealer();
            return;
          }

          if (info.offset.x >= 72) {
            onSelectPreviousDealer();
          }
        }}
        transition={
          prefersReducedMotion ? { duration: 0 } : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
        }
        variants={DEALER_INFO_CARD_VARIANTS}
      >
        <DealerInfoHeader>
          <DealerInfoEyebrow>{dealerLocatorCopy.panelEyebrow}</DealerInfoEyebrow>
          <DealerInfoNav>
            <DealerInfoNavButton
              aria-label={toSentenceCase(dealerLocatorCopy.panelPreviousDealerLabel)}
              onClick={onSelectPreviousDealer}
              type="button"
            >
              <ChevronLeft />
            </DealerInfoNavButton>
            <DealerInfoNavMeta>{`${String(dealerIndex + 1).padStart(2, "0")} / ${String(
              dealerCount
            ).padStart(2, "0")}`}</DealerInfoNavMeta>
            <DealerInfoNavButton
              aria-label={toSentenceCase(dealerLocatorCopy.panelNextDealerLabel)}
              onClick={onSelectNextDealer}
              type="button"
            >
              <ChevronRight />
            </DealerInfoNavButton>
          </DealerInfoNav>
        </DealerInfoHeader>
        <DealerInfoTitle>{dealer.label}</DealerInfoTitle>
        <DealerInfoLocation>{dealer.locality}</DealerInfoLocation>
        <DealerInfoGrid>
          <DealerInfoItem>
            <DealerInfoLabel>{dealerLocatorCopy.panelHoursLabel}</DealerInfoLabel>
            <DealerInfoValue>{dealer.hours}</DealerInfoValue>
          </DealerInfoItem>
        </DealerInfoGrid>
        <DealerInfoLabel>{dealerLocatorCopy.panelServicesLabel}</DealerInfoLabel>
        <DealerServiceList>
          {dealer.serviceTags.map((service) => (
            <DealerServiceTag key={service}>{toSentenceCase(service)}</DealerServiceTag>
          ))}
        </DealerServiceList>
        <DealerPanelHint>{toSentenceCase(dealerLocatorCopy.panelHint)}</DealerPanelHint>
      </DealerInfoCard>
      <DealerPanelAction href="#dealer-locator">
        {toSentenceCase(dealerLocatorCopy.panelViewAllLabel)}
      </DealerPanelAction>
    </AnimatePresence>
  );
}
