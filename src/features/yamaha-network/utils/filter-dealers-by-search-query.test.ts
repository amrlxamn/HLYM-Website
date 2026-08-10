import { describe, expect, it } from "vitest";
import { DEALER_LOCATIONS } from "@/data/dealer-locations.constants";
import { filterDealersBySearchQuery } from "./filter-dealers-by-search-query";

describe("filterDealersBySearchQuery", () => {
  it("returns all dealers when query is empty", () => {
    expect(filterDealersBySearchQuery(DEALER_LOCATIONS, "")).toHaveLength(DEALER_LOCATIONS.length);
  });

  it("filters dealers by label", () => {
    const result = filterDealersBySearchQuery(DEALER_LOCATIONS, "ah hong");
    expect(result).toHaveLength(1);
    expect(result[0]!.id).toBe("ah-hong-motor-sdn-bhd");
  });

  it("filters dealers by locality", () => {
    const result = filterDealersBySearchQuery(DEALER_LOCATIONS, "kuching");
    expect(result).toHaveLength(1);
    expect(result[0]!.locality).toContain("kuching");
  });

  it("filters dealers by region", () => {
    const result = filterDealersBySearchQuery(DEALER_LOCATIONS, "sabah");
    expect(result.length).toBeGreaterThanOrEqual(2);
    expect(result.every((dealer) => dealer.region === "sabah")).toBe(true);
  });

  it("is case-insensitive", () => {
    const result = filterDealersBySearchQuery(DEALER_LOCATIONS, "KOTA KINABALU");
    expect(result).toHaveLength(1);
  });
});
