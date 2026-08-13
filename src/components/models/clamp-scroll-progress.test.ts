import { describe, expect, it } from "vitest";
import { clampScrollProgress } from "./clamp-scroll-progress";

describe("clampScrollProgress", () => {
  it("prevents scroll bounce from moving progress beyond either endpoint", () => {
    expect(clampScrollProgress(-0.2)).toBe(0);
    expect(clampScrollProgress(0.5)).toBe(0.5);
    expect(clampScrollProgress(1.2)).toBe(1);
  });
});
