import styled from "styled-components";
import { Container } from "@/styles/layout";

export const HeaderShell = styled.header<{ $overlay: boolean }>`
  --utility-foreground: ${({ $overlay }) =>
    $overlay ? "var(--color-text-primary)" : "var(--color-text-inverse)"};
  display: ${({ $overlay }) => ($overlay ? "block" : "contents")};
  inset: ${({ $overlay }) => ($overlay ? "0 0 auto" : "auto")};
  pointer-events: ${({ $overlay }) => ($overlay ? "none" : "auto")};
  position: ${({ $overlay }) => ($overlay ? "absolute" : "static")};
  width: 100%;
  z-index: ${({ $overlay }) => ($overlay ? "var(--z-sticky)" : "auto")};

  > * {
    pointer-events: auto;
  }

  html[data-products-curtain] & {
    --utility-foreground: var(--color-text-primary);
  }
`;

export const UtilityBarShell = styled.div`
  background: transparent;
  height: var(--header-height-utility);
  position: relative;
  z-index: 60;
`;

export const UtilityInner = styled(Container)`
  align-items: center;
  display: flex;
  gap: var(--space-4);
  height: 100%;
  justify-content: space-between;
`;

export const UtilityLeft = styled.div`
  align-items: center;
  display: flex;
  gap: var(--space-3);

  svg {
    color: var(--utility-foreground);
  }
`;

export const UtilityRight = styled.div`
  align-items: center;
  display: flex;
  gap: var(--space-3);

  @media (max-width: 1360px) {
    display: none;
  }
`;

export const LanguageWrap = styled.div`
  align-items: center;
  display: flex;
  gap: var(--space-3);
`;

export const LanguageOptionRow = styled.div`
  align-items: center;
  display: inline-flex;
  gap: var(--space-3);
`;

export const LanguageItem = styled.span<{ $active: boolean }>`
  align-items: center;
  background: ${({ $active }) => ($active ? "var(--color-brand-500)" : "transparent")};
  display: inline-flex;
  gap: 6px;
  padding: var(--space-1) var(--space-2);

  img {
    border-radius: var(--radius-pill);
    height: 18px;
    width: 18px;
  }

  span {
    color: ${({ $active }) =>
      $active ? "var(--color-text-inverse)" : "var(--utility-foreground)"};
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const UtilityDivider = styled.span`
  color: var(--utility-foreground);
  font-size: 11px;
`;

export const UtilityLinkRow = styled.div`
  align-items: center;
  display: inline-flex;
  gap: var(--space-3);
`;

export const UtilityLink = styled.a`
  color: var(--utility-foreground);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap;
`;
