import { useState } from "react";
import { getAssetUrl } from "@/lib/get-asset-url";
import type { YamahaDealerLocation } from "../yamaha-network.types";
import {
  NetworkDealerBody,
  NetworkDealerCard,
  NetworkDealerCategories,
  NetworkDealerCategoryPill,
  NetworkDealerImage,
  NetworkDealerImageFallback,
  NetworkDealerLabel,
  NetworkDealerLocality,
  NetworkDealerMoreBadges
} from "../styles/yamaha-network-directory.styles";

type YamahaNetworkDealerCardProps = {
  dealer: YamahaDealerLocation;
  isGrid: boolean;
  isSelected: boolean;
  onSelect: (dealerId: string) => void;
};

const VISIBLE_BADGE_COUNT = 2;

export function YamahaNetworkDealerCard({
  dealer,
  isGrid,
  isSelected,
  onSelect
}: YamahaNetworkDealerCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleCategories = isExpanded
    ? dealer.categories
    : dealer.categories.slice(0, VISIBLE_BADGE_COUNT);
  const hiddenCount = dealer.categories.length - VISIBLE_BADGE_COUNT;

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
        <NetworkDealerLocality>{dealer.locality}</NetworkDealerLocality>
      </NetworkDealerBody>
    </NetworkDealerCard>
  );
}
