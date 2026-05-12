import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg: ${({ theme }) => theme.colors.background.base};
    --color-bg-canvas: ${({ theme }) => theme.colors.background.canvas};
    --color-bg-muted: ${({ theme }) => theme.colors.background.mutedSurface};
    --color-bg-primary: ${({ theme }) => theme.colors.background.base};
    --color-bg-raised: ${({ theme }) => theme.colors.background.raised};
    --color-bg-surface: ${({ theme }) => theme.colors.background.surface};
    --color-border-brand-subtle: ${({ theme }) => theme.colors.border.brandSubtle};
    --color-border-inverse: ${({ theme }) => theme.colors.border.inverse};
    --color-border-muted: ${({ theme }) => theme.colors.border.muted};
    --color-border-subtle: ${({ theme }) => theme.colors.border.subtle};
    --color-text-dim: ${({ theme }) => theme.colors.text.dim};
    --color-text-inverse: ${({ theme }) => theme.colors.text.inverse};
    --color-text-muted-dark: ${({ theme }) => theme.colors.text.mutedOnDark};
    --color-text-muted-light: ${({ theme }) => theme.colors.text.mutedOnLight};
    --color-text-neutral-dark: ${({ theme }) => theme.colors.text.neutralOnDark};
    --color-text-primary: ${({ theme }) => theme.colors.text.primary};
    --color-text-soft-dark: ${({ theme }) => theme.colors.text.softOnDark};
    --color-text-subtle: ${({ theme }) => theme.colors.text.subtle};
    --color-text-wash-dark: ${({ theme }) => theme.colors.text.washOnDark};
    --product-color-electric-yellow: ${({ theme }) => theme.productColors.electricYellow};
    --product-color-violet-rush: ${({ theme }) => theme.productColors.violetRush};
    --container: ${({ theme }) => theme.layout.container};
    --duration-base: ${({ theme }) => theme.motion.duration.base};
    --easing-standard: ${({ theme }) => theme.motion.easing.standard};
    --header-height-main: 76px;
    --header-height-utility: 34px;
    --header-height-total: calc(
      var(--header-height-main) + var(--header-height-utility)
    );
    --font-family-base: ${({ theme }) => theme.typography.body};
    --font-size-description: 16px;
    --red: ${({ theme }) => theme.colors.brand.primary};
    --red-marker: ${({ theme }) => theme.colors.brand.marker};
    --radius-pill: ${({ theme }) => theme.radii.pill};
    --shadow-card: ${({ theme }) => theme.colors.shadow.card};
  }

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    margin: 0;
    min-height: 100%;
    overflow-x: clip;
    padding: 0;
  }

  body {
    background: var(--bg);
    color: var(--color-text-inverse);
    font-family: ${({ theme }) => theme.typography.body};
    overflow-x: clip; /* clip instead of hidden — hidden breaks position: sticky */
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input {
    font: inherit;
  }

  button {
    background: transparent;
    border: 0;
    color: inherit;
    cursor: pointer;
  }

  img {
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  :focus-visible {
    outline: 2px solid var(--red);
    outline-offset: 3px;
  }
`;
