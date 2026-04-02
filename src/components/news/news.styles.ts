import { motion } from "framer-motion";
import styled from "styled-components";

/**
 * Tall section that creates scroll room for the scale-up animation.
 * The card is sticky inside, so it stays in the viewport while the
 * section scrolls — driving the scale transform from small to full.
 */
export const NewsSectionRoot = styled.section`
  --news-featured-initial-top: 200px;
  background: #0a0a0a;
  color: #ffffff;
  height: 1824px;
  overflow: clip;
  position: relative;

  @media (max-width: 980px) {
    --news-featured-initial-top: 240px;
  }
`;

export const NewsOverlay = styled.div`
  background: linear-gradient(180deg, #0a0a0a00 0%, #0a0a0a60 45%, #0a0a0aee 100%);
  inset: 0;
  position: absolute;
  z-index: 1;
`;

export const NewsFeaturedViewport = styled.div`
  display: flex;
  height: calc(100vh - var(--header-height-total));
  justify-content: center;
  position: sticky;
  top: var(--header-height-total);
`;

export const NewsFeaturedWrapper = styled(motion.div)`
  overflow: hidden;
  transform-origin: center bottom;
  will-change: border-radius, height, transform, width;
`;

export const NewsFeaturedRoot = styled.article`
  cursor: pointer;
  height: 100%;
  overflow: hidden;
  position: relative;

  img.featured-bg {
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    transition: transform 0.6s ease;
    width: 100%;
    will-change: transform;
  }

  &:hover img.featured-bg {
    transform: scale(1.05);
  }

  &::after {
    background: transparent;
    content: "";
    inset: 0;
    position: absolute;
    transition: background 0.4s ease;
    z-index: 1;
  }

  &:hover::after {
    background: rgba(10, 10, 10, 0.12);
  }
`;

/* ─── In-card section header (top area) ─── */

export const NewsCardHeader = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  left: 60px;
  position: absolute;
  right: 60px;
  top: 48px;
  z-index: 2;

  @media (max-width: 980px) {
    left: 20px;
    right: 20px;
    top: 28px;
  }
`;

export const NewsCardHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const NewsCardTagLabel = styled.span`
  align-items: center;
  color: var(--red);
  display: inline-flex;
  font-size: 12px;
  font-weight: 700;
  gap: 24px;
  letter-spacing: 6px;
  text-transform: uppercase;
  width: max-content;

  &::before,
  &::after {
    background: var(--red);
    content: "";
    height: 2px;
    width: 52px;
  }

  @media (max-width: 980px) {
    font-size: 10px;
    gap: 16px;
    letter-spacing: 4px;

    &::before,
    &::after {
      width: 32px;
    }
  }
`;

export const NewsCardHeading = styled.h2`
  color: var(--color-text-inverse);
  font-family: var(--font-family-base);
  font-size: 38px;
  letter-spacing: -1px;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: 980px) {
    font-size: 24px;
  }
`;

export const NewsViewAllLink = styled.a`
  align-items: center;
  color: #fff;
  display: inline-flex;
  font-size: 11px;
  font-weight: 700;
  gap: 8px;
  letter-spacing: 2px;
  padding-top: 4px;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  svg {
    height: 14px;
    width: 14px;
  }
`;

/* ─── Featured copy (bottom-left) ─── */

export const NewsFeaturedCopy = styled.div`
  bottom: 48px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  left: 60px;
  position: absolute;
  width: 420px;
  z-index: 2;

  @media (max-width: 980px) {
    bottom: 32px;
    left: 20px;
    right: 20px;
    width: auto;
  }
`;

export const NewsFeaturedBadge = styled.span`
  background: var(--red);
  color: var(--color-text-inverse);
  display: inline-block;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 4px 10px;
  text-transform: uppercase;
  width: max-content;
`;

export const NewsFeaturedTitle = styled.h3`
  color: var(--color-text-inverse);
  font-family: var(--font-family-base);
  font-size: 26px;
  letter-spacing: -0.5px;
  line-height: 1.15;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: 980px) {
    font-size: 20px;
  }
