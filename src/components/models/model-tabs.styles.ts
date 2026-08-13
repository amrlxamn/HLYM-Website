import styled from "styled-components";

export const ModelTabsRoot = styled.div<{
  $orientation: "horizontal" | "vertical";
}>`
  display: flex;
  ${({ $orientation }) =>
    $orientation === "vertical"
      ? `
        align-items: flex-start;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        width: 48px;
      `
      : `
        align-items: center;
        gap: var(--space-3);
        overflow-x: auto;
        padding-bottom: var(--space-2);
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

export const ModelTabRow = styled.div<{
  $active: boolean;
  $orientation: "horizontal" | "vertical";
}>`
  align-items: center;
  display: inline-flex;
  position: relative;

  ${({ $orientation }) =>
    $orientation === "vertical"
      ? `
        align-self: stretch;
        flex-direction: column;
      `
      : ""}
`;

export const ModelTabButton = styled.button<{
  $active: boolean;
  $orientation: "horizontal" | "vertical";
}>`
  background: transparent;
  border: 0;
  color: ${({ $active, $orientation }) => {
    if ($active) {
      return "var(--red)";
    }

    return $orientation === "vertical" ? "#00000025" : "#00000055";
  }};
  font-size: ${({ $orientation }) => ($orientation === "vertical" ? "9px" : "10px")};
  font-weight: ${({ $active }) => ($active ? 700 : 600)};
  letter-spacing: 2px;
  padding: ${({ $orientation }) => ($orientation === "vertical" ? "12px 4px" : "12px 0")};
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
  ${({ $orientation }) =>
    $orientation === "vertical"
      ? `
        background: var(--alpha-black-24);
        display: block;
        height: 8px;
        margin: 8px auto 12px;
        transform: rotate(90deg);
        width: 2px;
      `
      : `
        background: var(--alpha-black-24);
        display: inline-block;
        flex: none;
        height: 8px;
        margin-left: var(--space-3);
        transform: rotate(0deg);
        width: 2px;
      `}
`;
