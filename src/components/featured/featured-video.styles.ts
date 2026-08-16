import { motion } from "framer-motion";
import styled from "styled-components";

export const FeaturedVideoRoot = styled.section`
  background: var(--color-bg-primary);
  height: calc(70vh + 2000px);
  overflow: clip;
  padding-top: 70vh;
  position: relative;

  @media (max-width: 980px) {
    height: calc(52vh + 1600px);
    padding-top: 52vh;
  }

  @media (max-width: 640px) {
    height: calc(40vh + 1200px);
    padding-top: 40vh;
  }
`;

export const FeaturedVideoSticky = styled.div`
  align-items: center;
  display: flex;
  height: 100dvh;
  justify-content: center;
  position: sticky;
  top: 0;
`;

export const FeaturedVideoFrame = styled(motion.div)`
  aspect-ratio: 16 / 9;
  background: var(--color-bg-primary);
  height: 100dvh;
  min-width: 100vw;
  overflow: hidden;
  position: relative;
  transform-origin: center;
  will-change: transform;
  z-index: 1;

  video {
    height: 100%;
    inset: 0;
    object-fit: cover;
    position: absolute;
    width: 100%;
  }
`;
