import styled from "styled-components";
import { Container } from "@/styles/layout";

export const ProductColorsRoot = styled.section`
  background: var(--color-bg-muted);
  color: var(--color-text-primary);
  min-height: calc(100vh - var(--header-height-total));
  overflow: hidden;
  position: relative;
`;

export const ProductColorsInner = styled(Container)`
  align-items: center;
  display: flex;
  gap: var(--space-8);
  min-height: calc(100vh - var(--header-height-total));
  padding-bottom: 48px;
  padding-top: 48px;

  @media (max-width: 860px) {
    flex-direction: column;
    gap: 20px;
    padding-bottom: 32px;
    padding-top: 32px;
  }
`;

export const ProductColorPanel = styled.div`
  align-items: center;
  display: flex;
  flex: none;
  justify-content: center;
  width: calc(var(--space-24) * 2);
  z-index: 2;

  @media (max-width: 980px) {
    flex-direction: column;
    gap: var(--space-2);
    justify-content: center;
    margin-top: var(--space-3);
    order: 2;
    width: 100%;
  }
`;

export const ProductColorCurrentName = styled.strong`
  display: none;

  @media (max-width: 980px) {
    color: var(--color-text-primary);
    display: block;
    font-size: var(--font-size-sm);
    font-weight: 600;
    letter-spacing: var(--tracking-wider);
    line-height: 1.2;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const ProductSwatchGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  justify-content: center;
  width: 100%;

  @media (max-width: 980px) {
    flex-direction: row;
    gap: var(--space-2);
    max-width: 100%;
    width: auto;
  }
`;

export const ProductSwatchButton = styled.button<{ $isActive: boolean }>`
  align-items: center;
  color: ${({ $isActive }) =>
    $isActive ? "var(--color-text-primary)" : "var(--color-text-muted-light)"};
  display: flex;
  min-height: var(--space-6);
  padding: 0;
  width: 100%;

  @media (max-width: 980px) {
    flex: 0 0 44px;
    height: 44px;
    justify-content: center;
    min-height: 44px;
    width: 44px;
  }
`;

export const ProductColorOptionMeta = styled.span`
  align-items: center;
  display: grid;
  grid-template-columns: minmax(0, 1fr) var(--space-4);
  position: relative;
  width: 100%;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const ProductColorName = styled.strong`
  color: inherit;
  font-size: var(--font-size-sm);
  font-weight: 600;
  letter-spacing: var(--tracking-wider);
  line-height: 1.2;
  max-width: calc(var(--space-24) * 2 - var(--space-4) - 10px);
  position: absolute;
  right: calc(var(--space-4) + 10px);
  top: 50%;
  transform: translateY(-50%);
  text-transform: uppercase;
  text-align: right;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const ProductColorSelectionIndicator = styled.span<{
  $isActive: boolean;
  $swatch: string;
}>`
  background-image: url("${({ $swatch }) => $swatch}");
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  grid-column: 2;
  height: var(--space-4);
  justify-self: end;
  outline: ${({ $isActive }) => ($isActive ? "2px solid var(--red)" : "none")};
  outline-offset: 3px;
  width: var(--space-4);

  @media (max-width: 980px) {
    grid-column: 1;
    justify-self: center;
  }
`;

export const ProductColorStage = styled.div`
  align-items: center;
  display: grid;
  min-height: 0;
  flex: 1 1 auto;
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
