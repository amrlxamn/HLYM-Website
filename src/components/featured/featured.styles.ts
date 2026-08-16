import styled from "styled-components";
import { motion } from "framer-motion";
import { Container } from "@/styles/layout";

export const FeaturedSectionRoot = styled.section`
  background: var(--color-bg-primary);
  overflow: clip;
  position: relative;
`;

export const BornToPerformStage = styled.div`
  overflow: hidden;
  padding-bottom: var(--space-20);
  position: relative;

  &::before,
  &::after {
    animation:
      beamSweep 11s linear infinite,
      beamPulse 3s ease-in-out infinite;
    box-shadow: 0 0 8px 1px var(--red);
    content: "";
    filter: blur(3px);
    height: 2px;
    left: -50%;
    pointer-events: none;
    position: absolute;
    width: 35%;
  }

  &::before {
    animation-delay: 0s, 0s;
    background: linear-gradient(90deg, transparent, var(--red) 30%, var(--red) 70%, transparent);
    top: 15%;
  }

  &::after {
    animation-delay: 3s, 1.5s;
    animation-duration: 16s, 3s;
    background: linear-gradient(90deg, transparent, var(--red) 30%, var(--red) 70%, transparent);
    top: 82%;
  }

  @keyframes beamSweep {
    0% {
      transform: translateX(0) scaleX(1);
    }
    50% {
      transform: translateX(300%) scaleX(1.3);
    }
    100% {
      transform: translateX(600%) scaleX(1);
    }
  }

  @keyframes beamPulse {
    0%,
    100% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.6;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      animation: none;
      display: none;
    }
  }

  header h2 {
    align-items: center;
    display: flex;
    font-weight: var(--font-weight-light);
    gap: var(--space-4);

    &::before {
      background: var(--red);
      content: "";
      flex: 0 0 2px;
      height: 52px;
    }

    @media (max-width: 640px) {
      &::before {
        height: 32px;
      }
    }
  }

  @media (max-width: 980px) {
    header {
      align-items: flex-end;
      flex-direction: row;
      gap: var(--space-4);
      justify-content: space-between;
    }
  }
`;

export const BeamTrails = styled.div`
  inset: 0;
  pointer-events: none;
  position: absolute;

  > span {
    animation:
      beamSweep 13s linear infinite,
      beamPulse 3s ease-in-out infinite;
    box-shadow: 0 0 8px 1px var(--red);
    filter: blur(3px);
    height: 2px;
    left: -50%;
    position: absolute;
    width: 35%;
  }

  > span:nth-child(1) {
    animation-delay: 1.5s, 0s;
    animation-duration: 13s, 3s;
    background: linear-gradient(90deg, transparent, var(--red) 30%, var(--red) 70%, transparent);
    top: 35%;
  }

  > span:nth-child(2) {
    animation-delay: 5s, 1s;
    animation-duration: 18s, 4s;
    background: linear-gradient(90deg, transparent, var(--red) 30%, var(--red) 70%, transparent);
    top: 55%;
  }

  > span:nth-child(3) {
    animation-delay: 7s, 2s;
    animation-duration: 9s, 3.5s;
    background: linear-gradient(90deg, transparent, var(--red) 30%, var(--red) 70%, transparent);
    top: 68%;
  }

  > span:nth-child(4) {
    animation-delay: 2s, 0.5s;
    animation-duration: 15s, 4s;
    background: linear-gradient(90deg, transparent, var(--red) 30%, var(--red) 70%, transparent);
    top: 25%;
  }

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

export const FeaturedMediaSection = styled.div`
  background: var(--color-bg-primary);
