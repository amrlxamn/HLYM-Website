import styled from "styled-components";
import { Container } from "@/styles/layout";

export const FooterSectionRoot = styled.section`
  background: var(--color-bg-surface);
  color: var(--color-text-primary);
  padding-bottom: 88px;

  @media (max-width: 860px) {
    padding-bottom: 40px;
  }
`;

export const MainFooter = styled.footer`
  background: var(--color-bg-surface);
  overflow: hidden;
  position: relative;
`;

export const FooterContent = styled(Container)`
  display: grid;
  gap: 72px;
  padding-bottom: 0;
  padding-top: 104px;

  @media (max-width: 860px) {
    gap: 28px;
    padding-top: 54px;
  }
`;

export const FooterTop = styled.div`
  align-items: start;
  display: grid;
  gap: 96px;
  grid-template-columns: minmax(260px, 360px) minmax(0, 1fr);

  @media (max-width: 860px) {
    gap: 36px;
    grid-template-columns: 1fr;
  }
`;

export const FooterBottom = styled.div`
  align-items: center;
  border-top: 1px solid var(--color-border-subtle);
  display: flex;
  gap: 24px;
  justify-content: space-between;
  padding-top: 24px;

  @media (max-width: 980px) {
    align-items: start;
    flex-direction: column;
  }
`;

export const FooterBottomText = styled.p`
  color: var(--color-text-subtle);
  font-size: 12px;
  font-weight: var(--font-weight-normal);
  letter-spacing: 1.2px;
  line-height: 1.5;
  margin: 0;
  text-transform: uppercase;
`;
