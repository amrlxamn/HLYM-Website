import styled from "styled-components";

export const MegaProductStage = styled.div`
  border-top: 1px solid var(--color-border-muted);
  display: grid;
  grid-template-columns: minmax(720px, 1fr) minmax(320px, 480px);
  min-height: 0;
`;

export const MegaProductPreview = styled.div`
  align-items: center;
  display: grid;
  gap: var(--space-2);
  grid-template-rows: minmax(0, 1fr) auto;
  justify-content: center;
  min-width: 0;
  padding: var(--space-3) var(--space-8) var(--space-6);
`;

export const MegaProductImage = styled.img`
  height: 100%;
  min-height: 0;
  object-fit: contain;
  width: 100%;
`;
