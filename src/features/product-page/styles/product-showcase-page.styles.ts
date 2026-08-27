import styled from "styled-components";
import { Container } from "@/styles/layout";

export const ProductShowcasePageRoot = styled.section`
  background: var(--color-bg-surface);
  min-height: 100dvh;
  overflow: hidden;
  position: relative;
`;

export const ProductShowcasePageInner = styled(Container)`
  display: grid;
  min-height: 100dvh;
  padding-bottom: 32px;
  padding-top: 22px;
  position: relative;
  z-index: 1;
`;

export const ProductShowcaseStage = styled.article`
  align-items: center;
  display: grid;
  min-height: calc(100dvh - 54px);
  position: relative;
`;
