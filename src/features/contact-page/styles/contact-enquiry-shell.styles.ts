import { motion } from "framer-motion";
import styled from "styled-components";

export const ContactEnquiryOverlay = styled(motion.div)`
  background: rgba(5, 5, 8, 0.64);
  inset: 0;
  position: fixed;
  z-index: 1000;
`;

export const ContactEnquiryPanelRoot = styled(motion.aside)`
  background: var(--color-bg-canvas);
  border-left: 1px solid var(--color-border-muted);
  box-shadow: -18px 0 42px -34px rgba(0, 0, 0, 0.52);
  color: var(--color-text-primary);
  display: grid;
  grid-template-rows: 65px auto 1fr;
  height: 100dvh;
  max-width: min(500px, 100vw);
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1001;

  @media (max-width: 640px) {
    border-left: 0;
    max-width: 100vw;
  }
`;

export const ContactEnquiryCloseRail = styled.div`
  align-items: center;
  border-bottom: 1px solid var(--color-border-muted);
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
`;

export const ContactEnquiryHeaderRoot = styled.header`
  padding: 28px 32px 24px;

  @media (max-width: 640px) {
    padding: 24px 22px 22px;
  }
`;

export const ContactEnquiryTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.18;
  margin: 0;
  text-transform: uppercase;
`;

export const ContactEnquiryDescription = styled.p`
  color: var(--color-text-dim);
  font-size: 14px;
  line-height: 1.5;
  margin: 10px 0 0;
`;

export const ContactEnquiryCloseButton = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  color: var(--color-text-primary);
  display: inline-flex;
  height: 44px;
  justify-content: center;
  padding: 0;
  transition:
    color var(--duration-base) var(--easing-standard),
    transform var(--duration-base) var(--easing-standard);
  width: 44px;

  &:hover {
    color: var(--red);
  }

  &:active {
    transform: scale(0.96);
  }

  svg {
    height: 20px;
    width: 20px;
  }
`;
