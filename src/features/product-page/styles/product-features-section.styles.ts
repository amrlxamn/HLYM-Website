import styled from "styled-components";

export const ProductFeaturesRoot = styled.section`
  background: var(--color-bg-surface);
  color: var(--color-text-primary);
  display: grid;
  grid-template-columns: minmax(0, 58vw) minmax(360px, 1fr);
  min-height: calc(100vh - var(--header-height-total));
  overflow: hidden;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: 0;
  }
`;

export const ProductFeatureImagePanel = styled.div`
  min-height: calc(100vh - var(--header-height-total));
  overflow: hidden;

  @media (max-width: 900px) {
    min-height: 420px;
  }

  @media (max-width: 560px) {
    min-height: 320px;
  }
`;

export const ProductFeatureImage = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

export const ProductFeatureCopy = styled.div`
  align-content: start;
  display: grid;
  max-width: 560px;
  padding: clamp(48px, 9vh, 96px) clamp(24px, 7vw, 96px) 48px;
`;

export const ProductFeatureControls = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const ProductFeatureCounter = styled.span`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1;
`;

export const ProductFeatureArrow = styled.button`
  align-items: center;
  color: var(--color-text-primary);
  display: inline-flex;
  height: 36px;
  justify-content: center;
  margin-left: 16px;
  transition: color var(--duration-base) var(--easing-standard);
  width: 36px;

  &:hover {
    color: var(--red);
  }
`;

export const ProductFeatureEyebrow = styled.p`
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0;
  line-height: 1.2;
  margin: 0 0 10px;
  text-transform: uppercase;
`;

export const ProductFeatureTitle = styled.h2`
  font-size: clamp(20px, 3vw, 24px);
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1;
  text-transform: uppercase;
`;

export const ProductFeatureDescription = styled.p`
  color: var(--color-text-primary);
  font-size: var(--font-size-description);
  letter-spacing: 0;
  line-height: 1.42;
  margin: 0;
`;
