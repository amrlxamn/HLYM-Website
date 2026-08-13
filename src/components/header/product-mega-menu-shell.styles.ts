import { motion } from "framer-motion";
import styled from "styled-components";

export const ProductNavItem = styled.div`
  align-items: center;
  display: inline-flex;
  height: var(--header-height-main);
  position: static;

  > a {
    display: none;
  }

  @media (max-width: 980px) {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    height: auto;

    > a {
      display: inline-flex;
    }

    > button {
      display: none;
    }
  }
`;

export const ProductMegaMenuRoot = styled(motion.div)`
  background: var(--color-bg-canvas);
  inset: 0;
  overflow: hidden;
  position: fixed;
  transform-origin: top;
  z-index: 40;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const ProductMegaMenuContent = styled.div<{
  $contentTop: number;
  $fullWidth: boolean;
}>`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  height: ${({ $contentTop }) => `calc(100dvh - ${$contentTop}px)`};
  left: 50%;
  max-width: ${({ $fullWidth }) => ($fullWidth ? "none" : "1280px")};
  position: absolute;
  top: ${({ $contentTop }) => `${$contentTop}px`};
  transform: translateX(-50%);
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "calc(100% - var(--space-16))")};
`;
