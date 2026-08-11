import styled from "styled-components";

export const HeroRoot = styled.section`
  border-bottom: 1px solid var(--color-border-inverse);
  padding: 72px 20px 56px;

  @media (max-width: 980px) {
    padding: 56px 16px 48px;
  }
`;

export const HeroInner = styled.div`
  margin: 0 auto;
  max-width: 920px;
`;

export const HeroEyebrow = styled.p`
  color: var(--red);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  margin: 0 0 16px;
  text-transform: uppercase;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.25rem, 4.5vw, 3.75rem);
  font-weight: 800;
  letter-spacing: -2px;
  line-height: 1.04;
  margin: 0 0 16px;
`;

export const HeroDescription = styled.p`
  color: var(--color-text-readable-dark);
  font-size: 16px;
  line-height: 1.65;
  margin: 0 0 32px;
  max-width: 540px;
`;

export const HeroCtaRow = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
`;

export const HeroCtaPrimary = styled.a`
  background: var(--red);
  border-radius: var(--radius-none);
  color: #fff;
  display: inline-flex;
  font-size: 13px;
  font-weight: 600;
  padding: 9px 18px;
  transition:
    background 160ms var(--easing-standard),
    transform 160ms var(--easing-standard);

  &:active {
    transform: scale(0.98);
  }

  &:hover {
    background: #d4151c;
  }
`;

export const HeroCtaGhost = styled.a`
  border: 1px solid var(--color-border-inverse);
  border-radius: var(--radius-none);
  color: var(--color-text-inverse);
  display: inline-flex;
  font-size: 13px;
  font-weight: 600;
  padding: 9px 18px;
  transition:
    border-color 160ms var(--easing-standard),
    transform 160ms var(--easing-standard);

  &:active {
    transform: scale(0.98);
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

export const HeroStatsRow = styled.div`
  border-top: 1px solid var(--color-border-inverse);
  display: flex;
  margin: 40px auto 0;
  max-width: 920px;

  @media (max-width: 640px) {
    flex-wrap: wrap;
  }
`;

export const HeroStat = styled.div`
  border-right: 1px solid var(--color-border-inverse);
  flex: 1;
  padding: 24px 16px;

  &:last-child {
    border-right: 0;
  }

  @media (max-width: 640px) {
    border-bottom: 1px solid var(--color-border-inverse);
    border-right: 1px solid var(--color-border-inverse);
    flex: 1 1 50%;

    &:nth-child(2) {
      border-right: 0;
    }

    &:nth-child(3),
    &:nth-child(4) {
      border-bottom: 0;
    }

    &:nth-child(3) {
      border-right: 1px solid var(--color-border-inverse);
    }
  }
`;

export const HeroStatValue = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 4px;
`;

export const HeroStatLabel = styled.span`
  color: var(--color-text-muted-dark);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
