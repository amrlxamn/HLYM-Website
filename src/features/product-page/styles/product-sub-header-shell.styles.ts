import styled from "styled-components";
import { Container } from "@/styles/layout";

export const ProductSubHeaderRoot = styled.div`
  background: var(--color-bg-surface);
  border-top: 1px solid var(--color-border-subtle);
  border-bottom: 1px solid var(--color-border-subtle);
  padding: 0;
  position: sticky;
  top: var(--header-height-total);
  width: 100%;
  z-index: 49;
`;

export const ProductSubHeaderInner = styled(Container)`
  align-items: stretch;
  display: grid;
  grid-template-columns: auto 1fr auto;
  height: 50px;

  @media (max-width: 760px) {
    grid-template-columns: auto 1fr auto;
    height: 50px;
  }
`;
