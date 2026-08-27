import { useEffect, useRef } from "react";
import { DealerMapStageView } from "@/components/dealer-locator/dealer-map-stage";
import { getNearestDealer } from "@/components/dealer-locator/get-nearest-dealer";
import type { DealerCategory } from "@/data/site-content.types";
import { useBrowserLocation } from "@/components/dealer-locator/use-browser-location";
import { useDealerRoute } from "@/components/dealer-locator/use-dealer-route";
import { SiteHeader } from "@/components/header/site-header";
import { useYamahaNetworkState } from "../hooks/use-yamaha-network-state";
import { NetworkMapStage } from "../styles/yamaha-network-map.styles";
import { NetworkMapWrapper, NetworkPageRoot } from "../styles/yamaha-network-shell.styles";
import type { YamahaDealerLocation } from "../yamaha-network.types";
import { YamahaNetworkRouteBadge } from "./yamaha-network-route-badge";
import { YamahaNetworkSidebar } from "./yamaha-network-sidebar";

type YamahaNetworkContentProps = {
  dealers: readonly YamahaDealerLocation[];
};

export function YamahaNetworkContent({ dealers }: YamahaNetworkContentProps) {
  const {
    activeCategories,
    isGridLayout,
    scopedDealers,
    searchQuery,
    selectedDealer,
    selectedDealerId,
    setActiveCategories,
    setIsGridLayout,
    setSearchQuery,
    setSelectedDealerId
  } = useYamahaNetworkState(dealers);
  const { coordinates } = useBrowserLocation();
  const route = useDealerRoute({ destination: selectedDealer, origin: coordinates });
  const hasAutoSelectedNearestDealer = useRef(false);

  useEffect(() => {
    if (!coordinates || hasAutoSelectedNearestDealer.current) {
      return;
    }

    const nearestDealer = getNearestDealer(coordinates, dealers);
    hasAutoSelectedNearestDealer.current = true;

    if (nearestDealer && nearestDealer.id !== selectedDealerId) {
      setSelectedDealerId(nearestDealer.id);
    }
  }, [coordinates, dealers, selectedDealerId, setSelectedDealerId]);

  return (
    <NetworkPageRoot>
      <SiteHeader overlay />
      <NetworkMapWrapper>
        <NetworkMapStage>
          <DealerMapStageView
            controlPosition="top-right"
            dealers={dealers}
            fillParent
            onSelectDealer={setSelectedDealerId}
            route={route}
            selectedDealer={selectedDealer}
            selectedDealerId={selectedDealerId}
            userCoordinates={coordinates}
          />
        </NetworkMapStage>
        {route && (
          <YamahaNetworkRouteBadge
            distanceKilometers={route.distanceKilometers}
            durationMinutes={route.durationMinutes}
          />
        )}
        <YamahaNetworkSidebar
          activeCategories={activeCategories}
          dealers={scopedDealers}
          isGridLayout={isGridLayout}
          origin={coordinates}
          onSelectDealer={setSelectedDealerId}
          onSelectCategory={(category: DealerCategory | "all") => {
            setActiveCategories((currentCategories) => {
              if (category === "all") {
                return [];
              }

              return currentCategories.includes(category)
                ? currentCategories.filter((currentCategory) => currentCategory !== category)
                : [...currentCategories, category];
            });
          }}
          onSearchChange={setSearchQuery}
          onToggleLayout={setIsGridLayout}
          searchQuery={searchQuery}
          selectedDealerId={selectedDealerId}
        />
      </NetworkMapWrapper>
    </NetworkPageRoot>
  );
}
