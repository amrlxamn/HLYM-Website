import { useState } from "react";
import { Navigation, Timer } from "lucide-react";
import type { BrowserCoordinates } from "@/components/dealer-locator/dealer-location.types";
import { getDistanceBetweenCoordinates } from "@/components/dealer-locator/get-distance-between-coordinates";
import { getAssetUrl } from "@/lib/get-asset-url";
import type { YamahaDealerLocation } from "../yamaha-network.types";
import {
  NetworkDealerBody,
  NetworkDealerCard,
  NetworkDealerImage,
  NetworkDealerImageFallback,
  NetworkDealerLabel
} from "../styles/yamaha-network-dealer-card.styles";
import {
  NetworkDealerAddress,
  NetworkDealerCategories,
  NetworkDealerCategoryPill,
  NetworkDealerJourney,
  NetworkDealerMoreBadges
} from "../styles/yamaha-network-dealer-meta.styles";

type YamahaNetworkDealerCardProps = {
  dealer: YamahaDealerLocation;
  isGrid: boolean;
  isSelected: boolean;
  onSelect: (dealerId: string) => void;
  origin: BrowserCoordinates | null;
};

const VISIBLE_BADGE_COUNT = 2;

export function YamahaNetworkDealerCard({
  dealer,
  isGrid,
  isSelected,
  onSelect,
  origin
}: YamahaNetworkDealerCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleCategories = isExpanded
    ? dealer.categories
    : dealer.categories.slice(0, VISIBLE_BADGE_COUNT);
  const hiddenCount = dealer.categories.length - VISIBLE_BADGE_COUNT;
  const distanceKilometers = origin
    ? getDistanceBetweenCoordinates(origin, dealer.coordinates)
    : null;
  const estimatedDriveMinutes =
    distanceKilometers === null
      ? null
      : Math.max(5, Math.round(((distanceKilometers * 1.25) / 45) * 12) * 5);

  return (
    <NetworkDealerCard
      $isGrid={isGrid}
      $isSelected={isSelected}
      aria-pressed={isSelected}
      key={dealer.id}
      onClick={() => onSelect(dealer.id)}
      type="button"
    >
      <NetworkDealerImage $isGrid={isGrid}>
        {dealer.image ? (
          <img alt={dealer.label} decoding="async" loading="lazy" src={dealer.image} />
        ) : (
          <NetworkDealerImageFallback>
            <img alt="Yamaha" src={getAssetUrl("hlym/image.png")} />
          </NetworkDealerImageFallback>
        )}
      </NetworkDealerImage>
      <NetworkDealerBody $isGrid={isGrid}>
        <NetworkDealerLabel>{dealer.label}</NetworkDealerLabel>
        <NetworkDealerCategories>
          {visibleCategories.map((category) => (
            <NetworkDealerCategoryPill key={category}>{category}</NetworkDealerCategoryPill>
          ))}
          {!isExpanded && hiddenCount > 0 && (
            <NetworkDealerMoreBadges
              onClick={(event) => {
                event.stopPropagation();
                setIsExpanded(true);
              }}
            >
              +{hiddenCount} more
            </NetworkDealerMoreBadges>
          )}
        </NetworkDealerCategories>
        <NetworkDealerAddress>{dealer.address}</NetworkDealerAddress>
        {distanceKilometers !== null && estimatedDriveMinutes !== null && (
          <NetworkDealerJourney aria-label="Distance and estimated drive time">
            <span>
              <Navigation aria-hidden="true" />
              {distanceKilometers.toFixed(1)} km
            </span>
            <span title="Approximate drive time">
              <Timer aria-hidden="true" />~{estimatedDriveMinutes} min
            </span>
          </NetworkDealerJourney>
        )}
      </NetworkDealerBody>
    </NetworkDealerCard>
  );
}
