import styled from "styled-components";

export const ModelCardRoot = styled.article`
  display: grid;
  grid-template-columns: 500px minmax(0, 1fr);
  margin: 0 auto;
  max-width: 1240px;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media (max-width: 1360px) {
    grid-template-columns: 40% 60%;
    width: 100%;
  }

  @media (max-width: 980px) {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: auto;
    justify-content: center;
  }
`;

export const ModelCopy = styled.div<{ $compact: boolean }>`
  color: #0a0a0a;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  justify-content: center;
  padding: 40px 48px;
  position: relative;
  z-index: 3;

  @media (max-width: 980px) {
    flex: 0 1 42%;
    gap: var(--space-4);
    order: 1;
    padding: var(--space-6) var(--space-4);
  }
`;

export const ModelNumber = styled.p`
  color: #00000008;
  font-size: 72px;
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 0.85;
  margin: 0;

  @media (max-width: 980px) {
    font-size: clamp(36px, 7vw, 52px);
  }
`;

export const ModelCategory = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 10px;

  p {
    color: #00000060;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 3px;
    margin: 0;
    text-transform: uppercase;
  }

  @media (max-width: 980px) {
    gap: var(--space-2);

    p {
      font-size: 10px;
      letter-spacing: 2px;
    }
  }
`;

export const ModelCategoryAccent = styled.span`
  background: var(--red);
  height: 14px;
  width: 2px;

  @media (max-width: 980px) {
    height: 10px;
  }
`;

export const ModelName = styled.h3`
  color: #0a0a0a;
  font-size: clamp(52px, 5vw, 68px);
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: 980px) {
    font-size: clamp(26px, 6vw, 42px);
    letter-spacing: 0;
  }
`;

export const ModelSpecs = styled.div`
  align-items: center;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 24px;
  row-gap: 10px;

  @media (max-width: 980px) {
    gap: var(--space-3);
    row-gap: var(--space-2);
  }
`;

export const ModelSpecGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  > span:first-child {
    color: #0a0a0a;
    font-size: 24px;
    font-weight: 300;
    line-height: 1;
    text-transform: uppercase;
  }

  > span:last-child {
    color: #00000040;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 2px;
    line-height: 1;
    text-transform: uppercase;
  }

  @media (max-width: 980px) {
    > span:first-child {
      font-size: 16px;
    }

    > span:last-child {
      font-size: 10px;
      letter-spacing: 1px;
    }
  }
`;

export const ModelDivider = styled.span`
  background: #00000010;
  display: inline-block;
  height: 28px;
  width: 1px;

  @media (max-width: 980px) {
    height: 20px;
  }
`;

export const ModelPriceRow = styled.div`
  align-items: center;
  display: inline-flex;

  button {
    font-size: 16px;
  }

  @media (max-width: 980px) {
    button {
      font-size: 12px;
    }
  }
`;

export const ModelImage = styled.div`
  align-items: center;
  background: var(--color-bg-canvas);
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  z-index: 1;

  > img {
    filter: none;
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
    width: 100%;
  }

  @media (max-width: 980px) {
    flex: 1 1 58%;
    height: clamp(220px, 52vw, 380px);
    min-width: 0;
    order: 1;
  }
`;

export const ModelRotationStage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  justify-content: center;
  margin-inline: auto;
  max-width: 780px;
  width: 100%;

  > div[role="group"] {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-inline: auto;
    width: 100%;
  }

  canvas {
    aspect-ratio: 3 / 2;
    filter: none;
    height: auto;
    max-width: 100%;
    object-fit: contain;
    width: 100%;
  }
`;

export const ModelRotationCue = styled.div`
  align-items: center;
  color: var(--color-text-muted-light);
  display: inline-flex;
  flex: none;
  gap: var(--space-2);
  font-size: 10px;
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  white-space: nowrap;

  span {
    display: inline-block;
  }

  svg {
    color: var(--red);
    height: 22px;
    overflow: visible;
    width: 22px;
  }

  @media (max-width: 980px) {
    font-size: 8px;
    gap: var(--space-1);

    svg {
      height: 18px;
      width: 18px;
    }
  }
`;

export const ModelLeftAccent = styled.span`
  background: var(--red);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 3px;
`;
