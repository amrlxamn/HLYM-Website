import styled, { css } from "styled-components";

export const FieldRoot = styled.div`
  display: grid;
  gap: var(--space-2);
  width: 100%;
`;

export const FieldLabel = styled.label`
  color: var(--color-text-inverse);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
`;

export const FieldControlStyles = css<{ $invalid: boolean }>`
  background: var(--color-neutral-900);
  border: 1px solid ${({ $invalid }) => ($invalid ? "var(--color-error)" : "var(--alpha-white-12)")};
  border-radius: var(--radius-none);
  color: var(--color-text-inverse);
  font-size: var(--font-size-md);
  min-height: 44px;
  padding: var(--space-3) var(--space-4);
  transition:
    border-color var(--duration-press) var(--easing-out),
    box-shadow var(--duration-press) var(--easing-out);
  width: 100%;

  &::placeholder {
    color: var(--color-neutral-500);
  }

  &:focus {
    border-color: var(--color-brand-500);
    box-shadow: var(--shadow-focus);
    outline: 0;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const InputControl = styled.input<{ $invalid: boolean }>`
  ${FieldControlStyles}
`;

export const TextareaControl = styled.textarea<{ $invalid: boolean }>`
  ${FieldControlStyles}
  min-height: 120px;
  resize: vertical;
`;

export const SelectControl = styled.select<{ $invalid: boolean }>`
  ${FieldControlStyles}
`;

export const FieldHint = styled.span<{ $invalid: boolean }>`
  color: ${({ $invalid }) => ($invalid ? "var(--color-error)" : "var(--color-text-muted-dark)")};
  font-size: var(--font-size-sm);
  line-height: var(--leading-normal);
`;
