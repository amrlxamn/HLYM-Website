import { act, render, waitFor } from "@testing-library/react";
import type { Map } from "mapbox-gl";
import { expect, it, vi } from "vitest";
import { createDealerMapInstance } from "./create-dealer-map-instance";
import { useDealerMapInstance } from "./use-dealer-map-instance";

vi.mock("./create-dealer-map-instance", () => ({ createDealerMapInstance: vi.fn() }));

it("keeps a loaded Mapbox map visible after a recoverable resource error", async () => {
  let onError: (event: { error: Error }) => void = () => {};
  const map = {
    on: vi.fn((name: string, handler: typeof onError) => {
      if (name === "error") onError = handler;
    }),
    once: vi.fn(),
    remove: vi.fn(),
    resize: vi.fn()
  };
  vi.mocked(createDealerMapInstance).mockResolvedValue(map as unknown as Map);

  function MapView() {
    const { canvasRef, hasMapInitError } = useDealerMapInstance();
    return (
      <div>
        <div ref={canvasRef} />
        <span>{hasMapInitError ? "unavailable" : "map ready"}</span>
      </div>
    );
  }

  const view = render(<MapView />);
  await waitFor(() => expect(map.on).toHaveBeenCalledWith("error", expect.any(Function)));

  act(() => onError({ error: new Error("A map tile could not be loaded") }));
  expect(view.getByText("map ready")).toBeInTheDocument();

  act(() => onError({ error: new Error("Not Authorized - Invalid Token") }));
  expect(view.getByText("unavailable")).toBeInTheDocument();
});
