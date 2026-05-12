import styled from "styled-components";

export const ProductFullSpecificationRoot = styled.section`
  background: var(--color-bg-canvas);
  color: var(--color-text-primary);
  padding: clamp(72px, 7vw, 100px);
`;

export const ProductFullSpecificationInner = styled.div`
  display: grid;
  gap: 50px;
  width: 100%;
`;

export const ProductFullSpecificationHeader = styled.header`
  display: grid;
  gap: 24px;
  justify-items: start;
`;

export const ProductFullSpecificationEyebrow = styled.p`
  color: var(--red);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  text-transform: uppercase;
`;

export const ProductFullSpecificationTitle = styled.h2`
  color: var(--color-text-primary);
  font-size: clamp(30px, 3vw, 38px);
  font-weight: 500;
  letter-spacing: 0;
  line-height: 48px;
  margin: 0;
  text-transform: uppercase;
`;

export const ProductFullSpecificationBody = styled.div`
  align-items: start;
  display: grid;
  gap: clamp(48px, 7vw, 104px);
  grid-template-columns: minmax(320px, 560px) minmax(0, 1fr);

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductFullSpecificationImagePanel = styled.div`
  height: 460px;
  overflow: hidden;
  width: min(100%, 560px);

  img {
    height: 100%;
    object-fit: contain;
    object-position: center;
    width: 100%;
  }

  @media (max-width: 760px) {
    height: 320px;
  }
`;

export const ProductFullSpecificationList = styled.div`
  display: grid;
  gap: 24px;
  min-width: 0;
`;

export const ProductFullSpecificationListViewport = styled.div`
  max-height: min(720px, calc(100vh - var(--header-height-total) - 120px));
  min-height: 460px;
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    content: "";
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    z-index: 2;
  }

  &::before {
    background: linear-gradient(180deg, var(--color-bg-canvas) 0%, transparent 100%);
    height: 96px;
    top: 0;
  }

  &::after {
    background: linear-gradient(0deg, var(--color-bg-canvas) 0%, transparent 100%);
    bottom: 0;
    height: 120px;
  }

  @media (max-width: 1080px) {
    max-height: none;
    min-height: 0;
    overflow: visible;

    &::before,
    &::after {
      display: none;
    }
  }
`;
