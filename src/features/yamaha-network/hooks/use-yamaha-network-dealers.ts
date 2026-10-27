import { useEffect, useState } from "react";
import { getAssetUrl } from "@/lib/get-asset-url";
import type { YamahaDealerDataset, YamahaDealerLocation } from "../yamaha-network.types";

const VERIFIED_DEALER_IMAGES: Readonly<Record<string, string>> = {
  "ah-hong-motor-sdn-bhd-3-17377-101-692398": getAssetUrl("hlym/dealer-ah-hong-motor.png"),
  "lw-auto-parts-sdn-bhd-3-233681-101-673726": getAssetUrl("hlym/dealer-lw-auto-parts.png")
};

type YamahaNetworkDealersState = {
  dealers: readonly YamahaDealerLocation[];
  error: string | null;
  isLoading: boolean;
};

const INITIAL_STATE: YamahaNetworkDealersState = {
  dealers: [],
  error: null,
  isLoading: true
};

let cachedDealers: readonly YamahaDealerLocation[] | null = null;
let dealersRequest: Promise<readonly YamahaDealerLocation[]> | null = null;

function loadDealers() {
  if (!dealersRequest) {
    dealersRequest = fetch(new URL("../yamaha-dealers.json", import.meta.url))
      .then(async (response) => {
        if (!response.ok) throw new Error(`Dealer data returned ${response.status}`);
        return (await response.json()) as YamahaDealerDataset;
      })
      .then((dataset) => {
        if (
          !Array.isArray(dataset.dealers) ||
          dataset.dealers.length !== dataset.count ||
          !dataset.dealers.every((dealer) => dealer.categories.length > 0)
        ) {
          throw new Error("Dealer data is incomplete");
        }

        cachedDealers = dataset.dealers.map((dealer) => ({
          ...dealer,
          image: dealer.image ?? VERIFIED_DEALER_IMAGES[dealer.id],
          area: dealer.region,
          category: dealer.categories[0]!,
          focus: dealer.categories.join(", "),
          locality: dealer.address,
          serviceTags: dealer.categories,
          summary: dealer.address
        }));
        return cachedDealers;
      })
      .catch((error: unknown) => {
        dealersRequest = null;
        throw error;
      });
  }

  return dealersRequest;
}

export function useYamahaNetworkDealers() {
  const [state, setState] = useState<YamahaNetworkDealersState>(() =>
    cachedDealers ? { dealers: cachedDealers, error: null, isLoading: false } : INITIAL_STATE
  );

  useEffect(() => {
    if (cachedDealers) return;
    let cancelled = false;

    void loadDealers().then(
      (dealers) => {
        if (!cancelled) setState({ dealers, error: null, isLoading: false });
      },
      () => {
        if (!cancelled) {
          setState({ dealers: [], error: "Dealer directory is unavailable.", isLoading: false });
        }
      }
    );

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
