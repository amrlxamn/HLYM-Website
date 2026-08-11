import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalOverlay = styled(motion.div)`
  align-items: center;
  background: rgba(10, 10, 10, 0.82);
  display: flex;
  inset: 0;
  justify-content: center;
  padding: var(--space-4);
  position: fixed;
  z-index: var(--z-overlay);
`;

export const ModalPanel = styled(motion.div)<{ $size: "sm" | "md" | "lg" }>`
  background: var(--color-neutral-900);
  border: 1px solid var(--alpha-white-12);
  border-radius: var(--radius-none);
  box-shadow: var(--shadow-xl);
  max-height: calc(100dvh - var(--space-8));
  max-width: ${({ $size }) => {
    if ($size === "sm") return "420px";
    if ($size === "lg") return "760px";
    return "560px";
  }};
  overflow: auto;
  padding: var(--space-6);
  position: relative;
  width: 100%;
  z-index: var(--z-modal);
`;

export const ModalHeader = styled.header`
  align-items: flex-start;
  display: flex;
  gap: var(--space-4);
  justify-content: space-between;
  margin-bottom: var(--space-4);
`;

export const ModalTitle = styled.h2`
  font-size: var(--font-size-2xl);
  letter-spacing: var(--tracking-tight);
  line-height: var(--leading-snug);
  margin: 0;
`;

export const ModalClose = styled.button`
  align-items: center;
  border-radius: var(--radius-none);
  color: var(--color-text-muted-dark);
  display: inline-flex;
  flex-shrink: 0;
  height: 32px;
  justify-content: center;
  transition:
    background var(--duration-press) var(--easing-out),
    color var(--duration-press) var(--easing-out),
    transform var(--duration-press) var(--easing-out);
  width: 32px;

  &:hover {
    background: var(--alpha-white-08);
    color: var(--color-text-inverse);
  }

  &:active {
    transform: scale(0.94);
  }
`;
