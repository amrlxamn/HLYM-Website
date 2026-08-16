import styled from "styled-components";

export const NavLinks = styled.nav`
  align-items: center;
  display: flex;
  gap: var(--space-5);

  @media (max-width: 1360px) {
    gap: var(--space-3);
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
  color: ${({ $active }) => ($active ? "var(--color-brand-500)" : "var(--color-text-primary)")};
  display: inline-flex;
  gap: 6px;
  font-size: 12px;
  font-weight: ${({ $active }) => ($active ? 700 : 600)};
  letter-spacing: 1.5px;
  text-transform: uppercase;
  transition: color var(--duration-base) var(--easing-standard);
  white-space: nowrap;

  &:hover,
  &:focus-visible {
    color: var(--color-brand-500);
  }

  svg {
    height: 18px;
    width: 18px;
  }

  @media (max-width: 1360px) {
    letter-spacing: 0.8px;
  }
`;

export const DropdownMenu = styled.div`
  background: var(--color-neutral-800);
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
    background: var(--color-bg-muted);
    min-width: 0;
    opacity: 1;
    padding: var(--space-1) 0 0 var(--space-4);
    pointer-events: auto;
    position: static;
    transform: none;
    visibility: visible;
  }
`;

export const DropdownLink = styled.a`
  color: var(--color-text-readable-dark);
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
    color: var(--color-text-inverse);
  }

  @media (max-width: 980px) {
    color: var(--color-text-neutral-dark);
    padding: 0.55rem 0;
  }
`;
