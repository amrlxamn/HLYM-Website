import type { DealerLocation } from "@/data/site-content.types";
import { DealerMapMapboxStage } from "./dealer-map-mapbox-stage";
import { DealerMapStaticStage } from "./dealer-map-static-stage";
import { DEALER_LOCATOR_MAP_CONFIG } from "./dealer-locator-map.constants";
import { DealerMapStage } from "./dealer-locator.styles";

type DealerMapStageViewProps = {
  dealers: readonly DealerLocation[];
  onSelectDealer: (dealerId: string) => void;
  selectedDealerId: string;
};

export function DealerMapStageView({
  dealers,
  onSelectDealer,
  selectedDealerId
}: DealerMapStageViewProps) {
  const hasMapboxToken = Boolean(DEALER_LOCATOR_MAP_CONFIG.accessToken);

  return (
    <DealerMapStage>
      {hasMapboxToken ? (
        <DealerMapMapboxStage
          dealers={dealers}
          onSelectDealer={onSelectDealer}
          selectedDealerId={selectedDealerId}
        />
      ) : (
        <DealerMapStaticStage
          dealers={dealers}
          onSelectDealer={onSelectDealer}
          selectedDealerId={selectedDealerId}
        />
      )}
    </DealerMapStage>
  );
}
