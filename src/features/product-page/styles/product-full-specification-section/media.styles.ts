import styled from "styled-components";

export const ProductFullSpecificationImagePanel = styled.div`
  align-items: center;
  background: #0a0a0a;
  display: flex;
  height: min(480px, calc(100dvh - var(--header-height-total) - 250px));
  justify-content: center;
  min-height: 0;
  overflow: hidden;
  position: relative;
  width: min(100%, 640px);

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const ProductFullSpecificationFeatureImage = styled.img<{ $active: boolean }>`
  height: 100%;
  inset: 0;
  object-fit: contain;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  position: absolute;
  transition: opacity 280ms cubic-bezier(0.23, 1, 0.32, 1);
  width: 100%;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const ProductHotspotRoot = styled.div`
  margin-inline: auto;
  max-width: 1280px;
  position: relative;
  width: calc(100% - var(--space-8));

  @media (max-width: 1199px) {
    width: 100%;
  }
`;

export const ProductHotspotCanvas = styled.div`
  margin-inline: auto;
  max-width: 660px;
  position: relative;
  width: 100%;
`;

export const ProductHotspotImage = styled.img`
  display: block;
  height: auto;
  width: 100%;
`;

export const ProductHotspotButton = styled.button<{ $active: boolean }>`
  align-items: center;
  background: var(--red);
  border: 0;
  border-radius: 50%;
  box-shadow: 0 0 0 7px rgba(0, 0, 0, 0.1);
  color: #fff;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  padding: 0;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 40px;
  z-index: ${({ $active }) => ($active ? 3 : 2)};

  &:hover,
  &:focus-visible {
    box-shadow: 0 0 0 7px rgba(237, 28, 36, 0.2);
    z-index: 4;
  }

  &:focus-visible {
    outline: 2px solid #002d62;
    outline-offset: 8px;
  }

  @media (max-width: 640px) {
    background: transparent;
    box-shadow: none;
    height: 44px;
    width: 44px;

    &::before {
      background: var(--red);
      border-radius: 50%;
      box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.1);
      content: "";
      inset: 6px;
      position: absolute;
    }

    svg {
      height: 16px;
      position: relative;
      width: 16px;
    }
  }
`;

export const ProductHotspotDetail = styled.div`
  box-sizing: border-box;
  color: #191919;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-height: calc(100% - 24px);
  overflow-y: auto;
  padding: 8px 44px 8px 0;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: min(20vw, 280px);
  z-index: 5;

  @media (max-width: 1199px) {
    margin: 28px auto 0;
    max-height: none;
    max-width: 660px;
    overflow: visible;
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    width: 100%;
  }

  h3,
  p,
  span {
    margin: 0;
  }

  h3 {
    font-size: 27px;
    font-weight: 300;
    letter-spacing: -0.015em;
    line-height: 1.12;
    text-transform: uppercase;
  }

  span {
    color: #9a9a9a;
    display: block;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.15em;
    line-height: 1.4;
    margin-top: 7px;
    text-transform: uppercase;
  }

  p {
    color: #4d4d4d;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.55;
  }

  button {
    background: transparent;
    border: 0;
    color: #5c5c5c;
    cursor: pointer;
    display: grid;
    height: 40px;
    place-items: center;
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
  }

  button:hover {
    color: var(--red);
  }

  button:focus-visible {
    outline: 2px solid var(--red);
    outline-offset: 2px;
  }
`;

export const ProductHotspotHint = styled.p`
  color: var(--color-text-muted-light);
  display: none;
  font-size: 13px;
  margin: 12px 0 0;

  @media (max-width: 640px) {
    display: block;
  }
`;
