import styled, { css } from "styled-components";

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonVariant = "primary" | "ghost" | "outline";

export const ButtonRoot = styled.button<{
  $fullWidth: boolean;
  $size: ButtonSize;
  $variant: ButtonVariant;
}>`
  align-items: center;
  border: 1px solid transparent;
  border-radius: var(--radius-none);
  display: inline-flex;
  font-weight: var(--font-weight-bold);
  gap: var(--space-2);
  justify-content: center;
  line-height: var(--leading-none, 1);
  transition:
    background-color var(--duration-press) var(--easing-out),
    border-color var(--duration-press) var(--easing-out),
    color var(--duration-press) var(--easing-out),
    transform var(--duration-press) var(--easing-out);
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  ${({ $size }) => {
    if ($size === "sm") {
      return css`
        font-size: var(--font-size-sm);
        min-height: 32px;
        padding: var(--space-2) var(--space-3);
      `;
    }

    if ($size === "lg") {
      return css`
        font-size: var(--font-size-lg);
        min-height: 48px;
        padding: var(--space-3) var(--space-6);
      `;
    }

    return css`
      font-size: var(--font-size-md);
      min-height: 40px;
      padding: var(--space-2) var(--space-5);
    `;
  }}

  ${({ $variant }) => {
    if ($variant === "outline") {
      return css`
        border-color: var(--alpha-white-20);
        color: var(--color-text-inverse);

        &:hover:not(:disabled) {
          border-color: var(--color-brand-500);
        }
      `;
    }

    if ($variant === "ghost") {
      return css`
        color: var(--color-text-readable-dark);

        &:hover:not(:disabled) {
          background: var(--alpha-white-08);
          color: var(--color-text-inverse);
        }
      `;
    }

    return css`
      background: var(--color-brand-500);
      color: var(--color-text-inverse);

      &:hover:not(:disabled) {
        background: var(--color-brand-600);
      }
    `;
  }}

  &:active:not(:disabled) {
    transform: scale(0.97);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }
`;
