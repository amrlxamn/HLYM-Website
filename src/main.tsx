import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { App } from "@/app/app";
import { AppThemeProvider } from "@/theme/app-theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </StrictMode>
);
