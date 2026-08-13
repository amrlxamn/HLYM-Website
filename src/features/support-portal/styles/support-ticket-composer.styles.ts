import styled from "styled-components";

export const SupportComposer = styled.form`
  border-top: 1px solid var(--alpha-white-12);
  display: grid;
  gap: var(--space-3);
  padding-top: var(--space-6);

  label {
    font-weight: var(--font-weight-bold);
  }

  textarea {
    background: var(--color-neutral-900);
    border: 1px solid var(--alpha-white-20);
    color: var(--color-text-inverse);
    font: inherit;
    padding: var(--space-4);
    resize: vertical;

    &:focus {
      border-color: var(--color-brand-500);
      box-shadow: var(--shadow-focus);
      outline: 0;
    }
  }

  input[type="file"] {
    border: 1px dashed var(--alpha-white-20);
    color: var(--color-text-readable-dark);
    min-height: 48px;
    padding: var(--space-3);
  }

  > span {
    color: var(--color-text-muted-dark);
    font-size: var(--font-size-sm);
    min-height: 20px;
  }

  button {
    justify-self: end;
  }
`;
