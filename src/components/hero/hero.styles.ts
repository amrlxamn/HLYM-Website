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
      color-mix(in srgb, var(--color-neutral-950) 82%, transparent) 0%,
      color-mix(in srgb, var(--color-neutral-950) 28%, transparent) 24%,
      transparent 62%,
      color-mix(in srgb, var(--color-neutral-950) 18%, transparent) 100%
    );
    content: "";
    inset: 0;
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }
`;

export const HeroLink = styled.a`
  display: block;
  inset: 0;
  position: absolute;
`;

export const HeroImage = styled.img`
  height: 100%;
  object-fit: contain;
  object-position: center;
  width: 100%;
`;

export const HeroPaginationRoot = styled.div`
  align-items: center;
  bottom: var(--space-5);
  display: flex;
  gap: var(--space-2);
  justify-content: center;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  z-index: 2;
`;

export const HeroDot = styled.button<{ $active: boolean }>`
  align-items: center;
  display: flex;
  height: 24px;
  justify-content: center;
  width: 24px;

  &::before {
    background: ${({ $active }) => ($active ? "var(--color-brand-500)" : "var(--alpha-white-60)")};
    border-radius: 50%;
    content: "";
    height: ${({ $active }) => ($active ? "10px" : "7px")};
    transition:
      background var(--duration-fast) var(--easing-out),
      height var(--duration-fast) var(--easing-out),
      width var(--duration-fast) var(--easing-out);
    width: ${({ $active }) => ($active ? "10px" : "7px")};
  }
`;
