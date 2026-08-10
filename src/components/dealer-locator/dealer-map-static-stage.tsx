import { SITE_COPY } from "@/data/site-copy.constants";
import type { DealerLocation } from "@/data/site-content.types";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { DealerMapBackdrop } from "./dealer-locator.styles";
import { getStaticMarkerPosition } from "./get-static-marker-position";

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

  return (
    <DealerMapBackdrop aria-label={toSentenceCase(dealerLocatorCopy.mapAriaLabel)}>
      {dealers.map((dealer) => (
        <button
          aria-label={`Show ${dealer.label}`}
          className={
            dealer.id === selectedDealerId
              ? "dealer-map-marker dealer-map-marker--static is-selected"
              : "dealer-map-marker dealer-map-marker--static"
          }
          key={dealer.id}
          onClick={() => onSelectDealer(dealer.id)}
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
              <span className="dealer-map-marker__tooltip-hours">{dealer.hours}</span>
            </span>
          </span>
        </button>
      ))}
    </DealerMapBackdrop>
  );
}
