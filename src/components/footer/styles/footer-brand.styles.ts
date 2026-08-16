import styled from "styled-components";

export const FooterBrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-width: 480px;
`;

export const FooterBrandLogo = styled.img`
  height: 40px;
  object-fit: contain;
  width: 215px;

  @media (max-width: 640px) {
    height: 34px;
    width: 150px;
  }
`;

export const FooterBrandAddress = styled.p`
  color: var(--color-text-muted-light);
  font-size: 13px;
  font-weight: var(--font-weight-normal);
  letter-spacing: 1px;
  line-height: 1.7;
  margin: 0;
  text-transform: uppercase;

  span {
    display: block;
    white-space: nowrap;
  }

  @media (max-width: 560px) {
    span {
      white-space: normal;
    }
  }
`;
