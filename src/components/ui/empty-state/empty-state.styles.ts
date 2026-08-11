import styled from "styled-components";

export const EmptyStateRoot = styled.div`
  align-items: center;
  border: 1px dashed var(--alpha-white-20);
  border-radius: var(--radius-none);
  display: flex;
  flex-direction: column;
  padding: var(--space-12) var(--space-6);
  text-align: center;
`;

export const EmptyStateIcon = styled.div`
  align-items: center;
  background: var(--alpha-brand-12);
  border-radius: var(--radius-none);
  color: var(--color-brand-400);
  display: flex;
  height: 48px;
  justify-content: center;
  margin-bottom: var(--space-4);
  width: 48px;
`;

export const EmptyStateTitle = styled.h3`
  font-size: var(--font-size-xl);
  letter-spacing: var(--tracking-tight);
  margin: 0 0 var(--space-2);
`;

export const EmptyStateDescription = styled.p`
  color: var(--color-text-readable-dark);
  font-size: var(--font-size-md);
  line-height: var(--leading-relaxed);
  margin: 0 0 var(--space-5);
  max-width: 420px;
`;
