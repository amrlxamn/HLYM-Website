import { SITE_COPY } from "@/data/site-copy.constants";
import type { DealerLocation } from "@/data/site-content.types";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { DealerMapBackdrop } from "./dealer-locator.styles";
import { getStaticMarkerPosition } from "./get-static-marker-position";
import { isDealerOpenNow } from "./is-dealer-open-now";
import { useDealerMapPopup } from "./use-dealer-map-popup";

type DealerMapStaticStageProps = {
  dealers: readonly DealerLocation[];
  onSelectDealer: (dealerId: string) => void;
  selectedDealerId: string;
};

export function DealerMapStaticStage({
  dealers,
  onSelectDealer,
  selectedDealerId
}: DealerMapStaticStageProps) {
  const dealerLocatorCopy = SITE_COPY.dealerLocator;
  const { closePopup, openPopup, popupDealerId } = useDealerMapPopup({
    mapInstance: null,
    onSelectDealer,
    selectedDealerId
  });

  return (
    <DealerMapBackdrop
      aria-label={toSentenceCase(dealerLocatorCopy.mapAriaLabel)}
      onClick={closePopup}
    >
      {dealers.map((dealer) => (
        <button
          aria-label={`Show ${dealer.label}`}
          className={`dealer-map-marker dealer-map-marker--static${
            dealer.id === selectedDealerId ? " is-selected" : ""
          }${dealer.id === popupDealerId ? " is-popup-open" : ""}`}
          key={dealer.id}
          onClick={(event) => {
            event.stopPropagation();
            openPopup(dealer.id);
          }}
          style={{
            ...getStaticMarkerPosition(dealer.coordinates),
            zIndex: dealer.id === selectedDealerId ? 999 : 1
          }}
          type="button"
        >
          <span className="dealer-map-marker__outer" />
          <span className="dealer-map-marker__middle" />
          <span className="dealer-map-marker__inner" />
          <span className="dealer-map-marker__tooltip">
            <span
              className={
                dealer.image
                  ? "dealer-map-marker__tooltip-media has-image"
                  : "dealer-map-marker__tooltip-media"
              }
            >
              {dealer.image ? (
                <img alt="" decoding="async" loading="lazy" src={dealer.image} />
              ) : (
                "Yamaha"
              )}
            </span>
            <span className="dealer-map-marker__tooltip-body">
              <strong className="dealer-map-marker__tooltip-title">{dealer.label}</strong>
              <span className="dealer-map-marker__tooltip-tag">{dealer.category}</span>
              <span className="dealer-map-marker__tooltip-meta">{dealer.locality}</span>
              <span className="dealer-map-marker__tooltip-hours">
                <svg
                  aria-hidden="true"
                  className="dealer-map-marker__tooltip-hours-icon"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>{dealer.hours || "Hours unavailable"}</span>
                <span aria-hidden="true" className="dealer-map-marker__tooltip-hours-separator" />
                <span
                  className={`dealer-map-marker__tooltip-status ${
                    isDealerOpenNow(dealer.hours) ? "is-open" : "is-closed"
                  }`}
                >
                  {isDealerOpenNow(dealer.hours) ? "Open Now" : "Closed"}
                </span>
              </span>
            </span>
          </span>
        </button>
      ))}
    </DealerMapBackdrop>
  );
}
