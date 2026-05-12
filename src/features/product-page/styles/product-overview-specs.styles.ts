import styled from "styled-components";

export const ProductOverviewSpecList = styled.div`
  display: grid;
  gap: 24px;
  max-width: 600px;
  width: min(calc(100% - 2rem), 600px);
`;

export const ProductOverviewSpecItem = styled.div`
  display: grid;
  gap: 24px;
`;

export const ProductOverviewSpecContent = styled.div`
  align-items: center;
  display: grid;
  gap: 24px;
  grid-template-columns: 56px minmax(0, 1fr) minmax(0, 1fr);
`;

export const ProductOverviewSpecIndex = styled.span`
  color: var(--color-text-dim);
  font-size: 20px;
  font-weight: 300;
  line-height: 1.2;
`;

export const ProductOverviewSpecLabel = styled.strong`
  color: var(--color-text-inverse);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const ProductOverviewSpecValue = styled.span`
  color: var(--color-text-neutral-dark);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  text-align: right;
  text-transform: uppercase;
`;

export const ProductOverviewSpecDivider = styled.span`
  background: var(--color-border-muted);
  display: block;
  height: 1px;
  opacity: 0.6;
  width: 100%;
`;
