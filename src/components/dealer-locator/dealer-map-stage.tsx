import type { ControlPosition } from "mapbox-gl";
import type { DealerLocation } from "@/data/site-content.types";
import { DealerMapMapboxStage } from "./dealer-map-mapbox-stage";
import { DealerMapStaticStage } from "./dealer-map-static-stage";
import { DealerMapUnavailable } from "./dealer-map-unavailable";
import { DEALER_LOCATOR_MAP_CONFIG } from "./dealer-locator-map.constants";
import type { BrowserCoordinates, DealerRoute } from "./dealer-location.types";
import { DealerMapStage } from "./dealer-locator.styles";

type DealerMapStageViewProps = {
  controlPosition?: ControlPosition;
  dealers: readonly DealerLocation[];
  fillParent?: boolean;
  onSelectDealer: (dealerId: string) => void;
  route: DealerRoute | null;
  selectedDealer: DealerLocation;
  selectedDealerId: string;
  userCoordinates: BrowserCoordinates | null;
};

export function DealerMapStageView({
  controlPosition = "top-right",
  dealers,
  fillParent = false,
  onSelectDealer,
  route,
  selectedDealer,
  selectedDealerId,
  userCoordinates
}: DealerMapStageViewProps) {
  const hasMapboxToken = Boolean(DEALER_LOCATOR_MAP_CONFIG.accessToken);

  return (
    <DealerMapStage $fillParent={fillParent}>
      {!hasMapboxToken && fillParent ? (
        <DealerMapUnavailable dealer={selectedDealer} />
      ) : !hasMapboxToken ? (
        <DealerMapStaticStage
          dealers={dealers}
          onSelectDealer={onSelectDealer}
          selectedDealerId={selectedDealerId}
        />
      ) : (
        <DealerMapMapboxStage
          controlPosition={controlPosition}
          dealers={dealers}
          fallbackToImage={fillParent}
          onSelectDealer={onSelectDealer}
          route={route}
          selectedDealer={selectedDealer}
          selectedDealerId={selectedDealerId}
          userCoordinates={userCoordinates}
        />
      )}
    </DealerMapStage>
  );
}
