import styled from "styled-components";

export const FooterBrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-width: 480px;
`;

export const FooterBrandTitle = styled.h3`
  color: var(--color-text-primary);
  font-size: 38px;
  font-weight: 800;
  letter-spacing: 8px;
  margin: 0;
  text-transform: uppercase;
`;

export const FooterBrandAddress = styled.p`
  color: var(--color-text-muted-light);
  font-size: 14px;
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
