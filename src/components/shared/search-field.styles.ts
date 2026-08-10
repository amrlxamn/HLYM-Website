import styled, { css } from "styled-components";

type SearchFieldVariant = "gloss" | "plain";

type SearchFieldRootProps = {
  $backgroundImage: string;
  $variant: SearchFieldVariant;
};

export const SearchFieldRoot = styled.div<SearchFieldRootProps>`
  align-items: center;
  background: ${({ $variant }) =>
    $variant === "gloss" ? "rgba(12, 12, 14, 0.28)" : "var(--color-bg-muted)"};
  border: 1px solid
    ${({ $variant }) =>
      $variant === "gloss" ? "rgba(255, 255, 255, 0.24)" : "var(--color-border-subtle)"};
  box-shadow: ${({ $variant }) =>
    $variant === "gloss"
      ? "0 20px 12px rgba(0, 0, 0, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.08)"
      : "none"};
  display: flex;
  flex: 1 1 auto;
  height: ${({ $variant }) => ($variant === "plain" ? "44px" : "auto")};
  isolation: isolate;
  max-width: ${({ $variant }) => ($variant === "gloss" ? "600px" : "none")};
  min-width: 0;
  overflow: hidden;
  position: relative;
  width: 100%;

  &::before {
    background:
      linear-gradient(rgba(12, 12, 14, 0.06), rgba(12, 12, 14, 0.18)),
      url("${({ $backgroundImage }) => $backgroundImage}") center / cover no-repeat;
    content: "";
    display: ${({ $variant }) => ($variant === "gloss" ? "block" : "none")};
    filter: blur(20px) saturate(130%);
    inset: -24px;
    opacity: 0.82;
    pointer-events: none;
    position: absolute;
    transform: scale(1.08);
    z-index: 0;
  }

  &::after {
    background:
      linear-gradient(90deg, rgba(255, 255, 255, 0.08), transparent 32%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(8, 8, 10, 0.2)),
      rgba(10, 10, 12, 0.18);
    content: "";
    display: ${({ $variant }) => ($variant === "gloss" ? "block" : "none")};
    inset: 0;
    pointer-events: none;
    position: absolute;
    z-index: 0;
  }

  &:focus-within {
    border-color: ${({ $variant }) =>
      $variant === "gloss" ? "rgba(255, 255, 255, 0.48)" : "var(--red)"};
  }

  ${({ $variant }) =>
    $variant === "gloss" &&
    css`
      @supports ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
        -webkit-backdrop-filter: blur(8px) saturate(115%);
        backdrop-filter: blur(8px) saturate(115%);
      }
    `}
`;

export const SearchFieldIcon = styled.span<{ $variant: SearchFieldVariant }>`
  align-items: center;
  background: ${({ $variant }) =>
    $variant === "gloss" ? "rgba(10, 10, 10, 0.16)" : "var(--color-bg-muted)"};
  border-right: 1px solid
    ${({ $variant }) =>
      $variant === "gloss" ? "rgba(255, 255, 255, 0.1)" : "var(--color-border-subtle)"};
  color: ${({ $variant }) =>
    $variant === "gloss" ? "var(--color-text-inverse)" : "var(--color-text-primary)"};
  display: inline-flex;
  flex: 0 0 auto;
  height: ${({ $variant }) => ($variant === "plain" ? "100%" : "auto")};
  padding: ${({ $variant }) => ($variant === "gloss" ? "14px 16px" : "0 16px")};
  position: relative;
  z-index: 1;

  svg {
    height: 16px;
    width: 16px;
  }
`;

export const SearchFieldInput = styled.input<{ $variant: SearchFieldVariant }>`
  background: transparent;
  border: 0;
  color: ${({ $variant }) =>
    $variant === "gloss" ? "var(--color-text-inverse)" : "var(--color-text-primary)"};
  flex: 1;
  font-size: 14px;
  line-height: 23px;
  min-width: 0;
  height: ${({ $variant }) => ($variant === "plain" ? "100%" : "auto")};
  padding: ${({ $variant }) => ($variant === "gloss" ? "14px 16px" : "0 16px")};
  position: relative;
  z-index: 1;

  &::placeholder {
    color: ${({ $variant }) =>
      $variant === "gloss" ? "var(--color-text-inverse)" : "var(--color-text-subtle)"};
    opacity: 0.9;
  }
`;
