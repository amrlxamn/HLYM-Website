import styled from "styled-components";

export const SupportAdminDetail = styled.section`
  background: var(--color-neutral-900);
  border-top: 2px solid var(--color-brand-500);
  min-width: 0;
  padding: clamp(24px, 4vw, 40px);
`;

export const SupportAdminDetailHeader = styled.header`
  align-items: start;
  display: flex;
  gap: var(--space-5);
  justify-content: space-between;

  span {
    color: var(--color-brand-400);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
  }

  h2 {
    font-size: clamp(28px, 4vw, 42px);
    letter-spacing: -0.035em;
    margin: var(--space-2) 0 0;
  }
`;

export const SupportAdminConversation = styled.div`
  display: grid;
  gap: var(--space-3);
  margin: var(--space-8) 0;
  max-height: 480px;
  overflow-y: auto;
`;

export const SupportAdminMessage = styled.article<{ $internal: boolean }>`
  background: ${({ $internal }) => ($internal ? "var(--alpha-brand-08)" : "var(--alpha-white-04)")};
  border-left: 2px solid
    ${({ $internal }) => ($internal ? "var(--color-brand-500)" : "var(--alpha-white-20)")};
  padding: var(--space-4);

  header {
    align-items: baseline;
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
  }

  header span,
  time {
    color: var(--color-text-muted-dark);
    font-size: var(--font-size-xs);
  }

  time {
    margin-left: auto;
  }

  p {
    color: var(--color-text-readable-dark);
    line-height: 1.6;
    margin: var(--space-3) 0 0;
    white-space: pre-wrap;
  }
`;

export const SupportAdminTicketControls = styled.div`
  border-top: 1px solid var(--alpha-white-12);
  display: grid;
  gap: var(--space-6);
  grid-template-columns: minmax(0, 1fr) minmax(180px, 0.5fr);
  padding-top: var(--space-6);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const SupportAdminControlForm = styled.form`
  align-content: start;
  display: grid;
  gap: var(--space-3);

  label {
    font-weight: var(--font-weight-bold);
  }

  select,
  textarea {
    background: var(--color-neutral-950);
    border: 1px solid var(--alpha-white-20);
    color: var(--color-text-inverse);
    font: inherit;
    padding: var(--space-3);
  }

  select:focus,
  textarea:focus {
    border-color: var(--color-brand-500);
    box-shadow: var(--shadow-focus);
    outline: 0;
  }

  textarea {
    resize: vertical;
  }

  > span {
    color: var(--color-text-readable-dark);
    font-size: var(--font-size-sm);
    min-height: 20px;
  }

  button {
    justify-self: start;
  }
`;
