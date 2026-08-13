import { motion } from "framer-motion";
import styled from "styled-components";

export const ModelsDesktopRunway = styled.div`
  --models-rail-left: max(
    calc(var(--space-4) + 48px),
    calc((100% - 1320px) / 2 + var(--space-4) + 48px)
  );
  box-sizing: border-box;
  position: relative;

  &::before {
    background: var(--alpha-black-24);
    bottom: 0;
    content: "";
    left: var(--models-rail-left);
    position: absolute;
    top: 0;
    width: 1px;
  }

  @media (max-width: 980px) {
    &::before {
      display: none;
    }
  }
`;

export const ModelsDesktopProgressRail = styled(motion.div)`
  background: var(--red);
  bottom: 0;
  left: var(--models-rail-left);
  position: absolute;
  top: 0;
  transform-origin: top;
  width: 2px;
  z-index: 2;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const ModelsDesktopStickyView = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: calc(100vh - var(--header-height-total));
  overflow: visible;
  padding-bottom: clamp(var(--space-8), 8vh, var(--space-16));
  position: sticky;
  top: var(--header-height-total);

  &::before {
    background: var(--red);
    bottom: 100%;
    content: "";
    height: var(--header-height-total);
    left: var(--models-rail-left);
    position: absolute;
    width: 2px;
    z-index: 2;
  }

  @media (max-width: 980px) {
    height: calc(100svh - var(--header-height-total));
    overflow: hidden;
    padding-bottom: 0;

    &::before {
      display: none;
    }
  }
`;

export const ModelsDesktopLayout = styled.div`
  align-items: center;
  display: grid;
  gap: var(--space-7);
  grid-template-columns: 48px minmax(0, 1fr);
  margin: 0 auto;
  max-width: 1320px;
  padding: 0 var(--space-4);
  width: 100%;

  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    height: 100%;
    padding: var(--space-3) var(--space-4) var(--space-4);
  }
`;

export const ModelsDesktopTabs = styled.div`
  align-self: stretch;
  display: flex;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const ModelsResponsiveNavigation = styled.div`
  display: none;

  @media (max-width: 980px) {
    display: grid;
    flex: none;
    gap: var(--space-2);
    width: 100%;
  }
`;

export const ModelsResponsiveProgressTrack = styled.div`
  background: var(--alpha-black-24);
  height: 1px;
  position: relative;
  width: 100%;
`;

export const ModelsResponsiveProgressRail = styled(motion.div)`
  background: var(--red);
  height: 2px;
  inset: 0;
  position: absolute;
  transform-origin: left;
`;

export const ModelsDesktopCard = styled.article`
  align-items: center;
  display: grid;
  grid-template-columns: minmax(360px, 40%) minmax(0, 60%);
  height: min(680px, calc(100vh - var(--header-height-total) - var(--space-6)));
  overflow: hidden;
  position: relative;

  @media (max-width: 980px) {
    display: flex;
    flex-direction: row;
    flex: 1;
    height: auto;
    justify-content: center;
    min-height: 0;
    width: 100%;
  }
`;

export const ModelsImageViewport = styled.div`
  align-items: center;
  display: grid;
  height: 100%;
  justify-items: center;
  overflow: hidden;
  width: 100%;

  @media (max-width: 980px) {
    flex: 1 1 58%;
    min-width: 0;
    order: 2;
  }

  > div {
    grid-area: 1 / 1;
    height: 100%;
    width: 100%;
  }
`;

export const ModelsImageTransition = styled(motion.div)`
  align-content: center;
  grid-area: 1 / 1;
  height: 100%;
  width: 100%;
  will-change: filter, opacity;
`;
