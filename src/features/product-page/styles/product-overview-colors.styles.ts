import { motion } from "framer-motion";
import styled from "styled-components";

export const ProductOverviewColorRunway = styled.div<{ $cardCount: number }>`
  height: ${({ $cardCount }) => `calc(100vh + ${Math.max($cardCount - 1, 1) * 70}vh)`};
  position: relative;
  width: 100%;

  @media (max-width: 980px) {
    height: auto;
  }
`;

export const ProductOverviewColorGrid = styled.div`
  align-content: center;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: minmax(0, 1fr);
  min-height: calc(100vh - var(--header-height-total));
  padding-top: clamp(24px, 5vh, 56px);
  position: sticky;
  top: var(--header-height-total);
  width: 100%;
  will-change: transform;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    min-height: 0;
    padding: 0;
    position: static;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductOverviewColorCardRoot = styled(motion.article)<{ $isFeatured: boolean }>`
  background: var(--color-bg-raised);
  border: 1px solid
    ${({ $isFeatured }) => ($isFeatured ? "var(--color-border-brand-subtle)" : "transparent")};
  display: grid;
  grid-template-rows: minmax(0, 1fr) minmax(112px, auto);
  height: 100%;
  min-width: 0;
  overflow: hidden;
  transform-origin: center bottom;
  will-change: opacity, transform;

  @media (max-width: 980px) {
    opacity: 1 !important;
    transform: none !important;
  }

  @media (max-width: 760px) {
    grid-template-rows: 300px auto;
    height: auto;
  }
`;

export const ProductOverviewColorImage = styled.div`
  align-items: center;
  background: var(--color-bg-surface);
  display: grid;
  justify-items: center;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductOverviewColorInfo = styled.div`
  align-content: start;
  display: grid;
  gap: 8px;
  padding: 24px 28px;
`;

export const ProductOverviewColorHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const ProductOverviewColorName = styled.h3`
  color: var(--color-text-inverse);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
  text-transform: uppercase;
`;

export const ProductOverviewColorSwatch = styled.span<{ $accentColor: string }>`
  background: ${({ $accentColor }) => $accentColor};
  border: 1px solid var(--color-border-inverse);
  border-radius: 12px;
  flex: 0 0 auto;
  height: 24px;
  width: 24px;
`;

export const ProductOverviewColorDescription = styled.p`
  color: var(--color-text-wash-dark);
  font-size: 13px;
  font-weight: 300;
  line-height: 1.5;
  margin: 0;
  text-transform: uppercase;
`;
