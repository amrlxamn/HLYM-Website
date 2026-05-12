import { motion } from "framer-motion";
import styled from "styled-components";
import type { CursorTone } from "./get-cursor-tone";

type CustomCursorToneProps = {
  $hasLabel: boolean;
  $tone: CursorTone;
};

export const CustomCursorRoot = styled(motion.div)<CustomCursorToneProps>`
  height: 34px;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  will-change: transform, opacity;
  width: 34px;
  z-index: 9999;

  @media (hover: none), (pointer: coarse) {
    display: none;
  }
`;

export const CustomCursorRing = styled.span<CustomCursorToneProps>`
  align-items: center;
  border: 1px solid
    ${({ $tone }) =>
      $tone === "light" ? "var(--color-text-primary)" : "var(--color-text-inverse)"};
  border-radius: 999px;
  color: ${({ $tone }) =>
    $tone === "light" ? "var(--color-text-primary)" : "var(--color-text-inverse)"};
  display: inline-flex;
  height: 34px;
  justify-content: center;
  mix-blend-mode: ${({ $tone }) => ($tone === "auto" ? "difference" : "normal")};
  width: 34px;

  svg {
    height: 14px;
    opacity: ${({ $hasLabel }) => ($hasLabel ? 1 : 0)};
    width: 14px;
  }
`;

export const CustomCursorHint = styled.span<CustomCursorToneProps>`
  align-items: center;
  color: ${({ $tone }) =>
    $tone === "light" ? "var(--color-text-primary)" : "var(--color-text-inverse)"};
  display: inline-flex;
  font-size: 11px;
  font-weight: 800;
  gap: 6px;
  left: 44px;
  letter-spacing: 0;
  line-height: 1;
  mix-blend-mode: ${({ $tone }) => ($tone === "auto" ? "difference" : "normal")};
  opacity: ${({ $hasLabel }) => ($hasLabel ? 1 : 0)};
  position: absolute;
  text-transform: uppercase;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 160ms var(--easing-standard);
  white-space: nowrap;
`;
