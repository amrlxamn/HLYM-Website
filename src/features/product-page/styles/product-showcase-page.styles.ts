import styled from "styled-components";
import { Container } from "@/styles/layout";

export const ProductShowcasePageRoot = styled.section`
  background: var(--color-bg-surface);
  min-height: 100dvh;
  overflow: hidden;
  position: relative;

  @media (max-width: 980px) {
    min-height: 0;
  }
`;

export const ProductShowcasePageInner = styled(Container)`
  display: flex;
  min-height: 100dvh;
  padding-bottom: var(--space-8);
  padding-top: calc(var(--space-16) + var(--space-2));
  position: relative;
  z-index: 1;

  @media (max-width: 980px) {
    display: block;
    min-height: 0;
    padding-bottom: var(--space-12);
  }
`;

export const ProductShowcaseStage = styled.article`
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: var(--space-4);
  min-height: calc(100dvh - var(--space-16) - var(--space-2) - var(--space-8));
  width: 100%;

  @media (max-width: 980px) {
    min-height: 0;
  }
`;
