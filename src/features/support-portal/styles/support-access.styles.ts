import styled from "styled-components";

export const SupportAccessPageRoot = styled.div`
  background: var(--color-neutral-950);
  color: var(--color-text-inverse);
  min-height: 100vh;

  main {
    display: grid;
    min-height: 720px;
    padding: clamp(64px, 9vw, 120px) var(--space-6);
    place-items: center;
  }
`;

export const SupportAccessCard = styled.section`
  border-left: 2px solid var(--color-brand-500);
  max-width: 620px;
  padding: var(--space-4) 0 var(--space-4) clamp(28px, 5vw, 56px);
  width: 100%;

  > a {
    align-items: center;
    color: var(--color-text-readable-dark);
    display: inline-flex;
    font-size: var(--font-size-sm);
    gap: var(--space-2);
    margin-bottom: var(--space-12);
  }

  > svg,
  > span {
    color: var(--color-brand-500);
  }

  > span {
    display: block;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    margin-top: var(--space-4);
    text-transform: uppercase;
  }

  h1 {
    font-size: clamp(40px, 6vw, 64px);
    letter-spacing: -0.04em;
    line-height: 1;
    margin: var(--space-4) 0;
  }

  > p {
    color: var(--color-text-readable-dark);
    line-height: 1.6;
    margin: 0 0 var(--space-8);
  }
`;

export const SupportAccessForm = styled.form`
  display: grid;
  gap: var(--space-3);

  label {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    margin-top: var(--space-2);
  }
`;

export const SupportAccessInput = styled.input`
  background: var(--color-neutral-900);
  border: 1px solid var(--alpha-white-20);
  color: var(--color-text-inverse);
  font-size: var(--font-size-md);
  min-height: 48px;
  padding: var(--space-3) var(--space-4);

  &:focus {
    border-color: var(--color-brand-500);
    box-shadow: var(--shadow-focus);
    outline: 0;
  }
`;

export const SupportAccessStatus = styled.p<{ $error: boolean }>`
  color: ${({ $error }) => ($error ? "var(--color-error)" : "var(--color-success)")};
  min-height: 24px;
`;
