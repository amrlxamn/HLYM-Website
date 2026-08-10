import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { Map as MapboxMap, MapMouseEvent } from "mapbox-gl";
import { useDealerMapPopup } from "./use-dealer-map-popup";

describe("useDealerMapPopup", () => {
  it("opens only on marker selection and closes on map interactions", () => {
    const listeners = new Map<string, (event?: MapMouseEvent) => void>();
    const onSelectDealer = vi.fn();
    const queryRenderedFeatures = vi.fn(() => []);
    const map = {
      getLayer: vi.fn(() => ({})),
      off: vi.fn((event: string) => listeners.delete(event)),
      on: vi.fn((event: string, listener: (event?: MapMouseEvent) => void) => {
        listeners.set(event, listener);
      }),
      queryRenderedFeatures
    } as unknown as MapboxMap;
    const view = renderHook(
      ({ selectedDealerId }) =>
        useDealerMapPopup({ mapInstance: map, onSelectDealer, selectedDealerId }),
      { initialProps: { selectedDealerId: "dealer-one" } }
    );

    expect(view.result.current.popupDealerId).toBeNull();

    act(() => view.result.current.openPopup("dealer-one"));
    expect(onSelectDealer).toHaveBeenCalledWith("dealer-one");
    expect(view.result.current.popupDealerId).toBe("dealer-one");

    act(() => listeners.get("dragstart")?.());
    expect(view.result.current.popupDealerId).toBeNull();

    act(() => view.result.current.openPopup("dealer-one"));
    queryRenderedFeatures.mockReturnValueOnce([{} as never]);
    act(() => listeners.get("click")?.({ point: { x: 10, y: 10 } } as MapMouseEvent));
    expect(view.result.current.popupDealerId).toBe("dealer-one");

    act(() => listeners.get("click")?.({ point: { x: 10, y: 10 } } as MapMouseEvent));
    expect(queryRenderedFeatures).toHaveBeenCalled();
    expect(view.result.current.popupDealerId).toBeNull();

    act(() => view.result.current.openPopup("dealer-two"));
    view.rerender({ selectedDealerId: "dealer-two" });
    expect(view.result.current.popupDealerId).toBe("dealer-two");

    view.rerender({ selectedDealerId: "dealer-three" });
    expect(view.result.current.popupDealerId).toBeNull();
  });
});
