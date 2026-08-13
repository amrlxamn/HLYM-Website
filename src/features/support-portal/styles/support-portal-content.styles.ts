import styled from "styled-components";

export const SupportActions = styled.section`
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 var(--space-6);
  transform: translateY(-36px);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const SupportAction = styled.article`
  background: var(--color-neutral-900);
  color: var(--color-text-inverse);
  min-height: 290px;
  padding: clamp(28px, 4vw, 48px);

  > span {
    color: var(--color-brand-400);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
  }

  h2 {
    font-size: clamp(28px, 3vw, 40px);
    margin: var(--space-4) 0;
  }

  p {
    color: var(--color-text-readable-dark);
    line-height: 1.6;
    margin: 0 0 var(--space-6);
    max-width: 440px;
  }
`;

export const SupportFaq = styled.section`
  margin: 0 auto;
  max-width: 1120px;
  padding: var(--space-12) var(--space-6) clamp(80px, 10vw, 144px);
`;

export const SupportFaqHeader = styled.header`
  margin-bottom: var(--space-8);

  h2 {
    font-size: clamp(34px, 5vw, 58px);
    letter-spacing: -0.035em;
    margin: 0;
  }

  p {
    color: var(--color-neutral-600);
    margin: var(--space-3) 0 0;
  }
`;
