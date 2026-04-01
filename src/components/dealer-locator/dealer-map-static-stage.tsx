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
      {dealers.map((dealer) => {
        const position = getStaticMarkerPosition(dealer.coordinates);
        const isSelected = dealer.id === selectedDealerId;

        return (
          <button
            aria-label={`Show ${dealer.label}`}
            className={
              isSelected
                ? "dealer-map-marker dealer-map-marker--static is-selected"
                : "dealer-map-marker dealer-map-marker--static"
            }
            key={dealer.id}
            onClick={() => {
              onSelectDealer(dealer.id);
            }}
            style={position}
            type="button"
          >
            <span aria-hidden="true" className="dealer-map-marker__tooltip">
              <span
                aria-hidden="true"
                className={
                  dealer.image
                    ? "dealer-map-marker__tooltip-media has-image"
                    : "dealer-map-marker__tooltip-media"
                }
                style={dealer.image ? { backgroundImage: `url("${dealer.image}")` } : undefined}
              >
                {dealer.image
                  ? null
                  : dealer.label
                      .split(" ")
                      .slice(0, 2)
                      .map((word) => word.charAt(0).toUpperCase())
                      .join("")}
              </span>
              <span className="dealer-map-marker__tooltip-body">
                <span className="dealer-map-marker__tooltip-title">{dealer.label}</span>
                <span className="dealer-map-marker__tooltip-meta">{dealer.locality}</span>
              </span>
            </span>
            <span aria-hidden="true" className="dealer-map-marker__outer" />
            <span aria-hidden="true" className="dealer-map-marker__middle" />
            <span aria-hidden="true" className="dealer-map-marker__inner" />
          </button>
        );
      })}
    </DealerMapBackdrop>
  );
}
