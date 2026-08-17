import styled from "styled-components";
import { Container } from "@/styles/layout";

export const ContactFaqRoot = styled.section`
  background: var(--color-bg-canvas);
  color: var(--color-text-primary);
  display: grid;
  gap: var(--space-10);
  padding: var(--space-24) 0;

  > header h2 {
    align-items: center;
    display: flex;
    font-weight: var(--font-weight-light);
    gap: var(--space-4);

    &::before {
      background: var(--red);
      content: "";
      flex: 0 0 2px;
      height: 52px;
    }

    @media (max-width: 640px) {
      &::before {
        height: 32px;
      }
    }
  }

  > header p {
    color: var(--color-text-primary);
  }
`;

export const ContactFaqBody = styled(Container)`
  align-items: start;
  display: grid;
  gap: var(--space-20);
  grid-template-columns: 250px minmax(0, 1fr);

  @media (max-width: 980px) {
    gap: var(--space-12);
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactFaqList = styled.div`
  display: grid;
  gap: var(--space-8);
`;

export const ContactFaqEmpty = styled.p`
  border-top: 1px solid var(--color-border-muted);
  color: var(--color-text-dim);
  font-size: var(--font-size-lg);
  line-height: var(--leading-normal);
  margin: 0;
  padding-top: var(--space-6);
`;
