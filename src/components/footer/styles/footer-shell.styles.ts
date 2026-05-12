import styled from "styled-components";
import { Container } from "@/styles/layout";

export const FooterSectionRoot = styled.section`
  background: var(--color-bg-surface);
  color: var(--color-text-primary);
`;

export const MainFooter = styled.footer`
  background: linear-gradient(180deg, var(--color-bg-surface) 0%, var(--color-bg-muted) 100%);
  overflow: hidden;
  position: relative;
`;

export const FooterContent = styled(Container)`
  display: grid;
  gap: clamp(28px, 5vw, 72px);
  padding-bottom: 0;
  padding-top: clamp(54px, 7vw, 104px);
`;

export const FooterTop = styled.div`
  align-items: start;
  display: grid;
  gap: clamp(36px, 6vw, 96px);
  grid-template-columns: minmax(260px, 360px) minmax(0, 1fr);

  @media (max-width: 860px) {
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
  line-height: 1.5;
  margin: 0;
  text-transform: uppercase;
`;
