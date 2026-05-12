import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import {
  PRODUCT_HERO_VIDEO,
  PRODUCT_PAGE_MODELS,
  ProductShowcasePage
} from "@/features/product-page";

describe("ProductShowcasePage", () => {
  it("renders a clean nvx 360 viewer without category controls", async () => {
    const user = userEvent.setup();
    const view = render(<ProductShowcasePage />);
    const viewer = view.getByRole("group", { name: "360 view of Nvx 155 automatic scooter" });

    expect(view.getByRole("region", { name: "Products showcase page" })).toHaveAttribute(
      "data-cursor-tone",
      "light"
    );
    expect(view.getByText("YAMAHA")).toBeInTheDocument();
    const posterLogo = view.getByRole("heading", { name: PRODUCT_HERO_VIDEO.brandMark.alt });
    expect(posterLogo.querySelector("img")).toHaveAttribute(
      "src",
      PRODUCT_HERO_VIDEO.brandMark.src
    );
    expect(view.queryByText("nvx sp")).toBeNull();
    expect(view.getByText("15.4 ps")).toBeInTheDocument();
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
    expect(document.head.textContent).toContain(
      "/assets/hlym/product-backgrounds/nvx-red-wave.png"
    );
    expect(document.head.textContent).toContain("opacity:0.28");
  });

  it("keeps the nvx frames in smooth rotation order", () => {
    expect(PRODUCT_PAGE_MODELS[0]?.frames).toEqual([
      "/assets/hlym/nvx-360-transparent/frame-06.png",
      "/assets/hlym/nvx-360-transparent/frame-01.png",
      "/assets/hlym/nvx-360-transparent/frame-05.png",
      "/assets/hlym/nvx-360-transparent/frame-04.png",
      "/assets/hlym/nvx-360-transparent/frame-03.png",
      "/assets/hlym/nvx-360-transparent/frame-02.png",
      "/assets/hlym/nvx-360-transparent/frame-08.png",
      "/assets/hlym/nvx-360-transparent/frame-07.png"
    ]);
  });
});
