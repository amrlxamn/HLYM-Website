import styled from "styled-components";
import { Container } from "@/styles/layout";

export const MainNavigationRoot = styled.div`
  display: contents;
`;

export const MainNavBar = styled.div`
  height: var(--header-height-main);
  position: sticky;
  top: var(--space-4);
  z-index: 50;
`;

export const MainNavInner = styled(Container)<{
  $curtainActive: boolean;
  $fullWidth: boolean;
}>`
  background: var(--color-bg-canvas);
  border-bottom: 1px solid var(--alpha-black-08);
  box-shadow: ${({ $curtainActive }) => ($curtainActive ? "none" : "var(--shadow-xs)")};
  height: 100%;
  max-width: ${({ $fullWidth }) => ($fullWidth ? "none" : "1280px")};
  position: relative;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "calc(100% - var(--space-16))")};

  @media (max-width: 1360px) {
    width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "calc(100% - var(--space-12))")};
  }

  @media (max-width: 980px) {
    width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "calc(100% - var(--space-8))")};
  }

  @media (max-width: 640px) {
    width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "calc(100% - var(--space-4))")};
  }
`;

export const MainNavContent = styled(Container)`
  align-items: center;
  display: flex;
  gap: var(--space-4);
  height: 100%;
  justify-content: space-between;

  @media (max-width: 980px) {
    width: calc(100% - var(--space-8));
  }

  @media (max-width: 640px) {
    gap: var(--space-2);
    width: calc(100% - var(--space-6));
  }
`;

export const NavLeft = styled.a`
  align-items: center;
  display: flex;
`;

export const MainLogo = styled.img`
  height: 40px;
  object-fit: contain;
  width: 215px;

  @media (max-width: 980px) {
    width: 180px;
  }

  @media (max-width: 640px) {
    height: 34px;
    width: 145px;
  }
`;

export const NavRight = styled.div<{ $isOpen: boolean }>`
  margin-left: auto;

  @media (max-width: 980px) {
    background: var(--color-bg-canvas);
    border: 1px solid var(--alpha-black-14);
    box-shadow: var(--shadow-sm);
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    left: var(--space-4);
    padding: var(--space-3);
    position: absolute;
    right: var(--space-4);
    top: calc(var(--header-height-main) - var(--space-1));
  }
`;

export const SearchButton = styled.button`
  align-items: center;
  color: var(--color-text-primary);
  display: inline-flex;
  height: 40px;
  justify-content: center;
  width: 40px;

  svg {
    height: 18px;
    width: 18px;
  }

  @media (max-width: 640px) {
    height: 36px;
    width: 36px;
  }
`;

export const MenuToggle = styled.button`
  align-items: center;
  border: 1px solid var(--alpha-black-24);
  color: var(--color-text-primary);
  display: inline-flex;
  gap: var(--space-2);
  justify-content: center;
  min-height: 34px;
  padding: 0 10px;

  span {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }

  svg {
    height: 18px;
    width: 18px;
  }

  @media (min-width: 981px) {
    display: none;
  }

  @media (max-width: 420px) {
    padding: 0 var(--space-2);

    span {
      display: none;
    }
  }
`;
