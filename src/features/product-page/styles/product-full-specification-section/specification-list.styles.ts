import { motion } from "framer-motion";
import styled from "styled-components";

export const ProductFullSpecificationList = styled(motion.div)`
  display: grid;
  gap: 24px;
  min-width: 0;
  padding-bottom: clamp(156px, 20vh, 220px);
  padding-top: clamp(132px, 18vh, 176px);
  will-change: transform;

  @media (max-width: 1080px) {
    padding-bottom: 0;
    padding-top: 0;
    transform: none !important;
  }
`;

export const ProductFullSpecificationListViewport = styled.div`
  height: min(460px, calc(100vh - var(--header-height-total) - 220px));
  min-height: 360px;
  mask-image: linear-gradient(
    180deg,
    transparent 0,
    #000 96px,
    #000 calc(100% - 112px),
    transparent 100%
  );
  mask-size: 100% 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  -webkit-mask-image: linear-gradient(
    180deg,
    transparent 0,
    #000 96px,
    #000 calc(100% - 112px),
    transparent 100%
  );
  -webkit-mask-size: 100% 100%;

  @media (max-width: 1080px) {
    height: auto;
    mask-image: none;
    max-height: none;
    min-height: 0;
    overflow: visible;
    -webkit-mask-image: none;
  }
`;
