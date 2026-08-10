import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { Map as MapboxMap } from "mapbox-gl";
import { DEALER_LOCATIONS } from "@/data/dealer-locations.constants";
import { useDealerMapCamera } from "./use-dealer-map-camera";

describe("useDealerMapCamera", () => {
  it("preloads tiles before one deterministic flight and cancels stale movement", () => {
    const listeners = new Map<string, () => void>();
    const map = {
      flyTo: vi.fn(),
      getContainer: () => ({ clientWidth: 1440 }),
      isStyleLoaded: () => true,
      off: vi.fn((event: string) => listeners.delete(event)),
      once: vi.fn((event: string, listener: () => void) => listeners.set(event, listener)),
      stop: vi.fn()
    } as unknown as MapboxMap;

    const view = renderHook(
      ({ dealer }) => useDealerMapCamera({ mapInstance: map, selectedDealer: dealer }),
      { initialProps: { dealer: DEALER_LOCATIONS[0]! } }
    );

    expect(map.flyTo).toHaveBeenCalledTimes(1);
    expect(view.result.current).toBe(true);
    expect(map.flyTo).toHaveBeenLastCalledWith(
      expect.objectContaining({
        center: DEALER_LOCATIONS[0]!.coordinates,
        preloadOnly: true
      })
    );

    act(() => listeners.get("idle")?.());

    expect(view.result.current).toBe(false);
    expect(map.flyTo).toHaveBeenCalledTimes(2);
    expect(map.flyTo).toHaveBeenLastCalledWith(
      expect.objectContaining({ center: DEALER_LOCATIONS[0]!.coordinates })
    );
    expect(map.flyTo).toHaveBeenLastCalledWith(expect.not.objectContaining({ preloadOnly: true }));

    view.rerender({ dealer: DEALER_LOCATIONS[1]! });

    expect(map.stop).toHaveBeenCalled();
    expect(map.flyTo).toHaveBeenCalledTimes(3);
    expect(map.flyTo).toHaveBeenLastCalledWith(
      expect.objectContaining({
        center: DEALER_LOCATIONS[1]!.coordinates,
        preloadOnly: true
      })
    );

    view.unmount();
  });
});
