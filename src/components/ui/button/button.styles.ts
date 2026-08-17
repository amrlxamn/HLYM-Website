import styled, { css } from "styled-components";
import { BUTTON_INTERACTION_STYLES } from "./button-interaction.styles";
import { BUTTON_VARIANT_STYLES } from "./button-variants.styles";

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonVariant = "light" | "primary" | "related" | "secondary";

export const ButtonRoot = styled.button<{
  $fullWidth: boolean;
  $icon: "left" | "none" | "right";
  $size: ButtonSize;
  $variant: ButtonVariant;
}>`
  align-items: center;
  color: var(--button-color);
  display: inline-grid;
  flex-shrink: 0;
  font-weight: var(--font-weight-bold);
  gap: var(--space-4);
  grid-template-columns: ${({ $icon }) =>
    $icon === "left" ? "auto 1fr" : $icon === "right" ? "1fr auto" : "1fr"};
  letter-spacing: var(--tracking-widest);
  line-height: var(--leading-none, 1);
  padding: 0 0 var(--space-3);
  position: relative;
  text-align: left;
  text-transform: uppercase;
  transition:
    color var(--duration-press) var(--easing-out),
    transform var(--duration-press) var(--easing-out);
  width: ${({ $fullWidth }) => {
    if ($fullWidth) {
      return "100%";
    }

    return "auto";
  }};

  ${BUTTON_INTERACTION_STYLES}

  > svg {
    color: var(--button-arrow);
    flex: none;
    transition: transform var(--duration-press) var(--easing-out);
  }

  ${({ $size }) => {
    if ($size === "sm") {
      return css`
        font-size: 11px;
        gap: var(--space-2);
        min-height: 32px;

        > svg {
          height: 14px;
          width: 14px;
        }
      `;
    }

    if ($size === "lg") {
      return css`
        font-size: var(--font-size-md);
        min-height: 48px;

        > svg {
          height: 24px;
          width: 24px;
        }
      `;
    }

    return css`
      font-size: 12px;
      min-height: 40px;

      > svg {
        height: 20px;
        width: 20px;
      }
    `;
  }}

  ${({ $variant }) => BUTTON_VARIANT_STYLES[$variant]}

  ${({ $icon }) =>
    $icon === "left"
      ? css`
          &:hover:not(:disabled)::before {
            left: calc(-1 * var(--button-rule-slide, var(--space-1)));
          }
        `
      : null}

  &:hover:not(:disabled) > svg {
    transform: translateX(
      ${({ $icon }) => ($icon === "left" ? "calc(-1 * var(--space-1))" : "var(--space-1)")}
    );
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }
`;
