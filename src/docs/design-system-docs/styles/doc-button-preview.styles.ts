import styled from "styled-components";

export const ButtonPreviewGrid = styled.div`
  display: grid;
  gap: var(--space-6);
  padding-block: var(--space-3);
  width: min(100%, 620px);
`;

export const ButtonPreviewRow = styled.div`
  align-items: end;
  display: grid;
  gap: var(--space-4);
  grid-template-columns: 88px minmax(0, 1fr);

  @media (max-width: 520px) {
    align-items: stretch;
    grid-template-columns: 1fr;
  }
`;

export const ButtonPreviewLabel = styled.span`
  color: var(--color-text-soft-dark);
  font-size: 10px;
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-widest);
  padding-bottom: var(--space-3);
  text-transform: uppercase;
`;
