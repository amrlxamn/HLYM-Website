import { useEffect, useState } from "react";
import type { BrowserCoordinates } from "./dealer-location.types";

export function useBrowserLocation() {
  const [coordinates, setCoordinates] = useState<BrowserCoordinates | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setCoordinates([coords.longitude, coords.latitude]);
      },
      () => {},
      {
        enableHighAccuracy: true,
        maximumAge: 60_000,
        timeout: 12_000
      }
    );
  }, []);

  return {
    coordinates
  };
}
