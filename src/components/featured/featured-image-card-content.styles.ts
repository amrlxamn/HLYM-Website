import styled from "styled-components";
import { FeaturedImageCardRoot } from "./featured-image-card.styles";

export const FeaturedImageCardCopy = styled.div`
  bottom: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  left: var(--space-8);
  max-width: 400px;
  position: absolute;
  right: var(--space-8);
  transform: translateY(0);
  transition: transform var(--duration-base) var(--easing-out);
  z-index: 1;

  ${FeaturedImageCardRoot}:focus-within & {
    transform: translateY(-148px);
  }

  @media (hover: hover) and (pointer: fine) {
    ${FeaturedImageCardRoot}:hover & {
      transform: translateY(-148px);
    }
  }

  @media (hover: none) {
    transform: translateY(-148px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (max-width: 980px) {
    bottom: var(--space-5);
    left: var(--space-5);
    right: var(--space-5);
  }
`;

export const FeaturedImageCardTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
  text-wrap: balance;
`;

export const FeaturedImageCardDetails = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: calc(100% + var(--space-4));
  transition: opacity var(--duration-fast) ease;

  ${FeaturedImageCardRoot}:focus-within & {
    opacity: 1;
  }

  @media (hover: hover) and (pointer: fine) {
    ${FeaturedImageCardRoot}:hover & {
      opacity: 1;
    }
  }

  @media (hover: none) {
    opacity: 1;
  }
`;

export const FeaturedImageCardDescription = styled.p`
  color: var(--color-text-readable-dark);
  font-size: var(--font-size-description);
  font-weight: var(--font-weight-light);
  line-height: 1.5;
  margin: 0;
  text-wrap: pretty;
  width: 100%;
`;
