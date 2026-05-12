import styled from "styled-components";

export const ProductFullSpecificationItemRoot = styled.article`
  display: grid;
  gap: 16px;
  grid-template-columns: minmax(88px, 176px) minmax(0, 376px);
  grid-template-rows: auto 1px auto;
  justify-content: start;

  @media (max-width: 640px) {
    grid-template-columns: 64px minmax(0, 1fr);
  }
`;

export const ProductFullSpecificationNumber = styled.span`
  color: var(--color-text-dim);
  font-size: 20px;
  font-weight: 300;
  line-height: 1.2;
`;

export const ProductFullSpecificationItemTitle = styled.h3`
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  text-transform: uppercase;
`;

export const ProductFullSpecificationDivider = styled.span`
  background: var(--color-border-muted);
  display: block;
  height: 1px;
  width: 100%;
`;

export const ProductFullSpecificationDescription = styled.p`
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 300;
  grid-column: 2;
  line-height: 23px;
  margin: 0;
  text-transform: uppercase;
`;
