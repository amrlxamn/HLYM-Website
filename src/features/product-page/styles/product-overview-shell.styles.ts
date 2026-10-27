import styled from "styled-components";

export const ProductOverviewRoot = styled.section`
  background: var(--color-bg-canvas);
  color: var(--color-text-primary);
  overflow-x: clip;
`;

export const ProductOverviewDetails = styled.div`
  display: grid;
  gap: 100px;
  margin: 0 auto;
  max-width: 1280px;
  width: calc(100% - var(--space-16));

  @media (max-width: 1360px) {
    width: calc(100% - var(--space-12));
  }

  @media (max-width: 980px) {
    width: calc(100% - var(--space-8));
  }

  @media (max-width: 760px) {
    gap: 40px;
  }

  @media (max-width: 640px) {
    width: calc(100% - var(--space-4));
  }
`;
