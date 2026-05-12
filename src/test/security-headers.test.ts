import { describe, expect, it } from "vitest";
import INDEX_HTML from "../../index.html?raw";
import VERCEL_CONFIG from "../../vercel.json";

type VercelHeader = {
  key: string;
  value: string;
};

type VercelConfig = {
  headers?: Array<{
    headers?: VercelHeader[];
  }>;
};

const DEPLOY_HEADERS = new Map(
  (VERCEL_CONFIG as VercelConfig).headers
    ?.flatMap((entry) => entry.headers ?? [])
    .map((header) => [header.key, header.value])
);

describe("security headers", () => {
  it("keeps the public CSP restricted to required origins", () => {
    expect(INDEX_HTML).not.toMatch(/\bws:/);
    expect(INDEX_HTML).not.toMatch(/\bhttp:/);
    expect(INDEX_HTML).toContain("https://api.mapbox.com");
    expect(INDEX_HTML).toContain("https://events.mapbox.com");
    expect(INDEX_HTML).toContain("https://*.tiles.mapbox.com");
  });

  it("does not expose the implementation stack in public metadata", () => {
    expect(INDEX_HTML).not.toMatch(/\bReact\b/i);
    expect(INDEX_HTML).not.toMatch(/\bTypeScript\b/i);
    expect(INDEX_HTML).not.toMatch(/\bVite\b/i);
  });

  it("sets deployment headers for browser hardening", () => {
    expect(DEPLOY_HEADERS.get("Access-Control-Allow-Origin")).toBe(
      "https://hlym-website-mockup.vercel.app"
    );
    expect(DEPLOY_HEADERS.get("Access-Control-Allow-Origin")).not.toBe("*");
    expect(DEPLOY_HEADERS.get("Content-Security-Policy")).toContain("frame-ancestors 'none'");
    expect(DEPLOY_HEADERS.get("Cross-Origin-Opener-Policy")).toBe("same-origin");
    expect(DEPLOY_HEADERS.get("Cross-Origin-Resource-Policy")).toBe("same-origin");
    expect(DEPLOY_HEADERS.get("Permissions-Policy")).toBe(
      "camera=(), microphone=(), geolocation=(self), payment=(self)"
    );
    expect(DEPLOY_HEADERS.get("X-Content-Type-Options")).toBe("nosniff");
    expect(DEPLOY_HEADERS.get("X-Frame-Options")).toBe("DENY");
    expect(DEPLOY_HEADERS.get("X-XSS-Protection")).toBe("1; mode=block");
  });
});
