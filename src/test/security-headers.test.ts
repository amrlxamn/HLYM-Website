import { describe, expect, it } from "vitest";
import { PRODUCTION_HEADERS } from "@/config/deployment-headers.constants";
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

const DEPLOY_HEADERS = new Map(Object.entries(PRODUCTION_HEADERS));
const VERCEL_HEADERS = new Map(
  (VERCEL_CONFIG as VercelConfig).headers
    ?.flatMap((entry) => entry.headers ?? [])
    .map((header) => [header.key, header.value])
);

describe("security headers", () => {
  it("keeps the deployment CSP restricted to required origins", () => {
    const csp = DEPLOY_HEADERS.get("Content-Security-Policy") ?? "";
    expect(csp).toContain("https://api.mapbox.com");
    expect(csp).toContain("https://events.mapbox.com");
    expect(csp).toContain("https://*.tiles.mapbox.com");
    expect(csp).toContain("img-src 'self' data: blob: https://*.supabase.co");
    expect(csp).toContain("media-src 'self' blob: https://*.supabase.co");
    expect(csp).toContain("connect-src");
    expect(csp).toContain("https://*.supabase.co");
    expect(INDEX_HTML).not.toMatch(/\bws:/);
    expect(INDEX_HTML).not.toMatch(/\bhttp:/);
  });

  it("keeps Vercel headers in parity with shared deployment headers", () => {
    expect(VERCEL_HEADERS).toEqual(DEPLOY_HEADERS);
  });

  it("does not expose the implementation stack in public metadata", () => {
    expect(INDEX_HTML).not.toMatch(/\bReact\b/i);
    expect(INDEX_HTML).not.toMatch(/\bTypeScript\b/i);
    expect(INDEX_HTML).not.toMatch(/\bVite\b/i);
  });

  it("sets deployment headers for browser hardening", () => {
    expect(DEPLOY_HEADERS.get("Access-Control-Allow-Origin")).toBe(
      "https://yamaha-motor.vercel.app"
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
