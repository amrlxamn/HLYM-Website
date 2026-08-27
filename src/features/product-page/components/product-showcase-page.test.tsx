import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { PRODUCT_PAGE_MODELS, ProductShowcasePage } from "@/features/product-page";
import { getAssetUrl } from "@/lib/get-asset-url";

describe("ProductShowcasePage", () => {
  it("renders a clean nvx 360 viewer without category controls", async () => {
    const user = userEvent.setup();
    const view = render(<ProductShowcasePage />);
    const viewer = view.getByRole("group", { name: "360 view of Nvx 155 automatic scooter" });

    expect(view.getByRole("region", { name: "Products showcase page" })).toBeInTheDocument();
    expect(view.queryByText("YAMAHA")).toBeNull();
    expect(view.queryByRole("heading", { name: "Yamaha NVX SP" })).toBeNull();
    expect(view.queryByText("nvx sp")).toBeNull();
    expect(view.queryByText("15.4 ps")).toBeNull();
    expect(view.queryByText("engine")).toBeNull();
    expect(view.queryByText("power")).toBeNull();
    expect(view.queryByText("weight")).toBeNull();
    expect(view.queryByText("msrp")).toBeNull();
    expect(view.getByRole("img", { name: "Nvx 155 automatic scooter" })).toBeInTheDocument();
    expect(view.queryByText(/drag to rotate/i)).toBeNull();
    expect(view.queryByText("1 / 8")).toBeNull();
    expect(view.queryByRole("button", { name: "automatic" })).toBeNull();
    expect(view.queryByRole("button", { name: "street" })).toBeNull();
    expect(view.queryByRole("button", { name: "big bikes" })).toBeNull();
    expect(view.queryByRole("button", { name: "moped" })).toBeNull();
    expect(view.queryByText("automatic")).toBeNull();

    viewer.focus();
    await user.keyboard("[ArrowRight]");
    expect(view.queryByText("2 / 8")).toBeNull();
  });

  it("keeps the nvx frames in smooth rotation order", () => {
    expect(PRODUCT_PAGE_MODELS[0]?.frames).toEqual([
      getAssetUrl("hlym/nvx-360-transparent/frame-04.png"),
      getAssetUrl("hlym/nvx-360-transparent/frame-05.png"),
      getAssetUrl("hlym/nvx-360-transparent/frame-06.png"),
      getAssetUrl("hlym/nvx-360-transparent/frame-07.png"),
      getAssetUrl("hlym/nvx-360-transparent/frame-08.png"),
      getAssetUrl("hlym/nvx-360-transparent/frame-01.png"),
      getAssetUrl("hlym/nvx-360-transparent/frame-02.png"),
      getAssetUrl("hlym/nvx-360-transparent/frame-03.png")
    ]);
  });
});
