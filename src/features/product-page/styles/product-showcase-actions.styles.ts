import styled from "styled-components";

export const ProductSpecs = styled.div`
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  justify-self: center;
  max-width: 760px;
  width: 100%;

  @media (max-width: 760px) {
    gap: 14px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ProductSpecCard = styled.div`
  display: grid;
  gap: 5px;
  text-align: center;

  strong {
    color: var(--color-text-primary);
    font-size: clamp(18px, 2vw, 28px);
    font-weight: 800;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  span {
    color: var(--color-text-muted-light);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

export const ProductCta = styled.a`
  align-items: center;
  background: var(--color-text-primary);
  border-radius: 8px;
  color: var(--color-text-inverse);
  display: inline-flex;
  gap: 14px;
  justify-self: end;
  min-height: 64px;
  padding: 0 20px;
  text-transform: uppercase;

  strong {
    align-items: center;
    display: inline-flex;
    font-size: 14px;
    font-weight: 800;
    gap: 8px;
    letter-spacing: 1.2px;
  }

  img {
    display: block;
    filter: drop-shadow(var(--shadow-card));
    height: 34px;
    object-fit: contain;
    width: 64px;
  }

  @media (max-width: 760px) {
    justify-content: center;
    justify-self: stretch;
  }
`;
