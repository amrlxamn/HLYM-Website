import styled from "styled-components";

export const SupportAdminPageRoot = styled.div`
  background: var(--color-neutral-950);
  color: var(--color-text-inverse);
  min-height: 100vh;

  main {
    display: grid;
    min-height: calc(100vh - 120px);
    padding: var(--space-8) var(--space-6);
    place-items: start center;
  }
`;

export const SupportAdminHeader = styled.header`
  align-items: end;
  display: flex;
  justify-content: space-between;
  margin: 0 auto var(--space-8);
  max-width: 1180px;
  width: 100%;

  span {
    color: var(--color-brand-400);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
  }

  h1 {
    font-size: clamp(40px, 6vw, 68px);
    letter-spacing: -0.045em;
    margin: var(--space-2) 0;
  }

  p {
    color: var(--color-text-readable-dark);
    margin: 0;
  }
`;

export const SupportAdminWorkspace = styled.div`
  display: grid;
  gap: var(--space-8);
  grid-template-columns: minmax(360px, 0.75fr) minmax(0, 1.25fr);
  margin: 0 auto;
  max-width: 1180px;
  width: 100%;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;
