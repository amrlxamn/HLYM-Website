import { describe, expect, it } from "vitest";
import { DEALER_LOCATIONS } from "@/data/dealer-locations.constants";
import { getNearestDealer } from "./get-nearest-dealer";

describe("getNearestDealer", () => {
  it("returns the closest dealer to the current browser position", () => {
    const nearestDealer = getNearestDealer([101.6924, 3.1794], DEALER_LOCATIONS);

    expect(nearestDealer?.id).toBe("ah-hong-motor-sdn-bhd");
  });
});
