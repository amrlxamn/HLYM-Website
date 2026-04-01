import type { DealerLocation } from "@/data/site-content.types";

export function getAdjacentDealerId(
  dealerId: string,
  dealers: readonly DealerLocation[],
  step: 1 | -1
) {
  if (dealers.length === 0) {
    return dealerId;
  }

  const currentIndex = dealers.findIndex((dealer) => dealer.id === dealerId);
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const nextIndex = (safeIndex + step + dealers.length) % dealers.length;

  return dealers[nextIndex]!.id;
}
