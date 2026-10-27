import styled from "styled-components";

export const ProductFullSpecificationItemRoot = styled.article`
  display: grid;
  gap: 16px;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto 1px auto;

  @media (max-width: 1080px) {
    grid-template-rows: none;
  }
`;

export const ProductFullSpecificationItemTitle = styled.h3`
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  text-transform: uppercase;
`;

export const ProductFullSpecificationItemImage = styled.img`
  display: none;

  @media (max-width: 1080px) {
    background: #0a0a0a;
    display: block;
    max-height: 420px;
    object-fit: contain;
    width: 100%;
  }
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
  line-height: 23px;
  margin: 0;
  text-transform: uppercase;
`;
