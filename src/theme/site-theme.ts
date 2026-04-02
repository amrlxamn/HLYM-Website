export const siteTheme = {
  colors: {
    background: {
      base: "#0a0a0a",
      mutedSurface: "#f8f8f8",
      surface: "#fafafa"
    },
    border: {
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
      mutedOnDark: "#ffffff80",
      mutedOnLight: "#00000066",
      primary: "#0a0a0a",
      softOnDark: "#ffffff50",
      subtle: "#00000050"
    }
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
    body: '"Inter", sans-serif'
  }
} as const;

export type SiteTheme = typeof siteTheme;
