import styled from "styled-components";
import { HERO_AUTO_ADVANCE_MS } from "./use-hero-carousel-state";

export const HeroPaginationRoot = styled.div`
  bottom: var(--space-5);
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  z-index: 2;
`;

export const HeroPaginationInner = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  max-width: 1280px;
  width: calc(100% - var(--space-16));

  @media (max-width: 1360px) {
    width: calc(100% - var(--space-12));
  }

  @media (max-width: 980px) {
    width: calc(100% - var(--space-8));
  }

  @media (max-width: 640px) {
    width: calc(100% - var(--space-4));
  }
`;

export const HeroSlideName = styled.span`
  font-size: var(--font-size-md);
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const HeroMeasureSpan = styled.span`
  height: 0;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  visibility: hidden;
`;

export const HeroSlideNumber = styled.span`
  color: var(--color-brand-500);
  flex: none;
  font-size: var(--font-size-md);
  transition: transform var(--duration-press) var(--easing-out);
`;

export const HeroProgressBar = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  color: var(--color-text-inverse);
  display: flex;
  font-size: var(--font-size-md);
  gap: var(--space-3);
  letter-spacing: var(--tracking-widest);
  line-height: var(--leading-none, 1);
  max-width: min(70vw, 520px);
  min-height: 32px;
  padding: 0 0 var(--space-3);
  pointer-events: auto;
  position: relative;
  text-align: left;
  text-transform: uppercase;
  transition: transform var(--duration-press) var(--easing-out);

  &::after,
  &::before {
    bottom: 0;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    width: 100%;
  }

  &::after {
    background: var(--alpha-white-40);
  }

  &::before {
    animation: hero-progress-fill ${HERO_AUTO_ADVANCE_MS}ms linear forwards;
    background: var(--color-brand-500);
    transform: scaleX(0);
    transform-origin: left;
    z-index: 1;
  }

  @keyframes hero-progress-fill {
    from {
      transform: scaleX(0);
    }

    to {
      transform: scaleX(1);
    }
  }

  &:hover ${HeroSlideNumber} {
    transform: translateX(var(--space-1));
  }

  &:active {
    transform: scale(0.98);
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation-duration: 1ms;
    }
  }
`;
