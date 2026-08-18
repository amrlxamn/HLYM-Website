import styled from "styled-components";

export const ProductImagePanel = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  min-height: 0;
  position: relative;
  z-index: 2;

  img {
    display: block;
    filter: drop-shadow(var(--shadow-card));
    height: auto;
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
    position: relative;
    width: 100%;
    z-index: 2;
  }
`;

export const ProductRotationViewerSurface = styled.div`
  align-items: center;
  cursor: grab;
  display: flex;
  height: 100%;
  justify-content: center;
  margin-inline: auto;
  max-width: 780px;
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
    aspect-ratio: 3 / 2;
    display: block;
    filter: drop-shadow(var(--shadow-card));
    height: auto;
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
    width: 100%;
  }
`;
