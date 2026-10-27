import type { DealerLocation } from "@/data/site-content.types";
import { DealerMapUnavailableRoot } from "./dealer-locator.styles";

export function DealerMapUnavailable({ dealer }: { dealer: DealerLocation }) {
  const [longitude, latitude] = dealer.coordinates;

  return (
    <DealerMapUnavailableRoot role="status">
      <p>Mapbox map is unavailable right now.</p>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        Open {dealer.label} in Maps
      </a>
    </DealerMapUnavailableRoot>
  );
}
