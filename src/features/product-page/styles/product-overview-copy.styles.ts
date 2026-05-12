import styled from "styled-components";

export const ProductOverviewContent = styled.div`
  align-items: center;
  display: grid;
  gap: 24px;
  justify-items: center;
  max-width: 700px;
  text-align: center;
  width: min(calc(100% - 2rem), 700px);
`;

export const ProductOverviewEyebrow = styled.p`
  color: var(--red);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  text-transform: uppercase;
`;

export const ProductOverviewTitle = styled.h2`
  color: var(--color-text-inverse);
  font-size: clamp(30px, 3vw, 38px);
  font-weight: 500;
  letter-spacing: 0;
  line-height: 48px;
  margin: 0;
  max-width: 600px;
  text-transform: uppercase;
`;

export const ProductOverviewDescription = styled.p`
  color: var(--color-text-neutral-dark);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.25;
  margin: 0;
  max-width: 600px;

  @media (max-width: 760px) {
    font-size: 16px;
    line-height: 1.45;
  }
`;
