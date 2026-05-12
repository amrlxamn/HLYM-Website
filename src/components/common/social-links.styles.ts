import styled from "styled-components";

export const SocialLinksRoot = styled.div<{
  $tone: "inverse" | "primary";
  $variant: "compact" | "round";
}>`
  align-items: center;
  display: flex;
  gap: ${({ $variant }) => ($variant === "compact" ? "12px" : "20px")};

  a {
    background: ${({ $tone, $variant }) =>
      $variant === "round" && $tone === "inverse" ? "#ffffff06" : "transparent"};
    border: ${({ $tone, $variant }) => {
      if ($variant !== "round") {
        return "1px solid transparent";
      }

      return $tone === "inverse" ? "1px solid #ffffff15" : "1px solid var(--color-border-subtle)";
    }};
    display: grid;
    height: ${({ $variant }) => ($variant === "round" ? "40px" : "auto")};
    place-items: center;
    width: ${({ $variant }) => ($variant === "round" ? "40px" : "auto")};
  }

  svg {
    color: ${({ $tone }) =>
      $tone === "inverse" ? "var(--color-text-soft-dark)" : "var(--color-text-subtle)"};
    height: ${({ $variant }) => ($variant === "compact" ? "14px" : "18px")};
    width: ${({ $variant }) => ($variant === "compact" ? "14px" : "18px")};
  }
`;
