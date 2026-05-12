import styled from "styled-components";

const YAMAHA_TEXT_MASK = 'url("/assets/hlym/footer-wordmark/yamaha-mask.svg")';
const FIGMA_WORDMARK_HEIGHT = "clamp(64px, 11.1vw, 196px)";
const FIGMA_WORDMARK_STROKE_TOP = "-11px";
const FIGMA_WORDMARK_WIDTH = "min(calc(100vw - 160px), 1274px)";

export const FooterVideoWordmarkRoot = styled.div`
  height: ${FIGMA_WORDMARK_HEIGHT};
  margin: 0 0 0 calc(50% - 50vw);
  overflow: visible;
  position: relative;
  --footer-wordmark-stroke-top: ${FIGMA_WORDMARK_STROKE_TOP};
  width: 100vw;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const FooterVideoWordmarkFallback = styled.p`
  color: var(--color-text-primary);
  font-size: clamp(64px, 23vw, 430px);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 0.72;
  margin: 0;
  opacity: 0.08;
  overflow-wrap: anywhere;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  width: 100%;

  @supports ((-webkit-mask-image: ${YAMAHA_TEXT_MASK}) or (mask-image: ${YAMAHA_TEXT_MASK})) {
    opacity: 0;
  }
`;

export const FooterVideoWordmarkStrokeLayer = styled.div`
  display: none;

  @supports ((-webkit-mask-image: ${YAMAHA_TEXT_MASK}) or (mask-image: ${YAMAHA_TEXT_MASK})) {
    display: block;
    height: 100%;
    left: 50%;
    pointer-events: none;
    position: absolute;
    top: var(--footer-wordmark-stroke-top);
    transform: translateX(-50%);
    width: ${FIGMA_WORDMARK_WIDTH};
    z-index: 1;
  }
`;

export const FooterVideoWordmarkLetter = styled.img<{
  $height: number;
  $left: number;
  $top: number;
  $width: number;
}>`
  height: ${({ $height }) => `${($height / 196.364) * 100}%`};
  left: ${({ $left }) => `${($left / 1274.28) * 100}%`};
  object-fit: fill;
  position: absolute;
  top: ${({ $top }) => `${($top / 196.364) * 100}%`};
  width: ${({ $width }) => `${($width / 1274.28) * 100}%`};
`;

export const FooterVideoWordmarkVideo = styled.video`
  display: none;

  @supports ((-webkit-mask-image: ${YAMAHA_TEXT_MASK}) or (mask-image: ${YAMAHA_TEXT_MASK})) {
    display: block;
    height: 100%;
    left: 50%;
    mask-image: ${YAMAHA_TEXT_MASK};
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: 100% 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    width: ${FIGMA_WORDMARK_WIDTH};
    z-index: 2;
    -webkit-mask-image: ${YAMAHA_TEXT_MASK};
    -webkit-mask-position: center;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100% 100%;
  }
`;
