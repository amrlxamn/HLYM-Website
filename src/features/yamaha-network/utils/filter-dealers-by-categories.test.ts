import { describe, expect, it } from "vitest";
import { filterDealersByCategories } from "./filter-dealers-by-categories";

const DEALERS = [
  { categories: ["authorized dealer", "yqs"] as const, id: "one" },
  { categories: ["big bike"] as const, id: "two" },
  { categories: ["star shop"] as const, id: "three" }
];

describe("filterDealersByCategories", () => {
  it("returns every dealer when no categories are selected", () => {
    expect(filterDealersByCategories(DEALERS, [])).toEqual(DEALERS);
  });

  it("matches dealers in any selected category", () => {
    const dealers = filterDealersByCategories(DEALERS, ["yqs", "big bike"]);

    expect(dealers.map((dealer) => dealer.id)).toEqual(["one", "two"]);
  });
});
