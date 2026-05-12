/// <reference types="vitest/config" />
import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
const CONTENT_SECURITY_POLICY = [
    "default-src 'self'",
    "img-src 'self' data: blob:",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "connect-src 'self' https://api.mapbox.com https://events.mapbox.com https://*.tiles.mapbox.com",
    "script-src 'self' 'wasm-unsafe-eval'",
    "worker-src 'self' blob:",
    "child-src 'self' blob:",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'"
].join("; ");
const SECURITY_HEADERS = {
    "Access-Control-Allow-Origin": "https://hlym-website-mockup.vercel.app",
    "Content-Security-Policy": CONTENT_SECURITY_POLICY,
    "Cross-Origin-Opener-Policy": "same-origin",
    "Cross-Origin-Resource-Policy": "same-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=(self), payment=(self)",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block"
};
export default defineConfig({
    plugins: [react()],
    preview: {
        headers: SECURITY_HEADERS
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    },
    server: {
        headers: SECURITY_HEADERS
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
