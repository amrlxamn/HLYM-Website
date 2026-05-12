import styled from "styled-components";

export const ProductOverviewRoot = styled.section`
  background: var(--color-bg-primary);
  color: var(--color-text-inverse);
  overflow-x: clip;
  padding-top: 100px;
`;

export const ProductOverviewInner = styled.div`
  align-items: center;
  display: grid;
  gap: 100px;
  justify-items: center;
  width: 100%;

  @media (max-width: 760px) {
    gap: 40px;
  }
`;
