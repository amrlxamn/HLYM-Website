import styled from "styled-components";
import { Container } from "@/styles/layout";

export const NewsSectionRoot = styled.section`
  background: var(--color-text-inverse);
  color: var(--color-text-primary);
  padding-bottom: var(--space-24);

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

export const NewsGrid = styled(Container)`
  display: grid;
  column-gap: var(--space-8);
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: var(--space-20);
  row-gap: var(--space-16);

  @media (max-width: 980px) {
    column-gap: var(--space-6);
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: var(--space-12);
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    margin-top: var(--space-16);
    row-gap: var(--space-16);
  }
`;
