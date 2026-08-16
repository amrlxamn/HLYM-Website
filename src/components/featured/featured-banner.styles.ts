import styled from "styled-components";

export const FeaturedBannerRoot = styled.section`
  background: var(--color-bg-surface);
  border-top: 2px solid var(--red);
  bottom: 0;
  left: 0;
  opacity: 0;
  padding: var(--space-5) 0;
  pointer-events: none;
  position: absolute;
  transform: translateY(var(--space-12));
  width: 100%;
  z-index: 10;

  @media (prefers-reduced-motion: reduce) {
    transform: none;
  }
`;

export const FeaturedBannerContent = styled.div`
  align-items: center;
  display: grid;
  gap: var(--space-8);
  grid-template-columns: 1fr auto;
  margin: 0 auto;
  max-width: var(--container);
  padding: 0 var(--space-4);
  width: calc(100% - 2rem);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const FeaturedBannerCopy = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--space-4) var(--space-6);
  min-width: 0;
`;

export const FeaturedBannerLogo = styled.img`
  height: 24px;
  object-fit: contain;
  object-position: center;
  width: auto;
`;

export const FeaturedBannerDivider = styled.span`
  color: #00000040;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-light);
  line-height: 1;
`;

export const FeaturedBannerSpecs = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3) var(--space-8);
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const FeaturedBannerSpecItem = styled.li`
  align-items: baseline;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`;

export const FeaturedBannerSpecValue = styled.span`
  color: #0a0a0a;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-light);
  line-height: 1;
  text-transform: uppercase;
`;

export const FeaturedBannerSpecLabel = styled.span`
  color: #00000040;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-light);
  letter-spacing: 2px;
  line-height: 1;
  text-transform: uppercase;
`;

export const FeaturedBannerAction = styled.div`
  align-items: center;
  display: flex;
  flex-shrink: 0;

  @media (max-width: 760px) {
    justify-content: flex-start;
  }
`;
