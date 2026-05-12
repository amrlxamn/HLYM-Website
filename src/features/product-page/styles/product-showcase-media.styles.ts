import styled from "styled-components";

export const ProductImagePanel = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: min(64vh, 620px);
  padding-top: clamp(112px, 18vh, 180px);
  position: relative;
  z-index: 2;

  img {
    display: block;
    filter: drop-shadow(var(--shadow-card));
    max-height: min(58vh, 560px);
    max-width: min(1060px, 100%);
    object-fit: contain;
    position: relative;
    width: 100%;
    z-index: 2;
  }

  @media (max-width: 760px) {
    min-height: 420px;
    padding-top: 128px;

    img {
      max-height: 320px;
    }
  }
`;

export const ProductRotationViewerSurface = styled.div`
  cursor: grab;
  display: grid;
  justify-items: center;
  position: relative;
  touch-action: none;
  width: 100%;
  z-index: 2;

  &:active {
    cursor: grabbing;
  }

  &:focus-visible {
    outline: 2px solid var(--color-text-primary);
    outline-offset: 10px;
  }

  canvas {
    display: block;
    filter: drop-shadow(var(--shadow-card));
    max-height: min(58vh, 560px);
    max-width: min(1060px, 100%);
    object-fit: contain;
    width: 100%;
  }

  @media (max-width: 760px) {
    canvas {
      max-height: 320px;
    }
  }
`;
