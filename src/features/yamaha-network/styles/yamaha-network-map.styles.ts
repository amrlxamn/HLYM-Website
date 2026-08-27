import styled from "styled-components";
import { DealerMapLoading } from "@/components/dealer-locator/dealer-map-loading.styles";

export const NetworkMapPanel = styled.div`
  background: #0a0a0a;
  min-width: 0;
  overflow: hidden;
  position: relative;

  .mapboxgl-canvas {
    filter: grayscale(-1) contrast(0.92) brightness(1.18);
  }
`;

export const NetworkMapStage = styled.div`
  height: 100%;
  position: relative;

  /* Keep the zoom controls level with the left dealer panel: the panel sits
     16px below the header, so the top-right control stack matches. */
  .mapboxgl-ctrl-top-right {
    top: calc(var(--header-height-total) + var(--space-4));
  }

  .mapboxgl-ctrl-group {
    border-radius: 0;
  }

  /* Sit the loading label beside the zoom control: same top edge, to its left. */
  ${DealerMapLoading} {
    right: calc(var(--space-4) + 54px);
    top: calc(var(--header-height-total) + var(--space-4));
  }
`;

export const NetworkMapLabel = styled.div`
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(45, 50, 45, 0.12);
  border-radius: 0;
  box-shadow: 0 7px 20px rgba(33, 39, 33, 0.14);
  color: #1b201b;
  font-size: 12px;
  font-weight: 700;
  padding: 8px 12px;
  white-space: nowrap;
`;

export const NetworkRouteBadge = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(45, 50, 45, 0.12);
  border-radius: 0;
  bottom: 20px;
  box-shadow: 0 10px 30px rgba(33, 39, 33, 0.14);
  display: flex;
  gap: 20px;
  left: 50%;
  padding: 12px 18px;
  position: absolute;
  transform: translateX(-50%);
  z-index: 5;
`;

export const NetworkRouteStat = styled.div`
  display: grid;
  gap: 2px;
`;

export const NetworkRouteValue = styled.span`
  color: #171a17;
  font-size: 15px;
  font-weight: 700;
`;

export const NetworkRouteLabel = styled.span`
  color: #737873;
  font-size: 10px;
`;