`;

export const NewsFeaturedMeta = styled.p`
  align-items: center;
  color: var(--color-text-soft-dark);
  display: inline-flex;
  font-size: 10px;
  font-weight: 600;
  gap: 12px;
  letter-spacing: 1.5px;
  margin: 0;
  text-transform: uppercase;
`;

export const NewsFeaturedMetaDot = styled.span`
  background: #ffffff30;
  border-radius: 999px;
  height: 4px;
  width: 4px;
`;

export const NewsFeaturedLearnMore = styled.a`
  align-items: center;
  color: #fff;
  display: inline-flex;
  font-size: 10px;
  font-weight: 700;
  gap: 6px;
  letter-spacing: 1.5px;
  text-decoration: none;
  text-transform: uppercase;
  width: max-content;
  z-index: 3;

  .arrow {
    display: inline-block;
    transition: transform 0.3s ease;
  }

  &:hover .arrow {
    transform: translateX(5px);
  }
`;

/* ─── Mini thumbnail cards (bottom-right) ─── */

export const NewsMiniCardsRow = styled(motion.div)`
  bottom: 48px;
  display: flex;
  gap: 16px;
  position: absolute;
  right: 60px;
  z-index: 2;
  will-change: opacity, transform;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const NewsMiniCardsControls = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
`;

export const NewsMiniCardsControl = styled.button`
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  justify-content: center;
  transition:
    background 0.2s ease,
    opacity 0.2s ease,
    transform 0.2s ease;
  width: 40px;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.16);
    transform: translateY(-1px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.35;
  }

  svg {
    height: 16px;
    width: 16px;
  }
`;

export const NewsMiniCardsViewport = styled.div`
  flex: 0 0 436px;
  overflow: hidden;
  position: relative;
  width: 436px;
`;

export const NewsMiniCardsTrack = styled(motion.div)`
  display: flex;
  gap: 12px;
  width: max-content;
`;

export const NewsMiniCardsFade = styled.div<{ $isVisible: boolean }>`
  background: linear-gradient(90deg, rgba(10, 10, 10, 0) 0%, rgba(10, 10, 10, 0.92) 100%);
  bottom: 0;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.2s ease;
  width: 72px;
`;

export const NewsMiniCard = styled.button<{ $isActive: boolean }>`
  background: transparent;
  border: 1px solid
    ${({ $isActive }) => ($isActive ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.08)")};
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  flex: 0 0 200px;
  flex-direction: column;
  height: 120px;
  justify-content: flex-end;
  overflow: hidden;
  padding: 0;
  position: relative;
  text-align: left;
  width: 200px;

  img {
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    transition: transform 0.5s ease;
    width: 100%;
  }

  &:hover img {
    transform: scale(1.08);
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.95);
    outline-offset: 2px;
  }

  &::after {
    background: linear-gradient(180deg, transparent 0%, rgba(10, 10, 10, 0.82) 100%);
    content: "";
    inset: 0;
    position: absolute;
    z-index: 1;
  }

  &::before {
    border: 1px solid ${({ $isActive }) => ($isActive ? "rgba(255, 255, 255, 0.9)" : "transparent")};
    border-radius: 6px;
    content: "";
    inset: 0;
    pointer-events: none;
    position: absolute;
    z-index: 3;
  }
`;

export const NewsMiniCardCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 12px;
  position: relative;
  z-index: 2;
`;

export const NewsMiniCardTitle = styled.span`
  color: #fff;
  display: -webkit-box;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.3px;
  line-height: 1.35;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const NewsMiniCardDate = styled.span`
  color: rgba(255, 255, 255, 0.55);
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

export const NewsRedLine = styled.div`
  background: linear-gradient(90deg, #ec1c2400 0%, #ec1c24 30%, #ec1c24 70%, #ec1c2400 100%);
  bottom: 0;
  height: 3px;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  z-index: 3;
`;
