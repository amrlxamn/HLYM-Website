import styled from "styled-components";
import { Container } from "@/styles/layout";

export const HeroSectionRoot = styled.section`
  height: 900px;
  overflow: hidden;
  position: relative;

  @media (max-width: 980px) {
    height: 780px;
  }
`;

export const HeroBackground = styled.img`
  height: 100%;
  inset: 0;
  object-position: center;
  position: absolute;
  width: 100%;
`;

export const HeroTopGradient = styled.div`
  background: linear-gradient(180deg, #0a0a0aee 0%, #0a0a0abb 40%, #0a0a0a00 100%);
  height: 450px;
  inset: 0;
  position: absolute;
`;

export const HeroBottomGradient = styled.div`
  background: linear-gradient(180deg, #0a0a0a00 0%, #0a0a0a99 40%, #0a0a0aee 80%, #0a0a0a 100%);
  height: 450px;
  inset: 0;
  position: absolute;
  top: 450px;
`;

export const HeroVignette = styled.div`
  background: radial-gradient(circle at 50% 45%, #0a0a0a00 20%, #0a0a0a88 100%);
  inset: 0;
  position: absolute;
`;

export const HeroSideIndicator = styled.div<{ $gap: string; $position: "left" | "right" }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap};
  position: absolute;
  top: 400px;
  z-index: 4;
  ${({ $position }) => ($position === "left" ? "left: 50px;" : "right: 70px;")}

  > span {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 2px;
  }

  @media (max-width: 1360px) {
    ${({ $position }) => ($position === "right" ? "right: 22px;" : "")}
  }

  @media (max-width: 980px) {
    display: none;
  }
`;

export const HeroIndicatorLine = styled.span<{ $color: string; $height: string }>`
  background: ${({ $color }) => $color};
  height: ${({ $height }) => $height};
  width: 1px;
`;

export const HeroMutedText = styled.span`
  color: #ffffff25;
`;

export const HeroScrollText = styled.span`
  color: #ffffff25;
  font-size: 9px;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

export const HeroCenter = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 740px;
  position: relative;
  top: 60px;
  z-index: 5;

  @media (max-width: 980px) {
    height: 640px;
    top: 30px;
  }
`;

export const HeroTagRow = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 16px;

  span {
    background: var(--red);
    height: 1px;
    width: 32px;
  }

  p {
    color: #ffffff60;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 5px;
    margin: 0;
    text-transform: uppercase;
  }
`;

export const HeroTitle = styled.h1`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 110px;
  font-weight: 700;
  letter-spacing: 6px;
  line-height: 0.92;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: 980px) {
    font-size: 70px;
    letter-spacing: 3px;
  }

  @media (max-width: 640px) {
    font-size: 52px;
  }
`;

export const HeroTitleAccent = styled.span`
  color: var(--red);
`;

export const HeroDescription = styled.p`
  color: #ffffff55;
  font-size: var(--font-size-description);
  line-height: 1.6;
  margin: 0;
  text-align: center;
  width: 480px;

  @media (max-width: 980px) {
    width: min(480px, 100%);
  }
`;

export const HeroCtaRow = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const HeroCtaLink = styled.a`
  align-items: center;
  background: var(--red);
  color: #fff;
  display: inline-flex;
  gap: 10px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 16px 40px;
  text-transform: uppercase;

  svg {
    height: 16px;
    width: 16px;
  }

  @media (max-width: 640px) {
    justify-content: center;
    width: 100%;
  }
`;

export const HeroBottomBar = styled.div`
  background: #0a0a0ae6;
  border-top: 1px solid #ffffff08;
  bottom: 0;
  height: 90px;
  left: 0;
  position: absolute;
  right: 0;
  z-index: 6;

  @media (max-width: 980px) {
    height: auto;
    padding: 14px 0;
  }
`;

export const HeroBottomInner = styled(Container)`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;

  @media (max-width: 980px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 14px;
  }
`;

export const HeroStats = styled.div`
  align-items: center;
  display: flex;
  gap: 40px;

  @media (max-width: 980px) {
    gap: 16px;
    justify-content: space-between;
    width: 100%;
  }
`;

export const HeroStatGroup = styled.div`
  align-items: center;
  display: inline-flex;
`;

export const HeroStat = styled.div`
  align-items: flex-end;
  display: inline-flex;
  gap: 12px;

  strong {
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 0.85;
  }

  span {
    color: #ffffff40;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  @media (max-width: 980px) {
    strong {
      font-size: 28px;
    }
  }
`;

export const HeroDivider = styled.span`
  background: #ffffff12;
  display: inline-block;
  height: 40px;
  width: 1px;
`;

export const HeroRightMeta = styled.div`
  align-items: center;
  display: flex;
  gap: 40px;

  @media (max-width: 980px) {
    flex-direction: column;
    gap: 16px;
    justify-content: space-between;
    width: 100%;
  }
`;

export const HeroPriceWrap = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 2px;

  span {
    color: #ffffff35;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  strong {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

export const HeroArrowWrap = styled.div`
  display: inline-flex;
`;

export const HeroArrowButton = styled.button<{ $active: boolean }>`
  background: ${({ $active }) => ($active ? "var(--red)" : "transparent")};
  border: 1px solid ${({ $active }) => ($active ? "var(--red)" : "#ffffff18")};
  color: ${({ $active }) => ($active ? "#fff" : "#ffffff50")};
  display: grid;
  height: 48px;
  place-items: center;
  width: 48px;
`;

export const HeroRedLine = styled.div`
  background: linear-gradient(90deg, #ec1c24 0%, #ec1c2400 15%, #ec1c2400 85%, #ec1c24 100%);
  bottom: 0;
  height: 3px;
  left: 0;
  position: absolute;
  right: 0;
  z-index: 7;
`;
