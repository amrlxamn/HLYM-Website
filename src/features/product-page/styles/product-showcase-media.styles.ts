import styled from "styled-components";
import {
  FeaturedBannerSpecs,
  FeaturedBannerSpecValue
} from "@/components/featured/featured-banner.styles";

export const ProductShowcaseBrand = styled.div`
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  text-align: left;
`;

export const ProductShowcaseCategory = styled.p`
  color: var(--color-text-muted-light);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wider);
  margin: 0;
`;

export const ProductShowcaseMark = styled.img`
  display: block;
  flex: none;
  height: auto;
  max-height: 90px;
  object-fit: contain;
  object-position: left center;
  pointer-events: none;
  width: 150px;
`;

export const ProductShowcaseDetails = styled.div`
  align-items: flex-start;
  display: flex;
  flex: none;
  flex-direction: column;
  gap: var(--space-8);
  width: calc(var(--space-24) * 2);

  @media (max-width: 980px) {
    order: 3;
    width: 100%;
  }

  @media (max-width: 640px) {
    align-self: center;
    width: min(100%, 260px);
  }
`;

export const ProductShowcaseMedia = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 0;
  gap: var(--space-8);
  min-height: 0;
  width: 100%;

  @media (max-width: 980px) {
    flex: none;
    flex-direction: column;
    gap: var(--space-4);
  }
`;

export const ProductShowcaseSpecs = styled(FeaturedBannerSpecs)`
  flex: none;
  flex-direction: column;
  gap: var(--space-8);

  ${FeaturedBannerSpecValue} {
    font-size: var(--font-size-3xl);
  }

  @media (min-width: 641px) and (max-width: 980px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 640px) {
    gap: var(--space-5);
  }
`;

export const ProductImagePanel = styled.div`
  align-items: center;
  aspect-ratio: 3 / 2;
  container-type: inline-size;
  display: flex;
  flex: 1 1 0;
  isolation: isolate;
  justify-content: center;
  min-height: 0;
  min-width: 0;
  position: relative;
  width: 100%;

  @media (max-width: 980px) {
    flex: none;
    order: 1;
  }

  img {
    display: block;
    filter: drop-shadow(var(--shadow-card));
    height: 100%;
    max-height: 100%;
    max-width: calc(var(--container-compact) - 150px);
    object-fit: contain;
    position: relative;
    width: 100%;
    z-index: 1;
  }
`;

export const ProductShowcaseBackdrop = styled.div<{ $scale: number }>`
  align-items: center;
  color: rgba(0, 0, 0, 0.085);
  display: flex;
  font-family: var(--font-family-display, "Lato", Arial, sans-serif);
  font-size: min(40cqw, 520px);
  font-weight: 900;
  gap: 0.09em;
  justify-content: center;
  left: 50%;
  letter-spacing: -0.035em;
  line-height: 1;
  mask-image: linear-gradient(to bottom, #000 0%, #000 35%, transparent 75%);
  pointer-events: none;
  position: absolute;
  top: 28%;
  transform: ${({ $scale }) => `translate(-50%, -50%) scaleX(${$scale})`};
  user-select: none;
  white-space: nowrap;
  z-index: 0;
  -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 35%, transparent 75%);

  > span:first-child {
    display: flex;
    gap: 0.015em;
    letter-spacing: 0;
    transform: skewX(-10deg);
  }

  > span:last-child:not(:first-child) {
    color: rgba(0, 0, 0, 0.11);
    font-size: 0.34em;
    font-weight: 300;
    letter-spacing: -0.02em;
    transform: translateY(0.2em) skewX(-10deg);
  }

  @media (max-width: 980px) {
    font-size: 38cqw;
    top: 25%;

    > span:last-child:not(:first-child) {
      display: none;
    }
  }
`;

export const ProductRotationGuide = styled.div`
  bottom: 2%;
  height: clamp(44px, 9cqw, 100px);
  left: 50%;
  pointer-events: none;
  position: absolute;
  transform: translateX(-50%);
  width: min(90%, 850px);
  z-index: 1;

  &::before {
    border: 1px solid rgba(0, 0, 0, 0.24);
    border-radius: 50%;
    border-top-color: rgba(0, 0, 0, 0.08);
    content: "";
    inset: 0;
    position: absolute;
  }

  span {
    background: var(--color-bg-surface);
    bottom: 0;
    color: var(--color-text-muted-light);
    font-size: clamp(18px, 2.5cqw, 28px);
    font-weight: var(--font-weight-semibold);
    left: 50%;
    letter-spacing: 0.06em;
    padding: 0 var(--space-2);
    position: absolute;
    transform: translate(-50%, 50%);
    white-space: nowrap;
  }
`;

export const ProductRotationViewerSurface = styled.div<{ $interactive: boolean }>`
  align-items: center;
  cursor: ${({ $interactive }) => ($interactive ? "grab" : "default")};
  display: flex;
  height: 100%;
  justify-content: center;
  margin-inline: auto;
  max-width: calc(var(--container-compact) - 150px);
  position: relative;
  touch-action: ${({ $interactive }) => ($interactive ? "pan-y" : "auto")};
  width: 100%;
  z-index: 2;

  &:active {
    cursor: ${({ $interactive }) => ($interactive ? "grabbing" : "default")};
  }

  &:focus-visible {
    outline: 2px solid var(--color-text-primary);
    outline-offset: 10px;
  }

  > img {
    height: 100%;
    inset: 0;
    margin: auto;
    object-fit: contain;
    position: absolute;
    width: 100%;
    z-index: 3;
  }

  canvas {
    aspect-ratio: 3 / 2;
    display: block;
    filter: drop-shadow(var(--shadow-card));
    height: auto;
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
    width: 100%;
  }
`;
