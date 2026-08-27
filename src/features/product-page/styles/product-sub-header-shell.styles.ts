import { motion } from "framer-motion";
import styled from "styled-components";

export const ProductSubHeaderRoot = styled(motion.div)`
  background: var(--color-bg-canvas);
  bottom: 0;
  left: 50%;
  margin: 0 auto;
  max-width: 1280px;
  position: fixed;
  width: calc(100% - var(--space-16));
  z-index: 35;

  @media (max-width: 1360px) {
    width: calc(100% - var(--space-12));
  }

  @media (max-width: 980px) {
    width: calc(100% - var(--space-8));
  }

  @media (max-width: 640px) {
    width: calc(100% - var(--space-4));
  }
`;

export const ProductSubHeaderInner = styled.div`
  align-items: stretch;
  display: grid;
  grid-template-columns: auto 1fr auto;
  min-height: var(--header-height-main);
  padding: var(--space-4) var(--space-6);

  @media (max-width: 760px) {
    grid-template-columns: auto 1fr auto;
    padding: var(--space-3) var(--space-4);
  }
`;
