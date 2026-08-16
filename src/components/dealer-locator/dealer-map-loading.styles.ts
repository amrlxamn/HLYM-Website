import styled, { css } from "styled-components";

export const DealerMapLoading = styled.div<{ $corner: "top" | "bottom" }>`
  backdrop-filter: blur(14px);
  background: color-mix(in srgb, var(--color-bg-primary) 82%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-text-inverse) 20%, transparent);
  border-radius: 0;
  color: var(--color-text-inverse);
  font-family: var(--font-family-base);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  max-width: min(320px, calc(100vw - 32px));
  overflow: hidden;
  padding: 10px 14px;
  position: absolute;
  right: 72px;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
  z-index: 6;

  /* When the zoom control sits bottom-right (dealer network page), sit the
     loading label beside it instead of the top corner. */
  ${({ $corner }) =>
    $corner === "bottom"
      ? css`
          bottom: var(--space-4);
          right: calc(var(--space-4) + 54px);
          top: auto;
        `
      : css`
          top: 18px;
        `}
`;
