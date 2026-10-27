import styled from "styled-components";
import { ProductOverviewDetails } from "./product-overview-shell.styles";

export const ProductOverviewGallery = styled(ProductOverviewDetails).attrs({ as: "section" })`
  aspect-ratio: 2 / 1;
  background: transparent;
  display: block;
  margin: 0;
  max-width: none;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media (max-width: 760px) {
    aspect-ratio: 4 / 5;
    min-height: 440px;
  }
`;

export const ProductOverviewGalleryAlignment = styled(ProductOverviewDetails)`
  display: block;
  height: 100%;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
`;

export const ProductOverviewGallerySlide = styled.div<{ $active: boolean; $instant: boolean }>`
  inset: 0;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  pointer-events: none;
  position: absolute;
  transition: ${({ $instant }) =>
    $instant ? "none" : "opacity 400ms cubic-bezier(0.23, 1, 0.32, 1)"};
  z-index: ${({ $active }) => ($active ? 1 : 0)};

  &::after {
    background:
      linear-gradient(90deg, rgba(0, 0, 0, 0.68), transparent 72%),
      linear-gradient(0deg, rgba(0, 0, 0, 0.56), transparent 55%);
    content: "";
    inset: 0;
    position: absolute;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const ProductOverviewGalleryImage = styled.img`
  display: block;
  inset: 0;
  height: 100%;
  object-fit: cover;
  position: absolute;
  width: 100%;
`;

export const ProductOverviewGalleryCopy = styled.div`
  color: var(--color-text-inverse);
  display: grid;
  gap: var(--space-3);
  left: 0;
  max-width: min(48%, 480px);
  position: absolute;
  top: var(--space-10);
  z-index: 1;

  p {
    font-size: clamp(20px, 2vw, 28px);
    font-weight: var(--font-weight-medium);
    line-height: 1.25;
    margin: 0;
  }

  @media (max-width: 760px) {
    max-width: calc(100% - var(--space-8));
    top: var(--space-4);

    p {
      font-size: 18px;
    }
  }
`;

export const ProductOverviewGalleryTitle = styled.h3`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wider);
  margin: 0;
  text-transform: uppercase;
`;

export const ProductOverviewGalleryPreviews = styled.div`
  bottom: var(--space-8);
  display: flex;
  gap: var(--space-2);
  left: 0;
  pointer-events: auto;
  position: absolute;
  z-index: 2;

  @media (max-width: 760px) {
    bottom: var(--space-4);
    right: 0;
  }
`;

export const ProductOverviewGalleryPreview = styled.button<{ $active: boolean }>`
  aspect-ratio: 4 / 3;
  flex: 0 0 clamp(88px, 9vw, 130px);
  opacity: ${({ $active }) => ($active ? 1 : 0.48)};
  outline: 2px solid ${({ $active }) => ($active ? "#fff" : "transparent")};
  outline-offset: -2px;
  overflow: hidden;
  position: relative;
  transition: opacity 200ms ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 1;
    }
  }

  &:focus-visible {
    outline-color: var(--red);
  }

  @media (max-width: 760px) {
    aspect-ratio: 1;
    flex: 1 1 0;
    min-height: 48px;
    min-width: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
