import { css } from "styled-components";

export const BUTTON_VARIANT_STYLES = {
  light: css`
    --button-arrow: var(--color-brand-500);
    --button-color: var(--color-text-primary);
    --button-rule: var(--color-border-subtle);
  `,
  primary: css`
    --button-arrow: var(--color-brand-500);
    --button-color: var(--color-text-inverse);
    --button-rule: var(--color-text-inverse);
  `,
  related: css`
    --button-arrow: var(--color-brand-500);
    --button-color: var(--color-text-readable-dark);
    --button-rule: var(--alpha-white-20);
    --button-rule-slide: 0;
    gap: var(--space-3);
    letter-spacing: var(--tracking-wider);
    min-width: 160px;
  `,
  secondary: css`
    --button-arrow: var(--color-text-readable-dark);
    --button-color: var(--color-text-inverse);
    --button-rule: var(--alpha-white-40);
  `
} as const;
