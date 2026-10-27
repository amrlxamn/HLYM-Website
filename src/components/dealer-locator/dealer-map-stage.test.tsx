import { render } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import { DEALER_LOCATIONS } from "@/data/dealer-locations.constants";
import { DealerMapStageView } from "./dealer-map-stage";

vi.mock("./dealer-locator-map.constants", () => ({
  DEALER_LOCATOR_MAP_CONFIG: { accessToken: "" }
}));

it("explains missing Mapbox configuration instead of displaying another provider", () => {
  const dealer = DEALER_LOCATIONS[0]!;
  const view = render(
    <DealerMapStageView
      dealers={[dealer]}
      fillParent
      onSelectDealer={vi.fn()}
      route={null}
      selectedDealer={dealer}
      selectedDealerId={dealer.id}
      userCoordinates={null}
    />
  );

  expect(view.getByRole("status")).toHaveTextContent("Mapbox map is unavailable right now.");
  expect(view.getByRole("link", { name: `Open ${dealer.label} in Maps` })).toHaveAttribute(
    "href",
    "https://www.google.com/maps/search/?api=1&query=3.228056,101.564444"
  );
});
