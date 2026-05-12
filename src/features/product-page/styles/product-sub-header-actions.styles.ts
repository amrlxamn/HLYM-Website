import styled from "styled-components";

export const ProductSubHeaderActions = styled.div`
  align-items: center;
  display: flex;
  padding-left: 36px;

  @media (max-width: 760px) {
    padding-left: 18px;
  }
`;

export const ProductSubHeaderCta = styled.a`
  align-items: center;
  color: var(--color-text-primary);
  display: inline-flex;
  gap: 4px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  transition: color var(--duration-base) var(--easing-standard);
  white-space: nowrap;

  svg {
    color: var(--red);
  }

  &:hover {
    color: var(--red);
  }

  @media (max-width: 760px) {
    font-size: 10px;
  }
`;
