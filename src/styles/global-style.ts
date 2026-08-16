import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-brand-50: ${({ theme }) => theme.colors.brand[50]};
    --color-brand-100: ${({ theme }) => theme.colors.brand[100]};
    --color-brand-200: ${({ theme }) => theme.colors.brand[200]};
    --color-brand-300: ${({ theme }) => theme.colors.brand[300]};
    --color-brand-400: ${({ theme }) => theme.colors.brand[400]};
    --color-brand-500: ${({ theme }) => theme.colors.brand[500]};
    --color-brand-600: ${({ theme }) => theme.colors.brand[600]};
    --color-brand-700: ${({ theme }) => theme.colors.brand[700]};
    --color-brand-800: ${({ theme }) => theme.colors.brand[800]};
    --color-brand-900: ${({ theme }) => theme.colors.brand[900]};
    --color-brand-950: ${({ theme }) => theme.colors.brand[950]};
    --color-neutral-50: ${({ theme }) => theme.colors.neutral[50]};
    --color-neutral-100: ${({ theme }) => theme.colors.neutral[100]};
    --color-neutral-200: ${({ theme }) => theme.colors.neutral[200]};
    --color-neutral-300: ${({ theme }) => theme.colors.neutral[300]};
    --color-neutral-400: ${({ theme }) => theme.colors.neutral[400]};
    --color-neutral-500: ${({ theme }) => theme.colors.neutral[500]};
    --color-neutral-600: ${({ theme }) => theme.colors.neutral[600]};
    --color-neutral-700: ${({ theme }) => theme.colors.neutral[700]};
    --color-neutral-800: ${({ theme }) => theme.colors.neutral[800]};
    --color-neutral-900: ${({ theme }) => theme.colors.neutral[900]};
    --color-neutral-950: ${({ theme }) => theme.colors.neutral[950]};
    --color-success: ${({ theme }) => theme.colors.semantic.success};
    --color-success-surface: ${({ theme }) => theme.colors.semantic.successSurface};
    --color-warning: ${({ theme }) => theme.colors.semantic.warning};
    --color-warning-surface: ${({ theme }) => theme.colors.semantic.warningSurface};
    --color-error: ${({ theme }) => theme.colors.semantic.error};
    --color-error-surface: ${({ theme }) => theme.colors.semantic.errorSurface};
    --color-info: ${({ theme }) => theme.colors.semantic.info};
    --color-info-surface: ${({ theme }) => theme.colors.semantic.infoSurface};
    --alpha-white-04: ${({ theme }) => theme.alpha.white04};
    --alpha-white-08: ${({ theme }) => theme.alpha.white08};
    --alpha-white-12: ${({ theme }) => theme.alpha.white12};
    --alpha-white-20: ${({ theme }) => theme.alpha.white20};
    --alpha-white-40: ${({ theme }) => theme.alpha.white40};
    --alpha-white-60: ${({ theme }) => theme.alpha.white60};
    --alpha-brand-08: ${({ theme }) => theme.alpha.brand08};
    --alpha-brand-12: ${({ theme }) => theme.alpha.brand12};
    --alpha-brand-20: ${({ theme }) => theme.alpha.brand20};
    --alpha-brand-40: ${({ theme }) => theme.alpha.brand40};
    --alpha-black-04: ${({ theme }) => theme.alpha.black04};
    --alpha-black-08: ${({ theme }) => theme.alpha.black08};
    --alpha-black-14: ${({ theme }) => theme.alpha.black14};
    --alpha-black-24: ${({ theme }) => theme.alpha.black24};
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
    --color-text-readable-dark: ${({ theme }) => theme.colors.text.readableOnDark};
    --color-text-soft-dark: ${({ theme }) => theme.colors.text.softOnDark};
    --color-text-subtle: ${({ theme }) => theme.colors.text.subtle};
    --color-text-wash-dark: ${({ theme }) => theme.colors.text.washOnDark};
    --contact-hero-gradient-left: ${({ theme }) => theme.contactHero.gradients.leftShade};
    --contact-hero-gradient-vertical: ${({ theme }) => theme.contactHero.gradients.verticalShade};
    --contact-search-border: ${({ theme }) => theme.contactHero.search.border};
    --contact-search-inset: ${({ theme }) => theme.contactHero.search.inset};
    --contact-search-shadow: ${({ theme }) => theme.contactHero.search.shadow};
    --contact-search-surface: ${({ theme }) => theme.contactHero.search.surface};
    --product-color-electric-yellow: ${({ theme }) => theme.productColors.electricYellow};
    --product-color-violet-rush: ${({ theme }) => theme.productColors.violetRush};
    --container: ${({ theme }) => theme.layout.container};
    --duration-fast: ${({ theme }) => theme.motion.duration.fast};
    --duration-press: ${({ theme }) => theme.motion.duration.press};
    --duration-base: ${({ theme }) => theme.motion.duration.base};
    --duration-slow: ${({ theme }) => theme.motion.duration.slow};
    --duration-reveal: ${({ theme }) => theme.motion.duration.reveal};
    --easing-standard: ${({ theme }) => theme.motion.easing.standard};
    --easing-out: ${({ theme }) => theme.motion.easing.out};
    --easing-in-out: ${({ theme }) => theme.motion.easing.inOut};
    --easing-drawer: ${({ theme }) => theme.motion.easing.drawer};
    --header-height-main: 76px;
    --header-height-utility: 70px;
    --header-height-total: calc(
      var(--header-height-main) + var(--header-height-utility)
    );
    --font-family-base: ${({ theme }) => theme.typography.body};
    --font-family-display: ${({ theme }) => theme.typography.family.display};
    --font-family-mono: ${({ theme }) => theme.typography.family.mono};
    --font-size-xs: ${({ theme }) => theme.typography.size.xs};
    --font-size-sm: ${({ theme }) => theme.typography.size.sm};
    --font-size-base: ${({ theme }) => theme.typography.size.base};
    --font-size-md: ${({ theme }) => theme.typography.size.md};
    --font-size-lg: ${({ theme }) => theme.typography.size.lg};
    --font-size-xl: ${({ theme }) => theme.typography.size.xl};
    --font-size-2xl: ${({ theme }) => theme.typography.size["2xl"]};
    --font-size-3xl: ${({ theme }) => theme.typography.size["3xl"]};
    --font-size-4xl: ${({ theme }) => theme.typography.size["4xl"]};
    --font-size-5xl: ${({ theme }) => theme.typography.size["5xl"]};
    --font-size-6xl: ${({ theme }) => theme.typography.size["6xl"]};
    --font-size-7xl: ${({ theme }) => theme.typography.size["7xl"]};
    --font-size-8xl: ${({ theme }) => theme.typography.size["8xl"]};
    --font-size-description: ${({ theme }) => theme.typography.size.lg};
    --font-weight-light: ${({ theme }) => theme.typography.weight.light};
    --font-weight-normal: ${({ theme }) => theme.typography.weight.normal};
    --font-weight-medium: ${({ theme }) => theme.typography.weight.medium};
    --font-weight-semibold: ${({ theme }) => theme.typography.weight.semibold};
    --font-weight-bold: ${({ theme }) => theme.typography.weight.bold};
    --font-weight-extrabold: ${({ theme }) => theme.typography.weight.extrabold};
    --font-weight-black: ${({ theme }) => theme.typography.weight.black};
    --leading-none: ${({ theme }) => theme.typography.lineHeight.none};
    --leading-tight: ${({ theme }) => theme.typography.lineHeight.tight};
    --leading-snug: ${({ theme }) => theme.typography.lineHeight.snug};
    --leading-normal: ${({ theme }) => theme.typography.lineHeight.normal};
    --leading-relaxed: ${({ theme }) => theme.typography.lineHeight.relaxed};
    --leading-loose: ${({ theme }) => theme.typography.lineHeight.loose};
    --tracking-tighter: ${({ theme }) => theme.typography.letterSpacing.tighter};
    --tracking-tight: ${({ theme }) => theme.typography.letterSpacing.tight};
    --tracking-normal: ${({ theme }) => theme.typography.letterSpacing.normal};
    --tracking-wide: ${({ theme }) => theme.typography.letterSpacing.wide};
    --tracking-wider: ${({ theme }) => theme.typography.letterSpacing.wider};
    --tracking-widest: ${({ theme }) => theme.typography.letterSpacing.widest};
    --red: ${({ theme }) => theme.colors.brand.primary};
    --red-marker: ${({ theme }) => theme.colors.brand.marker};
    --space-0: ${({ theme }) => theme.spacing[0]};
    --space-0-5: ${({ theme }) => theme.spacing[0.5]};
    --space-1: ${({ theme }) => theme.spacing[1]};
    --space-2: ${({ theme }) => theme.spacing[2]};
    --space-3: ${({ theme }) => theme.spacing[3]};
    --space-4: ${({ theme }) => theme.spacing[4]};
    --space-5: ${({ theme }) => theme.spacing[5]};
    --space-6: ${({ theme }) => theme.spacing[6]};
    --space-8: ${({ theme }) => theme.spacing[8]};
    --space-10: ${({ theme }) => theme.spacing[10]};
    --space-12: ${({ theme }) => theme.spacing[12]};
    --space-16: ${({ theme }) => theme.spacing[16]};
    --space-20: ${({ theme }) => theme.spacing[20]};
    --space-24: ${({ theme }) => theme.spacing[24]};
    --space-30: ${({ theme }) => theme.spacing[30]};
    --radius-none: ${({ theme }) => theme.radii.none};
    --radius-xs: ${({ theme }) => theme.radii.xs};
    --radius-sm: ${({ theme }) => theme.radii.sm};
    --radius-md: ${({ theme }) => theme.radii.md};
    --radius-lg: ${({ theme }) => theme.radii.lg};
    --radius-xl: ${({ theme }) => theme.radii.xl};
    --radius-2xl: ${({ theme }) => theme.radii["2xl"]};
    --radius-pill: ${({ theme }) => theme.radii.pill};
    --shadow-xs: ${({ theme }) => theme.shadows.xs};
    --shadow-sm: ${({ theme }) => theme.shadows.sm};
    --shadow-md: ${({ theme }) => theme.shadows.md};
    --shadow-lg: ${({ theme }) => theme.shadows.lg};
    --shadow-xl: ${({ theme }) => theme.shadows.xl};
    --shadow-card: ${({ theme }) => theme.shadows.lg};
    --shadow-focus: ${({ theme }) => theme.shadows.focus};
    --container-prose: ${({ theme }) => theme.containers.prose};
    --container-compact: ${({ theme }) => theme.containers.compact};
    --container-default: ${({ theme }) => theme.containers.default};
    --container-wide: ${({ theme }) => theme.containers.wide};
    --z-base: ${({ theme }) => theme.zIndex.base};
    --z-raised: ${({ theme }) => theme.zIndex.raised};
    --z-dropdown: ${({ theme }) => theme.zIndex.dropdown};
    --z-sticky: ${({ theme }) => theme.zIndex.sticky};
    --z-sidebar: ${({ theme }) => theme.zIndex.sidebar};
    --z-overlay: ${({ theme }) => theme.zIndex.overlay};
    --z-modal: ${({ theme }) => theme.zIndex.modal};
    --z-toast: ${({ theme }) => theme.zIndex.toast};
    --z-splash: ${({ theme }) => theme.zIndex.splash};
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
    outline: 2px solid var(--color-brand-500);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      scroll-behavior: auto !important;
      transition-duration: 1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
    }
  }
`;
