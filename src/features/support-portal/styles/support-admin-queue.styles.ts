import styled from "styled-components";

export const SupportAdminQueueList = styled.section`
  border-top: 1px solid var(--alpha-white-20);
  min-width: 0;
`;

export const SupportAdminQueueHeader = styled.div`
  align-items: center;
  color: var(--color-text-muted-dark);
  display: flex;
  font-size: var(--font-size-sm);
  gap: var(--space-2);
  padding: var(--space-4) 0;
`;

export const SupportTicketRow = styled.button<{ $selected: boolean }>`
  align-items: start;
  background: ${({ $selected }) => ($selected ? "var(--alpha-brand-08)" : "var(--alpha-white-04)")};
  border: 0;
  border-left: 2px solid
    ${({ $selected }) => ($selected ? "var(--color-brand-500)" : "transparent")};
  border-top: 1px solid var(--alpha-white-12);
  color: var(--color-text-inverse);
  cursor: pointer;
  display: grid;
  font: inherit;
  gap: var(--space-2);
  min-height: 112px;
  padding: var(--space-4);
  text-align: left;
  width: 100%;

  > span,
  time {
    color: var(--color-text-readable-dark);
    font-size: var(--font-size-sm);
  }

  &:hover,
  &:focus-visible {
    background: var(--alpha-white-08);
    outline: 1px solid var(--color-brand-500);
    outline-offset: -1px;
  }
`;
