import styled from "styled-components";
import { ProductOverviewDetails } from "./product-overview-shell.styles";

export const ProductOverviewSlidingCarouselRoot = styled(ProductOverviewDetails)`
  display: block;
`;

export const ProductOverviewSlidingCarouselControls = styled.div`
  display: flex;
  gap: var(--space-6);
  justify-content: flex-end;
  margin-bottom: var(--space-6);
`;

export const ProductOverviewSlidingCarouselMedia = styled.section`
  aspect-ratio: 2 / 1;
  position: relative;

  @media (max-width: 760px) {
    aspect-ratio: 4 / 5;
    min-height: 440px;
  }
`;

export const ProductOverviewSlidingCarouselTrack = styled.div<{ $direction: -1 | 0 | 1 }>`
  display: flex;
  gap: var(--space-2);
  inset: 0;
  position: absolute;
  transform: translate3d(
    ${({ $direction }) =>
      $direction === -1
        ? "0"
        : $direction === 1
          ? "calc(-200% + var(--space-16) + var(--space-16) - var(--space-2) - var(--space-2))"
          : "calc(-100% + var(--space-16) - var(--space-2))"},
    0,
    0
  );
  transition: ${({ $direction }) =>
    $direction === 0 ? "none" : "transform 260ms cubic-bezier(0.77, 0, 0.175, 1)"};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const ProductOverviewSlidingCarouselSlide = styled.div`
  flex: 0 0 calc(100% - var(--space-16));
  height: 100%;
  overflow: hidden;
  position: relative;
`;
