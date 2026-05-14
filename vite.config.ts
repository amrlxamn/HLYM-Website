/// <reference types="vitest/config" />

import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { PRODUCTION_HEADERS } from "./src/config/deployment-headers.constants";

export default defineConfig({
  plugins: [react()],
  preview: {
    headers: PRODUCTION_HEADERS
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Resource-Policy": "same-origin",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block"
    }
  },
  test: {
    coverage: {
      exclude: [
        ".claude/**",
        "**/node_modules/**",
        ".webflow/**",
        "**/dist/**",
        "deliverables/**",
        "eslint.config.js",
        "proposal/**",
        "src/main.tsx",
        "src/styles/**",
        "src/**/*.types.ts",
        "src/vite-env.d.ts",
        "vite.config.ts"
      ],
      provider: "v8",
      reporter: ["text", "html"]
    },
    environment: "jsdom",
    exclude: [".claude/**", "**/node_modules/**", "deliverables/**", "proposal/**"],
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    setupFiles: "./src/test/setup.ts"
  }
});
