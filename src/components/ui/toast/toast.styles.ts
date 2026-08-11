import styled, { css } from "styled-components";

export type ToastVariant = "default" | "success" | "error" | "info";

export const ToastRoot = styled.div<{ $variant: ToastVariant }>`
  align-items: flex-start;
  background: var(--color-neutral-900);
  border: 1px solid var(--alpha-white-12);
  border-left: 3px solid var(--color-neutral-500);
  border-radius: var(--radius-none);
  box-shadow: var(--shadow-lg);
  display: flex;
  gap: var(--space-3);
  max-width: 380px;
  padding: var(--space-4);
  width: 100%;

  ${({ $variant }) => {
    if ($variant === "success")
      return css`
        border-left-color: var(--color-success);
      `;
    if ($variant === "error")
      return css`
        border-left-color: var(--color-error);
      `;
    if ($variant === "info")
      return css`
        border-left-color: var(--color-info);
      `;
    return "";
  }}
`;

export const ToastCopy = styled.div`
  flex: 1;
`;

export const ToastTitle = styled.strong`
  color: var(--color-text-inverse);
  display: block;
  font-size: var(--font-size-md);
  margin-bottom: var(--space-1);
`;

export const ToastMessage = styled.p`
  color: var(--color-text-readable-dark);
  font-size: var(--font-size-base);
  line-height: var(--leading-normal);
  margin: 0;
`;

export const ToastClose = styled.button`
  color: var(--color-text-muted-dark);
  padding: var(--space-1);

  &:hover {
    color: var(--color-text-inverse);
  }
`;
