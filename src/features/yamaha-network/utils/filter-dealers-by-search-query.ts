import type { DealerLocation } from "@/data/site-content.types";

export function filterDealersBySearchQuery<T extends DealerLocation>(
  dealers: readonly T[],
  query: string
): readonly T[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (normalizedQuery.length === 0) {
    return dealers;
  }

  return dealers.filter((dealer) => {
    const haystack = [dealer.label, dealer.locality, dealer.area, dealer.region]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}
