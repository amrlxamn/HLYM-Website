import styled from "styled-components";
import { ProductOverviewDetails } from "../product-overview-shell.styles";

export const ProductFullSpecificationRoot = styled.section<{ $items: number }>`
  background: var(--color-bg-canvas);
  color: var(--color-text-primary);
  min-height: ${({ $items }) => `calc(${120 + $items * 28}vh - var(--header-height-total))`};
  padding-top: 100px;
  position: relative;

  @media (max-width: 1080px) {
    min-height: auto;
    padding: 100px 0 var(--space-24);
  }

  @media (max-width: 760px) {
    padding-bottom: var(--space-12);
  }
`;

export const ProductFullSpecificationHotspotSection = styled.section`
  background: var(--color-bg-canvas);
  padding: var(--space-16) var(--space-4) var(--space-24);

  @media (max-width: 760px) {
    padding: var(--space-8) var(--space-4) var(--space-12);
  }
`;

export const ProductFullSpecificationSpecs = styled.section`
  --color-border-muted: var(--color-border-inverse);
  --color-text-dim: var(--color-text-readable-dark);
  --color-text-muted-light: var(--color-text-readable-dark);
  --color-text-primary: var(--color-text-inverse);

  background: var(--color-bg-primary);
  box-sizing: border-box;
  color: var(--color-text-inverse);
  min-height: 100dvh;
  padding: 100px 0 var(--space-24);
  scroll-margin-top: var(--header-height-total);

  @media (max-width: 1080px) {
    padding: var(--space-16) 0;
  }

  @media (max-width: 760px) {
    padding-top: var(--space-12);
    padding-bottom: var(--space-12);
  }
`;

export const ProductFullSpecificationSpecsInner = styled(ProductOverviewDetails)`
  display: grid;
  justify-items: start;

  @media (max-width: 1080px) {
    gap: var(--space-12);
  }

  @media (max-width: 760px) {
    gap: var(--space-8);
  }

  @media (max-width: 640px) {
    width: calc(100% - var(--space-8));
  }
`;

export const ProductFullSpecificationInner = styled(ProductOverviewDetails)`
  align-content: center;
  box-sizing: border-box;
  display: grid;
  gap: clamp(32px, 5vh, 50px);
  height: calc(100vh - var(--header-height-total));
  min-height: calc(100vh - var(--header-height-total));
  overflow: hidden;
  padding-bottom: clamp(32px, 5vh, 56px);
  padding-top: clamp(32px, 5vh, 56px);
  position: sticky;
  top: var(--header-height-total);

  @media (max-width: 1080px) {
    height: auto;
    min-height: 0;
    overflow: visible;
    padding-bottom: 0;
    padding-top: 0;
    position: static;
  }

  @media (max-width: 640px) {
    width: calc(100% - var(--space-8));
  }
`;

export const ProductFullSpecificationHeader = styled.header`
  display: grid;
  gap: var(--space-6);
  justify-items: start;
`;

export const ProductFullSpecificationTitle = styled.h2`
  align-items: center;
  color: var(--color-text-primary);
  display: flex;
  font-size: clamp(30px, 3vw, 38px);
  font-weight: 500;
  gap: var(--space-4);
  letter-spacing: 0;
  line-height: 48px;
  margin: 0;
  text-transform: uppercase;

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
`;

export const ProductFullSpecificationBody = styled.div`
  align-items: start;
  display: grid;
  gap: clamp(48px, 7vw, 104px);
  grid-template-columns: repeat(2, minmax(0, 1fr));
  min-width: 0;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;
