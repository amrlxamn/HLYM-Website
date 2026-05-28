import styled from "styled-components";
import { Container } from "@/styles/layout";

export const ContactFaqRoot = styled.section`
  background: var(--color-bg-canvas);
  color: var(--color-text-primary);
  display: grid;
  gap: 50px;
  padding: 100px;
`;

export const ContactFaqHeader = styled(Container)`
  display: grid;
  gap: 24px;
  justify-items: start;
`;

export const ContactFaqTitle = styled.h1`
  font-size: clamp(30px, 3vw, 38px);
  font-weight: 500;
  letter-spacing: 0;
  line-height: 48px;
  margin: 0;
  text-transform: uppercase;
`;

export const ContactFaqCopy = styled.p`
  color: var(--color-text-dim);
  font-size: 18px;
  line-height: 1.45;
  margin: 0;
  max-width: 560px;
`;

export const ContactFaqBody = styled(Container)`
  align-items: start;
  display: grid;
  gap: 100px;
  grid-template-columns: 250px minmax(0, 1fr);

  @media (max-width: 980px) {
    gap: 48px;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactFaqList = styled.div`
  display: grid;
  gap: 32px;
`;

export const ContactFaqEmpty = styled.p`
  border-top: 1px solid var(--color-border-muted);
  color: var(--color-text-dim);
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  padding-top: 24px;
`;
