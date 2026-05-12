import styled from "styled-components";

export const FooterLinksGrid = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-self: end;
  max-width: 620px;
  width: 100%;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 440px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterColumnRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;
`;

export const FooterColumnTitle = styled.h4`
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 3px;
  margin: 0;
  text-transform: uppercase;
`;

export const FooterColumnLink = styled.a`
  color: var(--color-text-muted-light);
  font-size: 13px;
  line-height: 1.4;
  text-transform: uppercase;
  transition: color var(--duration-base) var(--easing-standard);

  &:hover {
    color: var(--color-text-primary);
  }
`;

export const FooterBottomLinks = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-left: auto;

  span {
    align-items: center;
    display: flex;
    gap: 12px;
  }

  @media (max-width: 980px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-left: 0;
  }
`;

export const FooterBottomLink = styled.a`
  color: var(--color-text-subtle);
  font-size: 12px;
  letter-spacing: 0.5px;
  margin: 0;
  text-transform: uppercase;
  transition: color var(--duration-base) var(--easing-standard);

  &:hover {
    color: var(--color-text-primary);
  }
`;

export const FooterBottomDot = styled.span`
  background: var(--color-border-subtle);
  border-radius: 999px;
  height: 3px;
  width: 3px;
`;
