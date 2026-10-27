import type { DealerLocation } from "@/data/site-content.types";

export function getDealerMarkerLabel(dealer: DealerLocation) {
  if (dealer.serviceTags.includes("yqs")) return "YQS";
  if (dealer.category === "big bike") return "BB";
  if (dealer.category === "authorized dealer") return "AD";
  return dealer.category
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}
