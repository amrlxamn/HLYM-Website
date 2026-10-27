import styled from "styled-components";

export const ProductSubHeaderRoot = styled.div`
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

export const ProductSubHeaderInner = styled.div`
  align-items: stretch;
  display: grid;
  min-height: var(--header-height-main);
  padding: var(--space-4) var(--space-6);

  @media (max-width: 760px) {
    padding: var(--space-3) var(--space-4);
  }
`;
