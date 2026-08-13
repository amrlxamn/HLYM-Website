import styled from "styled-components";

export const SupportPageRoot = styled.div`
  background: var(--color-neutral-50);
  color: var(--color-neutral-950);
  min-height: 100vh;
`;

export const SupportHero = styled.section`
  background: var(--color-neutral-950);
  color: var(--color-text-inverse);
  padding: clamp(72px, 9vw, 132px) var(--space-6) clamp(64px, 8vw, 108px);
`;

export const SupportContent = styled.div`
  margin: 0 auto;
  max-width: 1120px;
`;

export const SupportEyebrow = styled.span`
  color: var(--color-brand-500);
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.08em;
  margin-bottom: var(--space-4);
  text-transform: uppercase;
`;

export const SupportHeroTitle = styled.h1`
  font-size: clamp(48px, 7vw, 88px);
  letter-spacing: -0.045em;
  line-height: 0.96;
  margin: 0;
  max-width: 820px;
`;

export const SupportHeroCopy = styled.p`
  color: var(--color-text-readable-dark);
  font-size: clamp(17px, 2vw, 21px);
  line-height: 1.55;
  margin: var(--space-6) 0 var(--space-8);
  max-width: 660px;
`;

export const SupportSearch = styled.div`
  align-items: center;
  background: var(--color-neutral-900);
  border: 1px solid var(--alpha-white-20);
  display: flex;
  gap: var(--space-3);
  max-width: 760px;
  padding: 0 var(--space-4);

  &:focus-within {
    border-color: var(--color-brand-500);
    box-shadow: var(--shadow-focus);
  }
`;

export const SupportSearchInput = styled.input`
  background: transparent;
  border: 0;
  color: var(--color-text-inverse);
  font-size: var(--font-size-lg);
  min-height: 56px;
  outline: 0;
  width: 100%;
`;

export const SupportCategoryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-4);
`;

export const SupportCategory = styled.button`
  align-items: center;
  background: var(--alpha-white-04);
  border: 1px solid var(--alpha-white-12);
  color: var(--color-text-readable-dark);
  display: inline-flex;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  gap: var(--space-2);
  min-height: 44px;
  padding: var(--space-2) var(--space-4);

  &:hover,
  &:focus-visible {
    border-color: var(--color-brand-500);
    color: var(--color-text-inverse);
  }
`;

export const SupportCategoryIcon = styled.span`
  color: var(--color-brand-500);
  display: inline-flex;
`;
