import styled from "styled-components";
import { Container } from "@/styles/layout";

export const FeaturedSectionRoot = styled.section`
  background: var(--color-bg-primary);
`;

export const FeaturedCardsRow = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 480px;

  @media (max-width: 1360px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

export const FeaturedCardRoot = styled.article`
  overflow: hidden;
  position: relative;

  @media (max-width: 1360px) {
    min-height: 320px;
  }
`;

export const FeaturedOverlay = styled.div`
  background: linear-gradient(180deg, #0a0a0a00 0%, #0a0a0add 50%, #0a0a0a 100%);
  inset: 0;
  position: absolute;
`;

export const FeaturedCardCopy = styled.div`
  bottom: 42px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  left: 48px;
  position: absolute;
  width: 400px;
  z-index: 2;

  @media (max-width: 980px) {
    left: 20px;
    right: 20px;
    width: auto;
  }
`;

export const FeaturedCardTag = styled.p`
  color: var(--red);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  margin: 0;
  text-transform: uppercase;
`;

export const FeaturedCardTitle = styled.h3`
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: 980px) {
    font-size: 28px;
  }
`;

export const FeaturedCardDescription = styled.p`
  color: var(--color-text-soft-dark);
  font-size: var(--font-size-description);
  line-height: 1.6;
  margin: 0;
  width: 340px;

  @media (max-width: 980px) {
    width: auto;
  }
`;

export const FeaturedCardPrice = styled.p`
  color: var(--color-text-muted-dark);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 0;
  text-transform: uppercase;
`;

export const MtEditorialRoot = styled(Container).attrs({ as: "article" })`
  background: #0a0a0a;
  display: grid;
  grid-template-columns: 760px 1fr;

  @media (max-width: 1360px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

export const MtImageWrap = styled.div`
  overflow: hidden;
  position: relative;
`;

export const MtOverlay = styled.div`
  background: linear-gradient(90deg, #0a0a0a00 0%, #0a0a0a00 60%, #0a0a0a 100%);
  inset: 0;
  position: absolute;
`;

export const MtOverlayTop = styled.div`
  background: linear-gradient(180deg, #0a0a0a88 0%, #0a0a0a00 100%);
  height: 200px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const MtWatermark = styled.span`
  color: #ffffff06;
  font-size: 320px;
  font-weight: 700;
  left: -20px;
  letter-spacing: -10px;
  line-height: 1;
  position: absolute;
  top: 180px;
`;

export const MtCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  justify-content: center;
  padding: 80px;

  @media (max-width: 980px) {
    padding: 28px 20px;
  }
`;

export const MtHeading = styled.h3`
  font-size: 48px;
  letter-spacing: -2px;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: 980px) {
    font-size: 34px;
  }
`;

export const MtAccentHeading = styled(MtHeading)`
  color: var(--red);
`;

export const MtDescription = styled.p`
  color: var(--color-text-soft-dark);
  font-size: var(--font-size-description);
  line-height: 1.7;
  margin: 0;
  width: 420px;

  @media (max-width: 980px) {
    width: auto;
  }
`;

export const MtPointsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MtPointItem = styled.li`
  align-items: center;
  color: #ffffff80;
  display: inline-flex;
  gap: 12px;
  font-size: 13px;

  svg {
    color: var(--red);
    height: 18px;
    width: 18px;
  }
`;

export const MtPrice = styled.strong`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const CategoryTilesRow = styled(Container)`
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(3, 1fr);
  height: 360px;

  @media (max-width: 1360px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

export const CategoryTileRoot = styled.article`
  overflow: hidden;
  position: relative;

  @media (max-width: 1360px) {
    min-height: 320px;
  }
`;

export const CategoryTileCopy = styled.div`
  bottom: 26px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  left: 32px;
  position: absolute;
  z-index: 2;

  @media (max-width: 980px) {
    left: 20px;
    right: 20px;
    width: auto;
  }
`;

export const CategoryTileTag = styled.p`
  color: var(--red);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  margin: 0;
  text-transform: uppercase;
`;

export const CategoryTileTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0;
  text-transform: uppercase;
`;

export const CategoryTilePrice = styled.p`
  color: #ffffff80;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 0;
  text-transform: uppercase;
`;

export const CategoryTileLink = styled.a`
  inset: 0;
  position: absolute;
  z-index: 3;
`;

export const CategoryTileArrow = styled.div`
  color: #ffffff40;
  height: 24px;
  position: absolute;
  right: 26px;
  top: 20px;
  width: 24px;
`;

export const FeaturedBottomCta = styled(Container)`
  align-items: center;
  background: #0d0d0d;
  border-top: 1px solid #ffffff08;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  min-height: 138px;
  padding: 48px 0;

  @media (max-width: 980px) {
    align-items: flex-start;
    flex-direction: column;
    padding: 28px 0;
  }
`;

export const FeaturedBottomTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin: 0;
  text-transform: uppercase;
`;

export const FeaturedBottomDescription = styled.p`
  color: #ffffff40;
  font-size: var(--font-size-description);
  margin: 4px 0 0;
`;

export const FeaturedCtaButton = styled.a`
  align-items: center;
  background: var(--red);
  color: #fff;
  display: inline-flex;
  gap: 10px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 14px 32px;
  text-transform: uppercase;

  svg {
    height: 16px;
    width: 16px;
  }
`;

export const FeaturedModelSpotlightRoot = styled.article`
  background: #1a1a1a;
  height: 600vh;
  margin-top: 28px;
  overflow-x: clip;
  position: relative;

  @media (max-width: 980px) {
    height: 450vh;
    margin-top: 20px;
  }
`;

export const FeaturedModelSpotlightGrid = styled(Container)`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: clamp(48px, 8vw, 96px) 0;
  position: sticky;
  top: 0;

  @media (max-width: 1160px) {
    display: block;
    height: 100vh;
    padding: 0 20px;
    position: sticky;
    top: 0;
  }
`;

export const FeaturedModelSpotlightCallout = styled.div<{
  $position: "top-left" | "right" | "bottom-left";
}>`
  color: #fff;
  max-width: clamp(240px, 28vw, 380px);
  opacity: 0;
  position: absolute;
  will-change: opacity, transform;
  z-index: 2;

  ${({ $position }) => {
    switch ($position) {
      case "top-left":
        return `left: 0; top: 20%;`;
      case "right":
        return `right: 0; top: 40%; text-align: right;`;
      case "bottom-left":
        return `left: 0; bottom: 12%;`;
    }
  }}

  @media (max-width: 1160px) {
    bottom: auto;
    left: 20px;
    max-width: none;
    position: absolute;
    right: 20px;
    text-align: left;
    top: auto;
    bottom: 10%;
  }
`;

export const FeaturedModelSpotlightCalloutNumber = styled.p`
  color: #ffffff55;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 0 0 10px;
  text-transform: uppercase;
`;

export const FeaturedModelSpotlightCalloutTitle = styled.h4`
  font-size: clamp(32px, 4.5vw, 64px);
  font-style: italic;
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 0.9;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: 1160px) {
    font-size: 28px;
    letter-spacing: -1px;
  }
`;

export const FeaturedModelSpotlightCalloutDescription = styled.p`
  color: #ffffffaa;
  font-size: var(--font-size-description);
  line-height: 1.5;
  margin: 14px 0 0;
`;

export const FeaturedModelSpotlightStage = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 1;

  &::before {
    background: radial-gradient(circle at center, #ffffff08 0%, transparent 70%);
    border-radius: 50%;
    content: "";
    height: 120%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
  }

  @media (max-width: 1160px) {
    height: 40vh;
    margin: 6vh auto 0;
    width: 100%;
  }
`;

export const FeaturedModelSpotlightImageWrap = styled.div`
  filter: drop-shadow(0 32px 56px #00000090);
  position: relative;
  width: min(85%, 1100px);
  will-change: transform;

  img,
  canvas {
    display: block;
    height: auto;
    object-fit: contain;
    width: 100%;
  }

  @media (max-width: 1160px) {
    width: min(80%, 300px);
  }
`;
