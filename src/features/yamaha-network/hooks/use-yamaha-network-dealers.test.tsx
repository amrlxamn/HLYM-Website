import { fireEvent, render, renderHook, waitFor } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import dataset from "../yamaha-dealers.json";
import { YamahaNetworkSidebar } from "../components/yamaha-network-sidebar";
import { useYamahaNetworkDealers } from "./use-yamaha-network-dealers";
import { useYamahaNetworkState } from "./use-yamaha-network-state";

afterEach(() => {
  vi.unstubAllGlobals();
  window.history.replaceState({}, "", "/");
});

it("caches the dealer directory and scopes state and category links to matching dealers", async () => {
  const photoDealer = dataset.dealers.find((dealer) => dealer.label === "AH HONG MOTOR SDN. BHD")!;
  const records = [...dataset.dealers.slice(0, 2), photoDealer];
  const fetchMock = vi.fn().mockResolvedValue({
    json: async () => ({ count: records.length, dealers: records }),
    ok: true
  });
  vi.stubGlobal("fetch", fetchMock);

  const first = renderHook(() => useYamahaNetworkDealers());
  await waitFor(() => expect(first.result.current.dealers).toHaveLength(3));
  first.unmount();

  const second = renderHook(() => useYamahaNetworkDealers());
  expect(second.result.current.isLoading).toBe(false);
  expect(fetchMock).toHaveBeenCalledTimes(1);
  expect(second.result.current.dealers[2]!.image).toBe("/assets/hlym/dealer-ah-hong-motor.png");

  window.history.replaceState({}, "", "/yamaha-network?state=Perak&category=ygp%20store");
  const filters = renderHook(() => useYamahaNetworkState(second.result.current.dealers));
  expect(filters.result.current.scopedDealers.map((dealer) => dealer.id)).toEqual([records[1]!.id]);

  const onSelectState = vi.fn();
  const sidebar = render(
    <YamahaNetworkSidebar
      activeCategories={[]}
      dealers={second.result.current.dealers}
      isGridLayout={false}
      onSearchChange={vi.fn()}
      onSelectCategory={vi.fn()}
      onSelectDealer={vi.fn()}
      onSelectState={onSelectState}
      onToggleLayout={vi.fn()}
      origin={null}
      searchQuery=""
      selectedDealer={second.result.current.dealers[0]!}
      selectedDealerId={records[0]!.id}
      selectedState=""
      states={["Negeri Sembilan", "Perak"]}
    />
  );
  fireEvent.change(sidebar.getByRole("combobox", { name: "Filter dealers by state" }), {
    target: { value: "Perak" }
  });
  expect(onSelectState).toHaveBeenCalledWith("Perak");
  expect(sidebar.getByRole("link", { name: "Call to arrange service" })).toHaveAttribute(
    "href",
    `tel:${records[0]!.phone}`
  );
});
