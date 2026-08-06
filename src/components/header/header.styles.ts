import styled from "styled-components";
import { Container } from "@/styles/layout";

export const HeaderShell = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
`;

export const UtilityBarShell = styled.div`
  background: #111;
  height: var(--header-height-utility);
`;

export const UtilityInner = styled(Container)`
  align-items: center;
  display: flex;
  gap: 1rem;
  height: 100%;
  justify-content: space-between;
`;

export const UtilityLeft = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
`;

export const UtilityRight = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;

  @media (max-width: 1360px) {
    display: none;
  }
`;

export const LanguageWrap = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
`;

export const LanguageOptionRow = styled.div`
  align-items: center;
  display: inline-flex;
`;

export const LanguageItem = styled.span<{ $active: boolean }>`
  align-items: center;
  background: ${({ $active }) => ($active ? "#ec1c24e6" : "transparent")};
  border-radius: ${({ $active }) => ($active ? "2px" : "0")};
  display: inline-flex;
  gap: 6px;
  padding: 4px 8px;

  img {
    border-radius: 999px;
    height: 18px;
    width: 18px;
  }

  span {
    color: ${({ $active }) => ($active ? "#fff" : "#ffffff60")};
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const UtilityDivider = styled.span`
  color: #ffffff20;
  font-size: 11px;
`;

export const UtilityLinkRow = styled.div`
  align-items: center;
  display: inline-flex;
`;

export const UtilityLink = styled.a`
  color: #ffffff55;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const MainNavBar = styled.div`
  background: #fff;
  border-bottom: 1px solid #00000008;
  height: var(--header-height-main);
`;

export const MainNavInner = styled(Container)`
  align-items: center;
  display: flex;
  gap: 16px;
  height: 100%;
  justify-content: space-between;
  position: relative;
`;

export const NavLeft = styled.a`
  align-items: center;
  display: flex;
`;

export const MainLogo = styled.img`
  height: 40px;
  object-fit: contain;
  width: 215px;
`;

export const NavRight = styled.div<{ $isOpen: boolean }>`
  margin-left: auto;

  @media (max-width: 980px) {
    background: #fff;
    border: 1px solid #00000014;
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    left: 1rem;
    padding: 0.8rem;
    position: absolute;
    right: 1rem;
    top: 76px;
  }
`;

export const NavLinks = styled.nav`
  align-items: center;
  display: flex;
  gap: 28px;

  @media (max-width: 1360px) {
    gap: 16px;
  }

  @media (max-width: 980px) {
    display: grid;
    gap: 0.7rem;
    grid-template-columns: 1fr;
  }
`;

export const NavItemWrap = styled.div`
  align-items: center;
  display: inline-flex;
  height: var(--header-height-main);
  position: relative;

  &:focus-within > div,
  &:hover > div {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    visibility: visible;
  }

  @media (max-width: 980px) {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

export const NavLink = styled.a<{ $active: boolean }>`
  align-items: center;
  color: ${({ $active }) => ($active ? "var(--red)" : "#1a1a1a")};
  display: inline-flex;
  gap: 6px;
  font-size: 12px;
  font-weight: ${({ $active }) => ($active ? 700 : 600)};
  letter-spacing: 1.5px;
  text-transform: uppercase;
  white-space: nowrap;

  svg {
    height: 18px;
    width: 18px;
  }

  @media (max-width: 1360px) {
    letter-spacing: 0.8px;
  }
`;

export const DropdownMenu = styled.div`
  background: #242424;
  min-width: 205px;
  opacity: 0;
  padding: 0.45rem 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 100%;
  transform: translateY(-6px);
  transition:
    opacity 160ms ease,
    transform 160ms ease,
    visibility 160ms ease;
  visibility: hidden;
  z-index: 5;

  @media (max-width: 980px) {
    background: #f6f6f6;
    min-width: 0;
    opacity: 1;
    padding: 0.25rem 0 0.15rem 1rem;
    pointer-events: auto;
    position: static;
    transform: none;
    visibility: visible;
  }
`;

export const DropdownLink = styled.a`
  color: #b8b8b8;
  display: block;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 1.3px;
  line-height: 1.2;
  padding: 0.85rem 1.2rem;
  text-transform: uppercase;
  white-space: nowrap;

  &:focus-visible,
  &:hover {
    color: #fff;
  }

  @media (max-width: 980px) {
    color: #3a3a3a;
    padding: 0.55rem 0;
  }
`;

export const SearchButton = styled.button`
  align-items: center;
  color: #1a1a1a;
  display: inline-flex;
  height: 40px;
  justify-content: center;
  width: 40px;

  svg {
    height: 18px;
    width: 18px;
  }
`;

export const MenuToggle = styled.button`
  align-items: center;
  border: 1px solid #0000002a;
  border-radius: 4px;
  color: #1a1a1a;
  display: inline-flex;
  gap: 8px;
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
`;
