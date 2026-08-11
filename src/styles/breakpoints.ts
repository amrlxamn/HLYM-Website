import { css } from "styled-components";
import { BREAKPOINTS } from "@/theme/tokens/layout-tokens.constants";

export const media = {
  sm: (styles: ReturnType<typeof css>) => css`
    @media (max-width: ${BREAKPOINTS.sm}) {
      ${styles}
    }
  `,
  md: (styles: ReturnType<typeof css>) => css`
    @media (max-width: ${BREAKPOINTS.md}) {
      ${styles}
    }
  `,
  lg: (styles: ReturnType<typeof css>) => css`
    @media (max-width: ${BREAKPOINTS.lg}) {
      ${styles}
    }
  `,
  xl: (styles: ReturnType<typeof css>) => css`
    @media (max-width: ${BREAKPOINTS.xl}) {
      ${styles}
    }
  `
} as const;
