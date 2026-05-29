import { motion } from "framer-motion";
import styled from "styled-components";

export const SplashOverlay = styled(motion.div)`
  align-items: center;
  background: #0a0a0a;
  display: flex;
  height: 100vh;
  height: 100dvh;
  inset: 0;
  justify-content: center;
  position: fixed;
  z-index: 9999;
`;

export const SplashContent = styled(motion.div)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 28px;
  user-select: none;
`;

export const SplashLogo = styled(motion.img)`
  filter: brightness(0) invert(1);
  height: 36px;
  width: auto;

  @media (max-width: 640px) {
    height: 28px;
  }
`;

/**
 * The red accent line beneath the logo.
 * Draws from center outward via scaleX, like a
 * tachometer needle sweeping — or a tuning fork struck.
 */
export const SplashRedLine = styled(motion.div)`
  background: var(--red);
  height: 2px;
  width: 120px;

  @media (max-width: 640px) {
    width: 80px;
  }
`;
