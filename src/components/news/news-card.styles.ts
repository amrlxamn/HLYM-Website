import styled from "styled-components";

export const NewsCardRoot = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const NewsCardMedia = styled.div`
  aspect-ratio: 4 / 3;
  background: var(--color-border-subtle);
  overflow: hidden;
`;

export const NewsCardImage = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-base) var(--easing-out);
  width: 100%;

  @media (hover: hover) and (pointer: fine) {
    ${NewsCardRoot}:hover & {
      transform: scale(1.02);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const NewsCardBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 280px;
  padding: var(--space-8) var(--space-2) 0;

  @media (max-width: 720px) {
    min-height: 250px;
    padding-top: var(--space-6);
  }
`;

export const NewsCardMeta = styled.p`
  align-items: center;
  color: var(--color-text-subtle);
  display: flex;
  font-size: 10px;
  font-weight: var(--font-weight-light);
  gap: var(--space-3);
  letter-spacing: var(--tracking-wider);
  margin: 0;
  text-transform: uppercase;
`;

export const NewsCardMetaDivider = styled.span`
  color: var(--color-brand-500);
`;

export const NewsCardTitle = styled.h3`
  color: var(--color-text-primary);
  font-size: 22px;
  font-weight: var(--font-weight-bold);
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: var(--space-3) 0 0;
  text-transform: uppercase;
  text-wrap: balance;

  @media (max-width: 1200px) {
    font-size: 20px;
  }
`;

export const NewsCardDescription = styled.p`
  color: var(--color-text-subtle);
  font-size: var(--font-size-description);
  line-height: 1.55;
  margin: var(--space-5) 0 0;
  text-wrap: pretty;
`;

export const NewsCardAction = styled.div`
  margin-top: auto;
  padding-top: var(--space-8);
`;
