import styled from "styled-components";

export const ModelTabsRoot = styled.div<{ $orientation: "horizontal" | "vertical" }>`
  display: flex;
  ${({ $orientation }) =>
    $orientation === "vertical"
      ? `
        align-items: center;
        flex-direction: column;
        width: 40px;
      `
      : `
        gap: 12px;
        overflow-x: auto;
        padding-bottom: 8px;
      `}

  ${({ $orientation }) =>
    $orientation === "horizontal"
      ? `
        &::-webkit-scrollbar {
          height: 4px;
        }

        &::-webkit-scrollbar-thumb {
          background: #00000020;
        }
      `
      : ""}
`;

export const ModelTabRow = styled.div`
  align-items: center;
  display: inline-flex;
`;

export const ModelTabButton = styled.button<{
  $active: boolean;
  $orientation: "horizontal" | "vertical";
}>`
  background: transparent;
  border: ${({ $orientation }) => ($orientation === "horizontal" ? "1px solid #00000014" : "0")};
  color: ${({ $active, $orientation }) => {
    if ($active) {
      return "var(--red)";
    }

    return $orientation === "vertical" ? "#00000025" : "#00000055";
  }};
  font-size: ${({ $orientation }) => ($orientation === "vertical" ? "9px" : "inherit")};
  font-weight: ${({ $active }) => ($active ? 700 : 600)};
  letter-spacing: ${({ $orientation }) => ($orientation === "vertical" ? "2px" : "normal")};
  padding: ${({ $orientation }) => ($orientation === "vertical" ? "12px 4px" : "12px 18px")};
  text-transform: uppercase;
  transform: ${({ $orientation }) => ($orientation === "vertical" ? "rotate(180deg)" : "none")};
  white-space: nowrap;
  writing-mode: ${({ $orientation }) =>
    $orientation === "vertical" ? "vertical-rl" : "horizontal-tb"};

  &:disabled {
    cursor: default;
    opacity: 1;
  }
`;

export const ModelTabDivider = styled.span<{ $orientation: "horizontal" | "vertical" }>`
  background: #00000012;
  display: ${({ $orientation }) => ($orientation === "vertical" ? "inline-block" : "none")};
  height: 20px;
  width: 1px;
`;
