import styled from "styled-components";

export const ProductTitleLayer = styled.div`
  left: 50%;
  pointer-events: none;
  position: absolute;
  text-align: center;
  top: clamp(26px, 8vh, 82px);
  transform: translateX(-50%);
  width: min(100%, 1040px);
  z-index: 1;
`;

export const ProductModelName = styled.p`
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2.8px;
  line-height: 1;
  margin: 0 0 24px;
  text-transform: uppercase;
`;

export const ProductPosterText = styled.h1`
  color: color-mix(in srgb, var(--color-text-primary) 8%, transparent);
  font-size: clamp(92px, 19vw, 270px);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 0.78;
  margin: 0;
  text-transform: uppercase;
`;

export const ProductPosterLogo = styled.h1`
  align-items: center;
  display: flex;
  justify-content: center;
  line-height: 0;
  margin: 0;
  overflow: hidden;

  img {
    display: block;
    filter: grayscale(1);
    flex-shrink: 0;
    margin: 0 auto;
    opacity: 0.08;
    width: min(86vw, 1040px);
  }
`;
