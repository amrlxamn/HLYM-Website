import styled from "styled-components";

export const FooterRoot = styled.footer`
  border-top: 1px solid var(--color-border-inverse);
  padding: var(--space-6) var(--space-5);

  @media (max-width: 980px) {
    padding: var(--space-5) var(--space-4);
  }
`;

export const FooterInner = styled.div`
  align-items: center;
  display: flex;
  gap: var(--space-4);
  justify-content: space-between;
  margin: 0 auto;
  max-width: 920px;
  width: 100%;

  @media (max-width: 480px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const FooterLogo = styled.span`
  align-items: center;
  display: flex;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  gap: var(--space-2);
`;

export const FooterLogoMark = styled.span`
  align-items: center;
  background: var(--color-brand-500);
  border-radius: var(--radius-none);
  display: inline-flex;
  font-size: 12px;
  font-weight: 800;
  height: 24px;
  justify-content: center;
  width: 24px;
`;

export const FooterMetaText = styled.span`
  color: var(--color-text-soft-dark);
  font-size: var(--font-size-sm);
`;
