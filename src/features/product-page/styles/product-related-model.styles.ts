import styled from "styled-components";
import { ProductOverviewDescription } from "./product-overview-copy.styles";
import { ProductOverviewDetails } from "./product-overview-shell.styles";

export const ProductRelatedModelRoot = styled.section`
  background: var(--color-bg-canvas);
`;

export const ProductRelatedModelInner = styled(ProductOverviewDetails)`
  align-items: center;
  box-sizing: border-box;
  display: grid;
  gap: clamp(24px, 4vw, 64px);
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.6fr);
  min-height: clamp(420px, 36vw, 540px);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    min-height: 0;
    padding-block: var(--space-12);
    padding-inline: var(--space-4);
  }
`;

export const ProductRelatedModelCopy = styled.div`
  display: grid;
  gap: var(--space-8);
  justify-items: start;
  text-align: left;
  width: min(100%, 360px);
`;

export const ProductRelatedModelText = styled.div`
  display: grid;
  gap: var(--space-4);
`;

export const ProductRelatedModelTitle = styled.h2`
  color: var(--color-text-primary);
  font-size: clamp(40px, 4vw, 60px);
  font-weight: var(--font-weight-medium);
  line-height: 1.1;
  margin: 0;
  text-transform: uppercase;
`;

export const ProductRelatedModelDescription = styled(ProductOverviewDescription)`
  font-size: 16px;
`;

export const ProductRelatedModelActions = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-6);
  justify-content: flex-start;
  width: 100%;
`;

export const ProductRelatedModelImage = styled.img`
  display: block;
  justify-self: end;
  max-height: 500px;
  min-width: 0;
  object-fit: contain;
  width: 85%;

  @media (max-width: 760px) {
    justify-self: center;
    max-height: 320px;
    max-width: 520px;
  }
`;
