import { expect, it } from "vitest";
import dataset from "../yamaha-dealers.json";
import { getDealerState } from "./get-dealer-state";

it("assigns a state to every dealer in the directory, including city-only addresses", () => {
  expect(
    dataset.dealers.filter((dealer) => getDealerState(dealer.address) === "Other locations")
  ).toEqual([]);
  expect(getDealerState("60 & 61 Jln Tuanku Munawir, 70000 Seremban")).toBe("Negeri Sembilan");
  expect(getDealerState("No. 988 Jalan Mersing, 86000 Kluang")).toBe("Johor");
});
