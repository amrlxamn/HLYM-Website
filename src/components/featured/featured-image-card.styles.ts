import styled from "styled-components";

export const FeaturedImageCardRoot = styled.article`
  color: var(--color-text-inverse);
  min-height: 100%;
  overflow: hidden;
  position: relative;

  > img {
    height: 100%;
    inset: 0;
    object-fit: cover;
    position: absolute;
    transition: transform var(--duration-slow) var(--easing-out);
    width: 100%;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover > img {
      transform: scale(1.03);
    }
  }

  @media (max-width: 1360px) {
    height: 520px;
    min-height: 0;
  }

  @media (max-width: 720px) {
    height: 460px;
  }
`;

export const FeaturedImageCardShade = styled.div`
  background: linear-gradient(180deg, transparent 45%, var(--alpha-black-24) 100%);
  inset: 0;
  position: absolute;
`;

export const FeaturedImageCardOverlay = styled.div`
  background: linear-gradient(
    180deg,
    var(--alpha-black-24) 0%,
    color-mix(in srgb, var(--color-bg-primary) 92%, transparent) 100%
  );
  clip-path: inset(100% 0 0 0);
  inset: 0;
  position: absolute;
  transition: clip-path var(--duration-base) var(--easing-out);

  ${FeaturedImageCardRoot}:focus-within & {
    clip-path: inset(0);
  }

  @media (hover: hover) and (pointer: fine) {
    ${FeaturedImageCardRoot}:hover & {
      clip-path: inset(0);
    }
  }

  @media (hover: none) {
    clip-path: inset(0);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: opacity var(--duration-fast) ease;
  }
`;
