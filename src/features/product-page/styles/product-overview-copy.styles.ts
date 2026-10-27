import styled from "styled-components";

export const ProductOverviewTitle = styled.h2`
  align-items: center;
  color: var(--color-text-primary);
  display: flex;
  font-size: clamp(30px, 3vw, 38px);
  font-weight: 500;
  gap: var(--space-4);
  grid-column: 1 / -1;
  letter-spacing: 0;
  line-height: 48px;
  margin: 0;
  max-width: 600px;
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

export const ProductOverviewDescription = styled.p`
  color: var(--color-text-muted-light);
  font-size: 18px;
  font-weight: 300;
  line-height: 1.25;
  margin: 0;
  max-width: 600px;

  @media (max-width: 760px) {
    font-size: 16px;
    line-height: 1.45;
  }
`;
