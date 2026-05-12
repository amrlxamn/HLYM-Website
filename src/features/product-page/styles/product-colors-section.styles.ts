import styled from "styled-components";
import { Container } from "@/styles/layout";

export const ProductColorsRoot = styled.section`
  background: var(--color-bg-surface);
  color: var(--color-text-primary);
  min-height: calc(100vh - var(--header-height-total));
  overflow: hidden;
  position: relative;
`;

export const ProductColorsInner = styled(Container)`
  align-items: center;
  display: grid;
  gap: 24px;
  grid-template-rows: minmax(0, 1fr) auto;
  min-height: calc(100vh - var(--header-height-total));
  padding-bottom: 48px;
  padding-top: 48px;

  @media (max-width: 860px) {
    gap: 20px;
    padding-bottom: 32px;
    padding-top: 32px;
  }
`;

export const ProductColorPanel = styled.div`
  align-items: center;
  display: grid;
  gap: 10px;
  justify-items: center;
  justify-self: center;
  z-index: 2;
`;

export const ProductSwatchGrid = styled.div`
  display: grid;
  gap: 4px;
  grid-template-columns: repeat(4, 1fr);
`;

export const ProductSwatchButton = styled.button<{ $isActive: boolean }>`
  background: var(--color-bg-muted);
  border: 1px solid
    ${({ $isActive }) => ($isActive ? "var(--color-text-primary)" : "var(--color-border-subtle)")};
  border-radius: 0;
  height: 36px;
  overflow: hidden;
  padding: 0;
  width: 36px;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

export const ProductColorName = styled.strong`
  color: var(--color-text-primary);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.2;
`;

export const ProductColorStage = styled.div`
  align-items: center;
  display: grid;
  min-height: 0;
  position: relative;
  width: 100%;

  img {
    filter: drop-shadow(var(--shadow-card));
    height: auto;
    justify-self: center;
    max-width: 960px;
    object-fit: contain;
    width: min(100%, 960px);
  }

  @media (max-width: 860px) {
    align-self: end;
  }
`;
