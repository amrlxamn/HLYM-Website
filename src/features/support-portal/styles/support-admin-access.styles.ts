import styled from "styled-components";

export const SupportAdminPanel = styled.section`
  background: var(--color-neutral-900);
  border-top: 3px solid var(--color-brand-500);
  box-shadow: var(--shadow-xl);
  margin: auto;
  max-width: 540px;
  padding: clamp(32px, 6vw, 56px);
  width: 100%;

  > svg,
  > span {
    color: var(--color-brand-400);
  }

  > span {
    display: block;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    margin-top: var(--space-4);
    text-transform: uppercase;
  }

  h1 {
    font-size: clamp(38px, 6vw, 58px);
    letter-spacing: -0.04em;
    margin: var(--space-3) 0;
  }

  > p {
    color: var(--color-text-readable-dark);
    line-height: 1.6;
    margin: 0 0 var(--space-8);
  }
`;

export const SupportAdminForm = styled.form`
  display: grid;
  gap: var(--space-3);

  label {
    font-weight: var(--font-weight-bold);
  }

  input {
    background: var(--color-neutral-950);
    border: 1px solid var(--alpha-white-20);
    color: var(--color-text-inverse);
    font: inherit;
    min-height: 48px;
    padding: var(--space-3) var(--space-4);

    &:focus {
      border-color: var(--color-brand-500);
      box-shadow: var(--shadow-focus);
      outline: 0;
    }
  }
`;

export const SupportAdminStatus = styled.p<{ $error: boolean }>`
  color: ${({ $error }) => ($error ? "var(--color-error)" : "var(--color-success)")};
  min-height: 24px;
`;
