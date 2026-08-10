import type { YamahaDealerLocation } from "../yamaha-network.types";
import {
  NetworkDealerGrid,
  NetworkDealerScroll,
  NetworkEmptyState
} from "../styles/yamaha-network-directory.styles";
import { YamahaNetworkDealerCard } from "./yamaha-network-dealer-card";

type YamahaNetworkDealerListProps = {
  dealers: readonly YamahaDealerLocation[];
  isGrid: boolean;
  onSelectDealer: (dealerId: string) => void;
  selectedDealerId: string;
};

export function YamahaNetworkDealerList({
  dealers,
  isGrid,
  onSelectDealer,
  selectedDealerId
}: YamahaNetworkDealerListProps) {
  if (dealers.length === 0) {
    return <NetworkEmptyState>No dealers match your search.</NetworkEmptyState>;
  }

  return (
    <NetworkDealerScroll $isGrid={isGrid}>
      <NetworkDealerGrid $isGrid={isGrid}>
        {dealers.map((dealer) => (
          <YamahaNetworkDealerCard
            dealer={dealer}
            isGrid={isGrid}
            isSelected={dealer.id === selectedDealerId}
            key={dealer.id}
            onSelect={onSelectDealer}
          />
        ))}
      </NetworkDealerGrid>
    </NetworkDealerScroll>
  );
}
