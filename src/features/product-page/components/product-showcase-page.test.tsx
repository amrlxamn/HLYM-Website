import { fireEvent, render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import {
  PRODUCT_COLOR_OPTIONS,
  PRODUCT_PAGE_MODELS,
  ProductShowcasePage
} from "@/features/product-page";
import { getAssetUrl } from "@/lib/get-asset-url";
import { PRODUCT_CATALOG } from "../constants/product-catalog.constants";
import officialFrames from "../constants/product-official-360-frames.json";
import { PRODUCT_BACKDROP_LABELS, PRODUCT_BACKDROP_SCALE } from "./product-showcase-page";

describe("ProductShowcasePage", () => {
  it("renders a clean nvx 360 viewer without category controls", async () => {
    const user = userEvent.setup();
    const view = render(<ProductShowcasePage />);
    const viewer = view.getByRole("group", {
      name: "360 view of Yamaha NVX in Gunmetal Grey"
    });
    expect(document.head.textContent).toContain("touch-action:pan-y");
    const canvasAspectRatio = getComputedStyle(viewer.querySelector("canvas")!).aspectRatio;

    expect(view.getByRole("region", { name: "Products showcase page" })).toBeInTheDocument();
    expect(view.getByAltText("Yamaha NVX SP")).toHaveAttribute(
      "src",
      getAssetUrl("hlym/nvx-sp-mark-cropped.png")
    );
    expect(view.getByAltText("Yamaha NVX SP").parentElement).toHaveTextContent("AUTOMATIC");
    expect(view.queryByText("YAMAHA")).toBeNull();
    expect(view.queryByRole("heading", { name: "Yamaha NVX SP" })).toBeNull();
    const mediaPanel = viewer.parentElement;
    const wordmark = mediaPanel?.querySelector('[aria-hidden="true"]');
    expect(wordmark).toHaveTextContent("NVXSP");
    expect(view.getByText("155cc")).toBeInTheDocument();
    expect(view.getByText("15.4 ps")).toBeInTheDocument();
    expect(view.getByText("130 kg")).toBeInTheDocument();
    expect(view.getByText("engine")).toBeInTheDocument();
    expect(view.getByText("power")).toBeInTheDocument();
    expect(view.getByText("weight")).toBeInTheDocument();
    expect(view.queryByText("msrp")).toBeNull();
    expect(view.getByRole("img", { name: "Yamaha NVX in Gunmetal Grey" })).toBeInTheDocument();
    expect(within(view.container).getByText("360°")).toBeInTheDocument();
    expect(view.getByRole("group", { name: "Yamaha NVX body colors" })).toBeInTheDocument();
    expect(view.queryByText(/drag to rotate/i)).toBeNull();
    expect(view.queryByText("1 / 8")).toBeNull();
    expect(view.queryByRole("button", { name: "automatic" })).toBeNull();
    expect(view.queryByRole("button", { name: "street" })).toBeNull();
    expect(view.queryByRole("button", { name: "big bikes" })).toBeNull();
    expect(view.queryByRole("button", { name: "moped" })).toBeNull();
    expect(view.getByText("AUTOMATIC")).toBeInTheDocument();

    viewer.focus();
    await user.keyboard("[ArrowRight]");
    expect(view.queryByText("2 / 8")).toBeNull();

    const cyberBlu = PRODUCT_COLOR_OPTIONS[1]!;
    await user.click(view.getByRole("button", { name: cyberBlu.label }));
    const staticCanvas = view.getByRole("img", { name: cyberBlu.alt });
    expect(staticCanvas.tagName).toBe("CANVAS");
    expect(getComputedStyle(staticCanvas).aspectRatio).toBe(canvasAspectRatio);
    expect(getComputedStyle(staticCanvas.parentElement!).cursor).toBe("default");
    expect(staticCanvas.parentElement?.querySelector("img")).toHaveAttribute("src", cyberBlu.image);
    expect(staticCanvas.parentElement).not.toHaveAttribute("tabindex");
    expect(view.queryByText("360°")).toBeNull();
    expect(view.queryByRole("group", { name: /360 view/i })).toBeNull();
    expect(mediaPanel?.querySelector('[aria-hidden="true"]')).toBe(wordmark);

    await user.click(view.getByRole("button", { name: PRODUCT_COLOR_OPTIONS[0]!.label }));
    expect(mediaPanel?.querySelector('[aria-hidden="true"]')).toBe(wordmark);
    expect(view.getByText("360°")).toBeInTheDocument();
  });

  it("lets a cancelled touch gesture release capture safely so the page can scroll", () => {
    const view = render(<ProductShowcasePage />);
    const viewer = within(view.container).getByRole("group", {
      name: "360 view of Yamaha NVX in Gunmetal Grey"
    });
    const release = vi.fn();
    const hasCapture = vi.fn().mockReturnValue(false);
    viewer.setPointerCapture = vi.fn();
    viewer.hasPointerCapture = hasCapture;
    viewer.releasePointerCapture = release;

    fireEvent.pointerDown(viewer, { pointerId: 1, clientX: 100 });
    fireEvent.pointerCancel(viewer, { pointerId: 1 });
    expect(release).not.toHaveBeenCalled();

    hasCapture.mockReturnValue(true);
    fireEvent.pointerDown(viewer, { pointerId: 2, clientX: 100 });
    fireEvent.pointerUp(viewer, { pointerId: 2 });
    expect(release).toHaveBeenCalledOnce();
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

  it("uses the current official frame sequence for a model without local 360 assets", () => {
    const model = PRODUCT_CATALOG.find((product) => product.slug === "xmax-300")!.model;
    const view = render(<ProductShowcasePage model={model} />);

    const source = officialFrames["xmax-300"];
    expect(model.frames).toEqual([...source.slice(6), ...source.slice(0, 6)]);
    const viewer = view.getByRole("group", { name: "360 view of Yamaha XMAX 300" });
    expect(viewer.querySelector("img")).toHaveAttribute("src", model.image);
    expect(within(view.container).getByText("360°")).toBeInTheDocument();
  });

  it("opens the MT-15 rotation on the right-facing profile in the reference image", () => {
    const model = PRODUCT_CATALOG.find((product) => product.slug === "mt-15")!.model;
    const view = render(<ProductShowcasePage model={model} />);
    const viewer = within(view.container).getByRole("group", { name: "360 view of Yamaha MT-15" });

    expect(model.frames?.[0]).toBe(officialFrames["mt-15"][2]);
    expect(viewer.querySelector("img")).toHaveAttribute("src", model.image);
  });

  it("keeps a model mark and switches between its 360 colour and a second official colour", async () => {
    const user = userEvent.setup();
    const product = PRODUCT_CATALOG.find((item) => item.slug === "mt-09")!;
    const view = render(<ProductShowcasePage colors={product.colors} model={product.model} />);
    const local = within(view.container);

    expect(local.getByRole("img", { name: "Yamaha MT-09 mark" })).toHaveAttribute(
      "src",
      getAssetUrl("hlym/MT-09-Logo.png")
    );
    expect(local.queryByRole("heading", { name: "MT-09" })).toBeNull();
    const group = local.getByRole("group", { name: "Yamaha MT-09 body colors" });
    const swatches = within(group);
    expect(swatches.getByRole("button", { name: "Lightning Blue" })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
    expect(
      local.getByRole("group", { name: "360 view of Yamaha MT-09 in Lightning Blue" })
    ).toBeInTheDocument();
    expect(
      local
        .getByRole("group", { name: "360 view of Yamaha MT-09 in Lightning Blue" })
        .parentElement?.querySelector('[aria-hidden="true"]')
    ).toHaveTextContent("MT-09");

    await user.click(swatches.getByRole("button", { name: "Tech Black" }));
    expect(local.getByRole("img", { name: "Yamaha MT-09 in Tech Black" }).tagName).toBe("CANVAS");
    expect(swatches.getByRole("button", { name: "Tech Black" })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
    expect(local.queryByRole("group", { name: /360 view/i })).toBeNull();

    await user.click(swatches.getByRole("button", { name: "Lightning Blue" }));
    expect(
      local.getByRole("group", { name: "360 view of Yamaha MT-09 in Lightning Blue" })
    ).toBeInTheDocument();
  });

  it("places long model textmarks behind the 360 view without adding a foreground name", () => {
    const product = PRODUCT_CATALOG.find((item) => item.slug === "y16zr-6mro-limited-edition")!;
    const view = render(<ProductShowcasePage colors={product.colors} model={product.model} />);
    const nvx = render(<ProductShowcasePage />);
    const local = within(view.container);
    const viewer = local.getByRole("group", {
      name: "360 view of Yamaha Y16ZR 6MRO Limited Edition in Asymmetric Dual Colour"
    });
    const textmark = viewer.parentElement?.querySelector('[aria-hidden="true"]');
    const nvxTextmark = within(nvx.container)
      .getByRole("group", { name: "360 view of Yamaha NVX in Gunmetal Grey" })
      .parentElement?.querySelector('[aria-hidden="true"]');

    expect(textmark).toHaveTextContent("6MROLIMITED");
    expect(getComputedStyle(textmark!).fontSize).toBe(getComputedStyle(nvxTextmark!).fontSize);
    expect(document.head.textContent).toMatch(/font-size:\s*min\(40cqw,\s*520px\)/);
    expect(document.head.textContent).toMatch(/font-size:\s*38cqw/);
    expect(document.head.textContent).not.toMatch(/font-size:\s*min\(60cqw,\s*780px\)/);
    expect(document.head.textContent).not.toMatch(/font-size:\s*55cqw/);
    expect(local.queryByRole("heading", { name: /Y16ZR 6MRO/i })).toBeNull();
  });

  it("uses the same large-and-small wordmark structure for every catalogue model", () => {
    for (const product of PRODUCT_CATALOG) {
      expect(PRODUCT_BACKDROP_LABELS[product.slug]?.[0]).toBeTruthy();
      expect(PRODUCT_BACKDROP_SCALE[product.slug]).toBeGreaterThan(0);
    }
    expect(PRODUCT_BACKDROP_LABELS["mt-25"]).toEqual(["MT-", "25"]);
    expect(PRODUCT_BACKDROP_LABELS.nvx).toEqual(["NVX", "SP"]);
    expect(PRODUCT_BACKDROP_SCALE.nvx).toBe(1);
  });

  it.each(["tmax", "nmax"])("keeps the %s single-word mark at full NVX weight", (slug) => {
    const product = PRODUCT_CATALOG.find((item) => item.slug === slug)!;
    const view = render(<ProductShowcasePage colors={product.colors} model={product.model} />);
    const nvx = render(<ProductShowcasePage />);
    const primary = within(view.container)
      .getByRole("group", { name: /360 view of/i })
      .parentElement?.querySelector('[aria-hidden="true"] > span:first-child');
    const nvxPrimary = within(nvx.container)
      .getByRole("group", { name: /360 view of/i })
      .parentElement?.querySelector('[aria-hidden="true"] > span:first-child');

    expect(getComputedStyle(primary!).fontWeight).toBe(getComputedStyle(nvxPrimary!).fontWeight);
    expect(getComputedStyle(primary!).fontSize).toBe(getComputedStyle(nvxPrimary!).fontSize);
    expect(getComputedStyle(primary!.parentElement!).fontWeight).toBe("900");
    expect(getComputedStyle(primary!).fontWeight).not.toBe("300");
    expect(document.head.textContent).toMatch(/last-child:not\(:first-child\)/);
  });

  it("shows the PG-1 textmark prominently behind its bike", () => {
    const product = PRODUCT_CATALOG.find((item) => item.slug === "pg-1")!;
    const view = render(<ProductShowcasePage colors={product.colors} model={product.model} />);
    const viewer = within(view.container).getByRole("group", {
      name: "360 view of Yamaha PG-1 in Sky Blue"
    });

    expect(viewer.parentElement?.querySelector('[aria-hidden="true"]')).toHaveTextContent("PG-1");
  });
});
