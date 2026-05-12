import styled from "styled-components";

export const ProductVideoHeroRoot = styled.section`
  --product-video-control-size: 44px;
  --product-video-edge-inset: 24px;

  background: var(--color-bg-primary);
  cursor: pointer;
  min-height: calc(100vh - var(--header-height-total));
  overflow: hidden;
  position: relative;

  @media (max-width: 760px) {
    --product-video-edge-inset: 18px;
  }
`;

export const ProductVideoHeroMedia = styled.video`
  height: 100%;
  inset: 0;
  object-fit: cover;
  object-position: center;
  position: absolute;
  width: 100%;
`;

export const ProductVideoHeroShade = styled.div`
  background:
    linear-gradient(
      90deg,
      color-mix(in srgb, var(--color-bg-primary) 84%, transparent) 0%,
      color-mix(in srgb, var(--color-bg-primary) 52%, transparent) 25%,
      transparent 58%
    ),
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--color-bg-primary) 18%, transparent) 0%,
      transparent 42%,
      color-mix(in srgb, var(--color-bg-primary) 26%, transparent) 100%
    );
  inset: 0;
  pointer-events: none;
  position: absolute;
`;

export const ProductVideoHeroContent = styled.div`
  align-items: flex-end;
  display: flex;
  min-height: calc(100vh - var(--header-height-total));
  padding:
    clamp(24px, 6vh, 96px) clamp(24px, 6.94vw, 100px)
    var(--product-video-edge-inset);
  position: relative;
  z-index: 1;
`;

export const ProductVideoHeroCaption = styled.div`
  align-items: center;
  display: flex;
  min-height: var(--product-video-control-size);
  padding-right: calc(var(--product-video-control-size) + var(--product-video-edge-inset));
  width: 100%;

  @media (max-width: 760px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
  }
`;

export const ProductVideoHeroCopy = styled.p`
  color: color-mix(in srgb, var(--color-text-inverse) 50%, transparent);
  font-size: var(--font-size-description);
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  margin: 0;
  text-transform: uppercase;
  white-space: nowrap;

  @media (max-width: 760px) {
    max-width: min(100%, 360px);
    white-space: normal;
  }
`;

export const ProductVideoControl = styled.button`
  align-items: center;
  backdrop-filter: blur(16px);
  background: color-mix(in srgb, var(--color-bg-primary) 24%, transparent);
  border: 1px solid var(--color-border-inverse);
  border-radius: 8px;
  bottom: var(--product-video-edge-inset);
  color: var(--color-text-inverse);
  display: inline-flex;
  height: var(--product-video-control-size);
  justify-content: center;
  position: absolute;
  right: var(--product-video-edge-inset);
  width: var(--product-video-control-size);
  z-index: 2;

  svg {
    height: 18px;
    width: 18px;
  }
`;
