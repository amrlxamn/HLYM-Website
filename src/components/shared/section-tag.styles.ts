import styled from "styled-components";

export const SectionTagRoot = styled.div<{
  $accent: boolean;
  $category: boolean;
  $centered: boolean;
  $lineWidth: "default" | "medium" | "wide";
}>`
  align-items: center;
  display: inline-flex;
  gap: ${({ $accent, $category }) => ($accent && !$category ? "16px" : "12px")};
  justify-content: ${({ $centered }) => ($centered ? "center" : "flex-start")};

  span {
    background: var(--red);
    height: ${({ $category }) => ($category ? "14px" : "2px")};
    width: ${({ $accent, $category, $lineWidth }) => {
      if ($category) {
        return "2px";
      }

      if (!$accent) {
        return "24px";
      }

      if ($lineWidth === "medium") {
        return "32px";
      }

      if ($lineWidth === "wide") {
        return "52px";
      }

      return "40px";
    }};
  }

  p {
    color: ${({ $accent, $category }) => {
      if ($category) {
        return "var(--color-text-inverse)";
      }

      return $accent ? "var(--red)" : "var(--color-text-subtle)";
    }};
    font-size: ${({ $accent, $category }) => ($accent && !$category ? "12px" : "10px")};
    font-weight: ${({ $accent, $category }) => ($accent && !$category ? 700 : 600)};
    letter-spacing: ${({ $accent, $category }) => ($accent && !$category ? "4px" : "3px")};
    margin: 0;
    text-transform: uppercase;
  }
`;
