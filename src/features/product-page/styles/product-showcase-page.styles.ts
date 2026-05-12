import styled from "styled-components";
import { Container } from "@/styles/layout";

export const ProductShowcasePageRoot = styled.section`
  background: var(--color-bg-surface);
  min-height: calc(100vh - var(--header-height-total));
  overflow: hidden;
  position: relative;

  &::before {
    background: url("/assets/hlym/product-backgrounds/nvx-red-wave.png") center 48% / cover
      no-repeat;
    content: "";
    inset: 0;
    opacity: 0.28;
    pointer-events: none;
    position: absolute;
  }

  &::after {
    background:
      linear-gradient(180deg, var(--color-bg-surface) 0%, transparent 30%),
      linear-gradient(0deg, var(--color-bg-surface) 0%, transparent 22%);
    content: "";
    inset: 0;
    pointer-events: none;
    position: absolute;
  }
`;

export const ProductShowcasePageInner = styled(Container)`
  display: grid;
  min-height: calc(100vh - var(--header-height-total));
  padding-bottom: 32px;
  padding-top: 22px;
  position: relative;
  z-index: 1;
`;

export const ProductShowcaseStage = styled.article`
  align-items: center;
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  min-height: calc(100vh - var(--header-height-total) - 54px);
  position: relative;
`;

export const ProductBottomPanel = styled.div`
  align-items: center;
  display: grid;
  gap: 24px;
  grid-template-columns: minmax(0, 1fr) auto;
  position: relative;
  z-index: 3;

  @media (max-width: 760px) {
    align-items: stretch;
    grid-template-columns: 1fr;
  }
`;
