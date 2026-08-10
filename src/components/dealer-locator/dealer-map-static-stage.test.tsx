import { cleanup, fireEvent, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { DEALER_LOCATIONS } from "@/data/dealer-locations.constants";
import { DealerMapStaticStage } from "./dealer-map-static-stage";

afterEach(() => {
  cleanup();
});

describe("DealerMapStaticStage", () => {
  it("renders a clickable marker for each visible dealer", () => {
    const onSelectDealer = vi.fn();
    const sabahDealers = DEALER_LOCATIONS.filter((dealer) => dealer.region === "sabah");
    const view = render(
      <DealerMapStaticStage
        dealers={sabahDealers}
        onSelectDealer={onSelectDealer}
        selectedDealerId={sabahDealers[0]!.id}
      />
    );

    const selectedMarker = view.getByRole("button", {
      name: "Show inti deras motors sdn bhd"
    });
    const secondMarker = view.getByRole("button", {
      name: "Show shiang chin motors batteries sdn bhd"
    });

    expect(selectedMarker).toHaveClass("is-selected");
    expect(selectedMarker).not.toHaveClass("is-popup-open");
    expect(view.getByText("inti deras motors sdn bhd")).toBeInTheDocument();
    fireEvent.click(secondMarker);

    expect(onSelectDealer).toHaveBeenCalledWith("shiang-chin-motors-batteries-sdn-bhd");
    expect(secondMarker).toHaveClass("is-popup-open");

    fireEvent.click(view.container.firstElementChild!);

    expect(secondMarker).not.toHaveClass("is-popup-open");
  });
});
