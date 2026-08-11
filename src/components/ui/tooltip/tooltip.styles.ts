import styled from "styled-components";

export const TooltipRoot = styled.span`
  display: inline-flex;
  position: relative;

  &:hover > [role="tooltip"],
  &:focus-within > [role="tooltip"] {
    opacity: 1;
    pointer-events: auto;
    transform: translate(-50%, 0) scale(1);
  }
`;

export const TooltipBubble = styled.span<{ $placement: "top" | "bottom" }>`
  background: var(--color-neutral-800);
  border: 1px solid var(--alpha-white-12);
  border-radius: var(--radius-none);
  box-shadow: var(--shadow-sm);
  color: var(--color-text-inverse);
  font-size: var(--font-size-sm);
  left: 50%;
  max-width: 220px;
  opacity: 0;
  padding: var(--space-2) var(--space-3);
  pointer-events: none;
  position: absolute;
  ${({ $placement }) =>
    $placement === "top" ? "bottom: calc(100% + 8px);" : "top: calc(100% + 8px);"}
  transform: translate(-50%, ${({ $placement }) => ($placement === "top" ? "4px" : "-4px")})
    scale(0.97);
  transform-origin: ${({ $placement }) => ($placement === "top" ? "bottom center" : "top center")};
  transition:
    opacity var(--duration-fast) var(--easing-out),
    transform var(--duration-fast) var(--easing-out);
  white-space: normal;
  width: max-content;
  z-index: var(--z-dropdown);
`;
