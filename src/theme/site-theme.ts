export const siteTheme = {
  colors: {
    background: {
      base: "#0a0a0a",
      canvas: "#ffffff",
      mutedSurface: "#f8f8f8",
      raised: "#0f0f0f",
      surface: "#fafafa"
    },
    border: {
      brandSubtle: "rgba(236, 28, 36, 0.4)",
      muted: "#eaecf0",
      inverse: "#ffffff18",
      subtle: "#00000014"
    },
    brand: {
      marker: "#ee393d",
      primary: "#ec1c24"
    },
    shadow: {
      card: "0 24px 60px rgba(0, 0, 0, 0.14)"
    },
    text: {
      inverse: "#ffffff",
      dim: "#52525b",
      mutedOnDark: "#ffffff80",
      mutedOnLight: "#00000066",
      neutralOnDark: "#989898",
      primary: "#0a0a0a",
      softOnDark: "#ffffff50",
      washOnDark: "rgba(255, 255, 255, 0.47)",
      subtle: "#00000050"
    }
  },
  productColors: {
    electricYellow: "#888a8c",
    violetRush: "#143a52"
  },
  layout: {
    container: "1240px"
  },
  motion: {
    duration: {
      base: "240ms",
      slow: "420ms"
    },
    easing: {
      standard: "cubic-bezier(0.22, 1, 0.36, 1)"
    }
  },
  radii: {
    pill: "999px"
  },
  typography: {
    body: '"Lato", Arial, sans-serif'
  }
} as const;

export type SiteTheme = typeof siteTheme;
