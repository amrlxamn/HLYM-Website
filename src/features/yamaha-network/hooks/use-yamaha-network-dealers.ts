import { useEffect, useState } from "react";
import type { YamahaDealerDataset, YamahaDealerLocation } from "../yamaha-network.types";

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

export function useYamahaNetworkDealers() {
  const [state, setState] = useState<YamahaNetworkDealersState>(INITIAL_STATE);

  useEffect(() => {
    const abortController = new AbortController();
    const datasetUrl = new URL("../yamaha-dealers.json", import.meta.url);

    void fetch(datasetUrl, { signal: abortController.signal })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Dealer data returned ${response.status}`);
        }

        return (await response.json()) as YamahaDealerDataset;
      })
      .then((dataset) => {
        const isComplete =
          Array.isArray(dataset.dealers) &&
          dataset.dealers.length === dataset.count &&
          dataset.dealers.every((dealer) => dealer.categories.length > 0);

        if (!isComplete) {
          throw new Error("Dealer data is incomplete");
        }

        const dealers = dataset.dealers.map((dealer) => ({
          ...dealer,
          area: dealer.region,
          category: dealer.categories[0]!,
          focus: dealer.categories.join(", "),
          locality: dealer.address,
          serviceTags: dealer.categories,
          summary: dealer.address
        }));

        setState({ dealers, error: null, isLoading: false });
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        setState({ dealers: [], error: "Dealer directory is unavailable.", isLoading: false });
      });

    return () => abortController.abort();
  }, []);

  return state;
}
