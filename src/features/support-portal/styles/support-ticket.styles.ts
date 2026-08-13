import styled from "styled-components";

export const SupportTicketPageRoot = styled.div`
  background: var(--color-neutral-950);
  color: var(--color-text-inverse);
  min-height: 100vh;

  > main {
    margin: 0 auto;
    max-width: 1180px;
    min-height: 760px;
    padding: clamp(56px, 8vw, 104px) var(--space-6);
  }
`;

export const SupportTicketMain = styled.div`
  display: grid;
  gap: var(--space-10);
  grid-template-columns: minmax(0, 1fr) 280px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const SupportTicketHeader = styled.header`
  border-bottom: 1px solid var(--alpha-white-12);
  padding-bottom: var(--space-8);

  a {
    align-items: center;
    color: var(--color-text-readable-dark);
    display: inline-flex;
    font-size: var(--font-size-sm);
    gap: var(--space-2);
    margin-bottom: var(--space-8);
  }

  > span {
    color: var(--color-brand-400);
    display: block;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    letter-spacing: 0.06em;
  }

  h1 {
    font-size: clamp(32px, 5vw, 54px);
    letter-spacing: -0.035em;
    margin: var(--space-3) 0 var(--space-5);
  }
`;

export const SupportConversation = styled.div`
  display: grid;
  gap: var(--space-4);
  padding: var(--space-8) 0;
`;

export const SupportMessage = styled.article<{ $staff: boolean }>`
  background: ${({ $staff }) => ($staff ? "var(--alpha-brand-08)" : "var(--alpha-white-04)")};
  border-left: 2px solid
    ${({ $staff }) => ($staff ? "var(--color-brand-500)" : "var(--alpha-white-20)")};
  justify-self: ${({ $staff }) => ($staff ? "start" : "end")};
  max-width: 84%;
  padding: var(--space-5);

  header {
    align-items: baseline;
    display: flex;
    gap: var(--space-3);
    justify-content: space-between;
  }

  time {
    color: var(--color-text-muted-dark);
    font-size: var(--font-size-xs);
  }

  p {
    color: var(--color-text-readable-dark);
    line-height: 1.6;
    margin: var(--space-3) 0 0;
    white-space: pre-wrap;
  }
`;

export const SupportTicketSidebar = styled.aside`
  border-top: 2px solid var(--color-brand-500);
  height: fit-content;
  padding-top: var(--space-5);

  > span {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
  }

  dl {
    display: grid;
    gap: var(--space-2);
    grid-template-columns: 1fr 1fr;
    margin-top: var(--space-6);
  }

  dt {
    color: var(--color-text-muted-dark);
  }

  dd {
    margin: 0;
    text-align: right;
  }
`;
