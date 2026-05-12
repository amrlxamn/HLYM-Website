import styled from "styled-components";

export const ProductSubHeaderName = styled.div`
  align-items: center;
  display: flex;
  padding-right: 36px;

  @media (max-width: 760px) {
    padding-right: 18px;
  }
`;

export const ProductSubHeaderNameMark = styled.img`
  display: block;
  height: 20px;
  object-fit: contain;
  width: auto;

  @media (max-width: 760px) {
    height: 26px;
  }
`;
