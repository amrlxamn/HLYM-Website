import { fireEvent, render } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import { DEALER_LOCATIONS } from "@/data/dealer-locations.constants";
import { DealerMapMapboxStage } from "./dealer-map-mapbox-stage";

vi.mock("./use-dealer-map-instance", () => ({
  useDealerMapInstance: () => ({
    canvasRef: { current: null },
    hasMapInitError: true,
    mapInstance: null
  })
}));

vi.mock("./dealer-locator-map.constants", () => ({
  DEALER_LOCATOR_MAP_CONFIG: { accessToken: "pk.test" }
}));

it("shows a real location map when WebGL is unavailable", () => {
  const dealer = DEALER_LOCATIONS[0]!;
  const view = render(
    <DealerMapMapboxStage
      dealers={[dealer]}
      fallbackToImage
      onSelectDealer={vi.fn()}
      route={null}
      selectedDealer={dealer}
      selectedDealerId={dealer.id}
      userCoordinates={null}
    />
  );
  const image = view.getByRole("img", { name: `Map showing ${dealer.label}` });
  const url = new URL(image.getAttribute("src")!);

  expect(url.origin).toBe("https://api.mapbox.com");
  expect(url.pathname).toContain("/mapbox/streets-v12/static/101.564444,3.228056,13/1280x720");
  expect(url.searchParams.get("access_token")).toBe("pk.test");
  expect(view.getByRole("link", { name: /Open full map/ })).toHaveAttribute(
    "href",
    "https://www.google.com/maps/search/?api=1&query=3.228056,101.564444"
  );

  fireEvent.error(image);
  expect(view.getByRole("status")).toHaveTextContent("Mapbox map is unavailable right now.");
});
