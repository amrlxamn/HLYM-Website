import type { DealerLocation } from "@/data/site-content.types";
import { DealerMapMapboxStage } from "./dealer-map-mapbox-stage";
import { DealerMapStaticStage } from "./dealer-map-static-stage";
import { DEALER_LOCATOR_MAP_CONFIG } from "./dealer-locator-map.constants";
import type { BrowserCoordinates, DealerRoute } from "./dealer-location.types";
import { DealerMapStage } from "./dealer-locator.styles";

type DealerMapStageViewProps = {
  dealers: readonly DealerLocation[];
  onSelectDealer: (dealerId: string) => void;
  route: DealerRoute | null;
  selectedDealerId: string;
  userCoordinates: BrowserCoordinates | null;
};

export function DealerMapStageView({
  dealers,
  onSelectDealer,
  route,
  selectedDealerId,
  userCoordinates
}: DealerMapStageViewProps) {
  const hasMapboxToken = Boolean(DEALER_LOCATOR_MAP_CONFIG.accessToken);

  return (
    <DealerMapStage>
      {hasMapboxToken ? (
        <DealerMapMapboxStage
          dealers={dealers}
          onSelectDealer={onSelectDealer}
          route={route}
          selectedDealerId={selectedDealerId}
          userCoordinates={userCoordinates}
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
