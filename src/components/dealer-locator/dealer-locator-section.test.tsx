import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { afterEach } from "vitest";
import type { BrowserCoordinates, DealerRoute } from "./dealer-location.types";

const originalGeolocation = navigator.geolocation;

vi.mock("./dealer-map-stage", () => ({
  DealerMapStageView: ({
    dealers,
    onSelectDealer,
    route,
    userCoordinates
  }: {
    dealers: readonly { id: string }[];
    onSelectDealer: (dealerId: string) => void;
    route: DealerRoute | null;
    userCoordinates: BrowserCoordinates | null;
  }) => (
    <div>
      <p>{`marker count: ${dealers.length}`}</p>
      <p>{userCoordinates ? "user location active" : "user location idle"}</p>
      <p>{route ? "route ready" : "route idle"}</p>
      <button onClick={() => onSelectDealer("ah-hong-motor-sdn-bhd")} type="button">
        switch dealer
      </button>
    </div>
  )
}));

import { DealerLocatorSection } from "./dealer-locator-section";

afterEach(() => {
  cleanup();
  Object.defineProperty(navigator, "geolocation", {
    configurable: true,
    value: originalGeolocation
  });
});

describe("DealerLocatorSection", () => {
  it("renders the default dealer details", () => {
    const view = render(<DealerLocatorSection />);

    expect(
      view.getByRole("heading", { name: "search your nearest yamaha dealer" })
    ).toBeInTheDocument();
    expect(view.getByText("kompleks yamaha motor")).toBeInTheDocument();
    expect(view.getByText("selected dealer")).toBeInTheDocument();
    expect(view.getByText("available support")).toBeInTheDocument();
    expect(view.queryByText("best for")).not.toBeInTheDocument();
    expect(view.queryByText("coverage")).not.toBeInTheDocument();
    expect(view.getByRole("tab", { name: "central" })).toHaveAttribute("aria-selected", "true");
    expect(view.getByRole("tab", { name: "northern" })).toBeInTheDocument();
    expect(view.getByRole("tab", { name: "southern" })).toBeInTheDocument();
    expect(view.getByRole("tab", { name: "sabah" })).toBeInTheDocument();
    expect(view.getByRole("tab", { name: "sarawak" })).toBeInTheDocument();
    expect(view.getByRole("button", { name: "Show previous dealer" })).toBeInTheDocument();
    expect(view.getByRole("button", { name: "Show next dealer" })).toBeInTheDocument();
    expect(view.getByText("marker count: 2")).toBeInTheDocument();
    expect(view.getByText("user location idle")).toBeInTheDocument();
  });

  it("updates the dealer panel when another marker is selected", async () => {
    const view = render(<DealerLocatorSection />);

    fireEvent.click(view.getAllByRole("button", { name: "switch dealer" })[0]!);

    await waitFor(() => {
      expect(view.getByText("ah hong motor sdn bhd")).toBeInTheDocument();
    });

    expect(view.getByText(/commuter servicing/i)).toBeInTheDocument();
  });

  it("updates the dealer panel when a region tab is selected", async () => {
    const view = render(<DealerLocatorSection />);

    fireEvent.click(view.getByRole("tab", { name: "northern" }));

    await waitFor(() => {
      expect(view.getByText("brightwill trading sdn bhd")).toBeInTheDocument();
    });

    expect(view.getByText("marker count: 2")).toBeInTheDocument();
    expect(view.getByRole("tab", { name: "northern" })).toHaveAttribute("aria-selected", "true");
  });

  it("shows the sabah markers when the sabah region is selected", async () => {
    const view = render(<DealerLocatorSection />);

    fireEvent.click(view.getByRole("tab", { name: "sabah" }));

    await waitFor(() => {
      expect(view.getByText("inti deras motors sdn bhd")).toBeInTheDocument();
    });

    expect(view.getByText("marker count: 2")).toBeInTheDocument();
  });

  it("cycles the dealer info card with the chevron controls", async () => {
    const view = render(<DealerLocatorSection />);

    fireEvent.click(view.getByRole("button", { name: "Show next dealer" }));

    await waitFor(() => {
      expect(view.getByText("ah hong motor sdn bhd")).toBeInTheDocument();
    });

    fireEvent.click(view.getByRole("button", { name: "Show previous dealer" }));

    await waitFor(() => {
      expect(view.getByText("kompleks yamaha motor")).toBeInTheDocument();
    });
  });

  it("selects the nearest dealer after the browser location is enabled", async () => {
    Object.defineProperty(navigator, "geolocation", {
      configurable: true,
      value: {
        getCurrentPosition: (
          onSuccess: (position: { coords: { latitude: number; longitude: number } }) => void
        ) => {
          onSuccess({
            coords: {
              latitude: 3.1794,
              longitude: 101.6924
            }
          });
        }
      }
    });

    const view = render(<DealerLocatorSection />);

    await waitFor(() => {
      expect(view.getByRole("heading", { name: "ah hong motor sdn bhd" })).toBeInTheDocument();
    });

    expect(view.getByText("route ready")).toBeInTheDocument();
    expect(view.getByText("user location active")).toBeInTheDocument();
  });
});
