import { describe, expect, it } from "vitest";
import { isDealerOpenNow } from "./is-dealer-open-now";

describe("isDealerOpenNow", () => {
  it("supports dot-separated Malaysian business hours", () => {
    const malaysiaTenAm = new Date("2026-08-11T02:00:00.000Z");

    expect(isDealerOpenNow("8.30AM - 5.30PM", malaysiaTenAm)).toBe(true);
  });

  it("supports colon-separated hours and reports after-hours closure", () => {
    const malaysiaEightPm = new Date("2026-08-11T12:00:00.000Z");

    expect(isDealerOpenNow("9AM–6:30PM", malaysiaEightPm)).toBe(false);
  });

  it("respects weekday ranges in Malaysia", () => {
    const malaysiaSundayMorning = new Date("2026-08-09T02:00:00.000Z");

    expect(isDealerOpenNow("mon - sat | 9:00 am - 6:00 pm", malaysiaSundayMorning)).toBe(false);
  });

  it("reports explicit and unavailable hours as closed", () => {
    expect(isDealerOpenNow("CLOSED")).toBe(false);
    expect(isDealerOpenNow("")).toBe(false);
  });
});
