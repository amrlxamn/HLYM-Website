import styled from "styled-components";

export const ProductSubHeaderTabs = styled.nav`
  align-items: stretch;
  display: flex;
  gap: 34px;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProductSubHeaderTab = styled.a`
  align-items: center;
  border-bottom: 2px solid transparent;
  color: var(--color-text-primary);
  display: inline-flex;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.6px;
  opacity: 0.78;
  padding: 0;
  text-transform: uppercase;
  transition:
    color var(--duration-base) var(--easing-standard),
    border-color var(--duration-base) var(--easing-standard),
    opacity var(--duration-base) var(--easing-standard);
  white-space: nowrap;

  &:hover {
    border-color: var(--red);
    color: var(--color-text-primary);
    opacity: 1;
  }

  &[aria-current="location"],
  &[aria-current="page"] {
    border-color: var(--red);
    opacity: 1;
  }

  @media (max-width: 760px) {
    gap: 18px;
    font-size: 10px;
    letter-spacing: 1px;
  }
`;
