import styled from "styled-components";

export const ProductOverviewSpecList = styled.div`
  align-items: start;
  display: grid;
  gap: var(--space-12);
  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  max-width: 100%;
  width: 100%;

  @media (max-width: 1080px) {
    gap: var(--space-8);
    grid-template-columns: 1fr;
  }
`;

export const ProductTechnicalSpecMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);

  @media (max-width: 1080px) {
    flex-direction: row;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    padding-bottom: var(--space-2);
    scroll-snap-type: x proximity;
    width: 100%;
  }
`;

export const ProductTechnicalSpecHeading = styled.button`
  align-items: center;
  display: flex;
  gap: var(--space-8);
  padding: var(--space-3) 0;
  text-align: left;
  width: 100%;

  > span {
    line-height: var(--leading-none);
  }

  > span:first-child {
    font-size: var(--font-size-lg);
  }

  > span:last-child {
    color: var(--color-text-dim);
    font-size: var(--font-size-md);
    font-weight: 500;
    text-transform: uppercase;
  }

  &[aria-pressed="true"] > span:first-child {
    color: var(--red);
  }

  &[aria-pressed="true"] > span:last-child {
    color: var(--red);
  }

  @media (max-width: 1080px) {
    border-bottom: 1px solid var(--color-border-muted);
    flex: 0 0 auto;
    gap: var(--space-2);
    padding: var(--space-3) var(--space-2);
    scroll-snap-align: start;
    white-space: nowrap;
    width: auto;

    &[aria-pressed="true"] {
      border-bottom-color: var(--red);
    }
  }
`;

export const ProductTechnicalSpecPanels = styled.div`
  display: grid;
  min-width: 0;
`;

export const ProductTechnicalSpecDetails = styled.dl<{ $active: boolean }>`
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  grid-area: 1 / 1;
  margin: 0;
  min-width: 0;
  pointer-events: ${({ $active }) => ($active ? "auto" : "none")};
  visibility: ${({ $active }) => ($active ? "visible" : "hidden")};

  @media (max-width: 1080px) {
    display: ${({ $active }) => ($active ? "flex" : "none")};
  }
`;

export const ProductTechnicalSpecDetail = styled.div`
  align-items: baseline;
  display: flex;
  gap: var(--space-6);
  justify-content: space-between;
  min-width: 0;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border-muted);
    padding-bottom: var(--space-3);
  }

  dt,
  dd {
    flex: 1 1 50%;
    min-width: 0;
  }

  dd {
    margin: 0;
    overflow-wrap: anywhere;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    gap: var(--space-1);

    dd {
      text-align: left;
    }
  }
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
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const ProductOverviewSpecValue = styled.span`
  color: var(--color-text-muted-light);
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
