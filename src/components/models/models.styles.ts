import styled from "styled-components";
import { getAssetUrl } from "@/lib/get-asset-url";
import { Container } from "@/styles/layout";

export const ModelsSectionRoot = styled.section`
  --models-desktop-inset: clamp(24px, 4vw, 48px);
  --models-section-gap: 72px;
  background: #f8f8f8;
  padding: var(--models-section-gap) 0;
  position: relative;

  @media (max-width: 980px) {
    --models-desktop-inset: 0px;
    --models-section-gap: 0px;
    padding: 0 0 80px;
  }
`;

export const ModelsBackground = styled.div`
  background-color: #f8f8f8;
  background-image: url("${getAssetUrl("hlym/product-bg.jpg")}");
  background-position: center;
  background-size: cover;
  inset: 0;
  opacity: 0.38;
  pointer-events: none;
  position: absolute;
  z-index: 0;
`;

export const ModelsHeader = styled(Container)`
  height: 200px;
  position: relative;
  z-index: 2;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const ModelsHeading = styled.h2`
  color: #00000012;
  font-size: 160px;
  font-weight: 700;
  left: 0;
  letter-spacing: 12px;
  margin: 0;
  position: absolute;
  text-transform: uppercase;
  top: -10px;

  @media (max-width: 980px) {
    font-size: 88px;
    letter-spacing: 5px;
    top: 20px;
  }
`;

export const ModelsHeaderRow = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  left: 0;
  position: absolute;
  right: 0;
  top: 110px;

  @media (max-width: 980px) {
    top: 100px;
  }
`;

export const ModelCount = styled.div`
  align-items: center;
  display: flex;
  gap: 6px;

  span:last-child {
    color: #00000040;
    font-size: 12px;
  }
`;

export const ModelCountDot = styled.span`
  background: var(--red);
  border-radius: 999px;
  height: 6px;
  width: 6px;
`;

// Desktop layout: vertical tabs sidebar + stacking cards area.
export const ModelsDesktopLayout = styled.div`
  display: grid;
  gap: 28px;
  grid-template-columns: 48px minmax(0, 1fr);
  margin: 0 auto;
  max-width: 1320px;
  padding: 0 1rem;
  position: relative;
  z-index: 2;

  @media (max-width: 980px) {
    display: none;
  }
`;

// Vertical tabs sidebar — centered with the card area via grid alignment.
export const ModelsTabsShell = styled.aside`
  align-self: center;
  z-index: 6;
`;

export const ModelsStackingArea = styled.div`
  position: relative;
`;

export const ModelsStackWrap = styled.div`
  margin: 100px 0;
  position: relative;
  z-index: 2;

  @media (min-width: 981px) {
    display: none;
  }
`;

export const ModelsStack = styled(Container)`
  display: grid;
  gap: 20px;
  position: relative;

  @media (min-width: 981px) {
    display: none;
  }
`;

export const ModelsTabsMobileShell = styled.div`
  display: none;

  @media (max-width: 980px) {
    display: block;
    margin-bottom: 20px;
  }
`;
