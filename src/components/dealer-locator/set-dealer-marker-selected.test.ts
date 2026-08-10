import { describe, expect, it } from "vitest";
import { setDealerMarkerSelected } from "./set-dealer-marker-selected";

describe("setDealerMarkerSelected", () => {
  it("preserves Mapbox positioning classes when selection changes", () => {
    const element = document.createElement("button");
    element.classList.add("dealer-map-marker", "mapboxgl-marker", "mapboxgl-marker-anchor-center");

    setDealerMarkerSelected(element, true);

    expect(element).toHaveClass("dealer-map-marker", "is-selected");
    expect(element).toHaveClass("mapboxgl-marker", "mapboxgl-marker-anchor-center");
    expect(element.style.zIndex).toBe("999");

    setDealerMarkerSelected(element, false);

    expect(element).not.toHaveClass("is-selected");
    expect(element).toHaveClass("mapboxgl-marker", "mapboxgl-marker-anchor-center");
    expect(element.style.zIndex).toBe("1");
  });
});
