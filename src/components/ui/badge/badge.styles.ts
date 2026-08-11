import styled, { css } from "styled-components";

export type BadgeVariant = "default" | "accent" | "outline" | "success";

export const BadgeRoot = styled.span<{ $variant: BadgeVariant }>`
  align-items: center;
  border: 1px solid transparent;
  border-radius: var(--radius-none);
  display: inline-flex;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  gap: var(--space-1);
  letter-spacing: var(--tracking-wide);
  line-height: 1;
  padding: 6px var(--space-3);
  text-transform: uppercase;

  ${({ $variant }) => {
    if ($variant === "accent") {
      return css`
        background: var(--alpha-brand-12);
        border-color: var(--alpha-brand-20);
        color: var(--color-brand-400);
      `;
    }

    if ($variant === "outline") {
      return css`
        border-color: var(--alpha-white-20);
        color: var(--color-text-readable-dark);
      `;
    }

    if ($variant === "success") {
      return css`
        background: color-mix(in srgb, var(--color-success) 12%, transparent);
        border-color: color-mix(in srgb, var(--color-success) 24%, transparent);
        color: #65c98d;
      `;
    }

    return css`
      background: var(--alpha-white-08);
      color: var(--color-text-readable-dark);
    `;
  }}
`;
