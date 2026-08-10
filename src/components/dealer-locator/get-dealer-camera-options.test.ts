import { describe, expect, it } from "vitest";
import { DEALER_LOCATIONS } from "@/data/dealer-locations.constants";
import { getDealerCameraOptions } from "./get-dealer-camera-options";

describe("getDealerCameraOptions", () => {
  it("centers desktop dealers in the visible area beside the panel", () => {
    const options = getDealerCameraOptions(DEALER_LOCATIONS[0]!, 1440);

    expect(options.center).toEqual(DEALER_LOCATIONS[0]!.coordinates);
    expect(options.offset).toEqual([248, 0]);
  });

  it("uses the map center without a horizontal offset on mobile", () => {
    const options = getDealerCameraOptions(DEALER_LOCATIONS[0]!, 900);

    expect(options.offset).toEqual([0, 0]);
  });
});
