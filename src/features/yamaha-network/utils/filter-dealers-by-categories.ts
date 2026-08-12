import type { DealerCategory } from "@/data/site-content.types";

export function filterDealersByCategories<T extends { categories: readonly DealerCategory[] }>(
  dealers: readonly T[],
  categories: readonly DealerCategory[]
) {
  if (categories.length === 0) {
    return dealers;
  }

  return dealers.filter((dealer) =>
    categories.some((category) => dealer.categories.includes(category))
  );
}