`;

export const MtEditorialRoot = styled(Container).attrs({ as: "article" })`
  background: #0a0a0a;
  display: grid;
  grid-template-columns: 760px 1fr;

  @media (max-width: 1360px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

export const MtImageWrap = styled.div`
  overflow: hidden;
  position: relative;
`;

export const MtOverlay = styled.div`
  background: linear-gradient(90deg, #0a0a0a00 0%, #0a0a0a00 60%, #0a0a0a 100%);
  inset: 0;
  position: absolute;
`;

export const MtOverlayTop = styled.div`
  background: linear-gradient(180deg, #0a0a0a88 0%, #0a0a0a00 100%);
  height: 200px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const MtWatermark = styled.span`
  color: #ffffff06;
  font-size: 320px;
  font-weight: 700;
  left: -20px;
  letter-spacing: -10px;
  line-height: 1;
  position: absolute;
  top: 180px;
`;

export const MtCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  justify-content: center;
  padding: 80px;

  @media (max-width: 980px) {
    padding: 28px 20px;
  }
`;

export const MtHeading = styled.h3`
  font-size: 48px;
  letter-spacing: -2px;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: 980px) {
    font-size: 34px;
  }
`;

export const MtAccentHeading = styled(MtHeading)`
  color: var(--red);
`;

export const MtDescription = styled.p`
  color: var(--color-text-soft-dark);
  font-size: var(--font-size-description);
  line-height: 1.7;
  margin: 0;
  width: 420px;

  @media (max-width: 980px) {
    width: auto;
  }
`;

export const MtPointsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MtPointItem = styled.li`
  align-items: center;
  color: #ffffff80;
  display: inline-flex;
  gap: 12px;
  font-size: 13px;

  svg {
    color: var(--red);
    height: 18px;
    width: 18px;
  }
`;

export const MtPrice = styled.strong`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const SliderControl = styled.div`
  align-items: center;
  display: flex;
  gap: var(--space-3);
`;

export const HorizontalPinSection = styled.div`
  margin-top: 100px;
  position: relative;

  @media (max-width: 980px) {
    margin-top: var(--space-20);
  }

  @media (max-width: 720px) {
    margin-top: var(--space-16);
  }
`;

export const HorizontalPinSticky = styled.div`
  overflow: hidden;

  @media (max-width: 980px) {
    padding: 0 var(--space-4);
  }
`;

export const HorizontalTrack = styled(motion.div)`
  display: flex;
  gap: var(--space-4);

  @media (min-width: 981px) {
    flex-direction: row;
    flex-wrap: nowrap;
    will-change: transform;
  }

  @media (max-width: 980px) {
    overflow-x: auto;
    padding-bottom: var(--space-4);
    scroll-snap-type: x mandatory;
  }

  > * {
    flex: 0 0 calc((100vw - 2 * var(--space-4)) / 3);
    height: 597px;
    max-width: 480px;

    @media (max-width: 980px) {
      flex: 0 0 calc((100% - var(--space-4)) / 2);
      scroll-snap-align: start;
    }

    @media (max-width: 720px) {
      flex: 0 0 100%;
      height: 520px;
      max-width: none;
    }
  }
`;

export const FeaturedModelSpotlightRoot = styled.article`
  background: #1a1a1a;
  height: 600vh;
  margin-top: 28px;
  overflow-x: clip;
  position: relative;

  @media (max-width: 980px) {
    height: 450vh;
    margin-top: 20px;
  }
`;

export const FeaturedModelSpotlightGrid = styled(Container)`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 96px 0;
  position: sticky;
  top: 0;

  @media (max-width: 1160px) {
    display: block;
    height: 100vh;
    padding: 0 20px;
    position: sticky;
    top: 0;
  }
`;

export const FeaturedModelSpotlightCallout = styled.div<{
  $position: "top-left" | "right" | "bottom-left";
}>`
  color: #fff;
  max-width: clamp(240px, 28vw, 380px);
  opacity: 0;
  position: absolute;
  will-change: opacity, transform;
  z-index: 2;

  ${({ $position }) => {
    switch ($position) {
      case "top-left":
        return `left: 0; top: 20%;`;
      case "right":
        return `right: 0; top: 40%; text-align: right;`;
      case "bottom-left":
        return `left: 0; bottom: 12%;`;
    }
  }}

  @media (max-width: 1160px) {
    bottom: auto;
    left: 20px;
    max-width: none;
    position: absolute;
    right: 20px;
    text-align: left;
    top: auto;
    bottom: 10%;
  }
`;

export const FeaturedModelSpotlightCalloutNumber = styled.p`
  color: #ffffff55;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 0 0 10px;
  text-transform: uppercase;
`;

export const FeaturedModelSpotlightCalloutTitle = styled.h4`
  font-size: 64px;
  font-style: italic;
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 0.9;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: 1160px) {
    font-size: 28px;
    letter-spacing: -1px;
  }
`;

export const FeaturedModelSpotlightCalloutDescription = styled.p`
  color: #ffffffaa;
  font-size: var(--font-size-description);
  line-height: 1.5;
  margin: 14px 0 0;
`;

export const FeaturedModelSpotlightStage = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 1;

  &::before {
    background: radial-gradient(circle at center, #ffffff08 0%, transparent 70%);
    border-radius: 50%;
    content: "";
    height: 120%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
  }

  @media (max-width: 1160px) {
    height: 40vh;
    margin: 6vh auto 0;
    width: 100%;
  }
`;

export const FeaturedModelSpotlightImageWrap = styled.div`
  filter: drop-shadow(0 32px 56px #00000090);
  position: relative;
  width: min(85%, 1100px);
  will-change: transform;

  img,
  canvas {
    display: block;
    height: auto;
    object-fit: contain;
    width: 100%;
  }

  @media (max-width: 1160px) {
    width: min(80%, 300px);
  }
`;
