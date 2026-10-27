import styled from "styled-components";

export const HeroSectionRoot = styled.section`
  aspect-ratio: 1920 / 1100;
  background: var(--color-neutral-950);
  margin-top: calc(var(--header-height-total) * -1);
  overflow: hidden;
  position: relative;
  width: 100%;

  &::after {
    background: linear-gradient(
      180deg,
      rgba(10, 10, 10, 0.72) 0,
      rgba(10, 10, 10, 0.64) var(--header-height-utility),
      rgba(10, 10, 10, 0.12) var(--header-height-total),
      transparent calc(var(--header-height-total) + var(--space-12)),
      transparent 65%,
      color-mix(in srgb, var(--color-neutral-950) 55%, transparent) 100%
    );
    content: "";
    inset: 0;
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }

  @media (max-width: 980px) {
    aspect-ratio: auto;
    height: calc(var(--header-height-total) + 57.2917vw);
  }
`;

export const HeroLink = styled.a`
  display: block;
  inset: 0;
  position: absolute;

  @media (max-width: 980px) {
    background-position: center;
    background-size: cover;
  }
`;

export const HeroImage = styled.img`
  height: 100%;
  object-fit: contain;
  object-position: center;
  width: 100%;

  @media (max-width: 980px) {
    object-position: center bottom;
  }
`;
