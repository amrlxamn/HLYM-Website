import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { getVisibleModels } from "@/components/models/get-visible-models";
import { ModelsSection } from "@/components/models/models-section";
import { getAssetUrl } from "@/lib/get-asset-url";
import { MODELS, MODEL_TABS } from "@/data/models.constants";
import {
  MT_15_360_FRAMES,
  MT_09_360_FRAMES,
  NVX_360_FRAMES,
  XSR155_360_FRAMES,
  Y15ZR_360_FRAMES
} from "@/data/model-360-frames.constants";

describe("ModelsSection", () => {
  it("renders display-only category tabs without the all models option", () => {
    const view = render(<ModelsSection />);

    expect(view.getByRole("region")).toHaveAttribute("data-cursor-tone", "light");
    expect(view.queryByRole("button", { name: "all models" })).toBeNull();

    for (const tab of MODEL_TABS) {
      expect(view.getAllByRole("button", { name: tab })[0]).toBeDisabled();
    }
  });

  it("pins the desktop model sequence below the site header", () => {
    render(<ModelsSection />);

    expect(document.head.textContent).toContain("position:sticky");
    expect(document.head.textContent).toContain("top:var(--header-height-total)");
    expect(document.head.textContent).not.toContain("padding-top:var(--header-height-total)");
    expect(document.head.textContent).toContain("align-items:center");
    expect(document.head.textContent).toContain("padding-bottom:var(--space-16)");
    expect(document.head.textContent).toContain("overflow:clip");
  });

  it("crossfades model changes in one image viewport", () => {
    const view = render(<ModelsSection />);

    expect(view.container.querySelectorAll("[data-model-image-transition]")).toHaveLength(1);
    expect(document.head.textContent).not.toContain("mask-image:linear-gradient(");
    expect(document.head.textContent).toContain("grid-area:1/1");
  });

  it("renders the official model rotation viewer", () => {
    const view = render(<ModelsSection />);
    const visibleModels = getVisibleModels("all models");

    for (const model of visibleModels) {
      expect(model.frames?.length).toBeGreaterThan(1);
      expect(new Set(model.frames).size).toBe(model.frames?.length);
    }

    expect(view.getAllByRole("group", { name: "360 view of Y15zr" }).length).toBeGreaterThan(0);
    expect(view.getAllByText("DRAG TO ROTATE").length).toBeGreaterThan(0);
    expect(view.getAllByRole("button", { name: "discover more" }).length).toBeGreaterThan(0);
    expect(document.head.textContent).toContain("color:var(--color-text-muted-light)");
    expect(document.head.textContent).toContain("overflow:visible");
    expect(document.head.textContent).toContain("white-space:nowrap");
    expect(document.head.textContent).toContain("filter:none");
    expect(document.head.textContent).toContain("max-width:780px");
    expect(document.head.textContent).toContain("justify-items:center");
    expect(document.head.textContent).toContain("aspect-ratio:3/2");
    expect(document.head.textContent).toContain("font-size:18px");
    expect(document.head.textContent).not.toContain("height:min(60vh,560px)");
    expect(Y15ZR_360_FRAMES[0]).toBe(getAssetUrl("hlym/model-360/y15zr/07.jpg"));
    expect(NVX_360_FRAMES[0]).toBe(getAssetUrl("hlym/model-360/nvx/04.jpg"));
    expect(XSR155_360_FRAMES[0]).toBe(getAssetUrl("hlym/model-360/xsr155/03.jpg"));
    expect(MT_09_360_FRAMES[0]).toBe(getAssetUrl("hlym/model-360/mt-09/02.jpg"));
    expect(MT_15_360_FRAMES[0]).toBe(getAssetUrl("hlym/model-360/mt-15/03.jpg"));
  });

  it("animates spec digits while keeping units static", () => {
    const view = render(<ModelsSection />);
    const engineValue = view.getAllByLabelText("149cc")[0]!;

    expect(engineValue.querySelectorAll("[data-counter-digit]")).toHaveLength(3);
    expect(engineValue.querySelector("[data-counter-static]")).toHaveTextContent("CC");
    expect(engineValue.querySelector("[data-counter-digit] span:nth-child(2)")).toHaveStyle({
      transform: "none"
    });
  });

  it("shows one full-height top-down progress rail", () => {
    const view = render(<ModelsSection />);
    const runwayHeight = `${(getVisibleModels("all models").length + 1) * 150}vh`;

    expect(view.container.querySelectorAll("[data-model-progress-rail]")).toHaveLength(1);
    expect(document.head.textContent).toContain("top:0");
    expect(document.head.textContent).toContain("bottom:0");
    expect(document.head.textContent).toContain("transform-origin:top");
    expect(document.head.textContent).toContain("background:var(--red)");
    expect(document.head.textContent).toContain("height:var(--header-height-total)");
    expect(document.head.textContent).toContain("bottom:100%");
    expect(document.head.textContent).not.toContain("width:112px");
    expect(document.head.textContent).toContain("transform:rotate(90deg)");
    const rail = view.container.querySelector("[data-model-progress-rail]");

    expect(view.container.querySelector("[data-model-progress-prefill]")).toBeNull();
    expect(rail?.getAttribute("style")).toContain("scaleY(0.004");
    expect(rail?.parentElement).toHaveStyle({ position: "sticky" });
    expect(rail?.parentElement?.parentElement).toHaveStyle({ height: runwayHeight });
  });

  it("renders one shared model stage across all breakpoints", () => {
    const view = render(<ModelsSection />);

    expect(view.queryByRole("heading", { name: "compare" })).toBeNull();
    expect(document.head.textContent).not.toContain("product-bg.jpg");
    expect(view.container.querySelectorAll("article")).toHaveLength(1);
  });

  it("uses horizontal categories and progress below the desktop breakpoint", () => {
    const view = render(<ModelsSection />);
    const responsiveRail = view.container.querySelector("[data-model-responsive-progress]");

    expect(responsiveRail?.getAttribute("style")).toContain("scaleX(0.004");
    expect(document.head.textContent).toContain("transform-origin:left");
    expect(document.head.textContent).toContain("transform:rotate(0deg)");
    expect(document.head.textContent).toContain("height:8px");
    expect(document.head.textContent).toContain("margin-left:var(--space-3)");
    expect(document.head.textContent).toContain("width:2px");
  });

  it("centers tablet and mobile model cards in a compact row", () => {
    const view = render(<ModelsSection />);
    const card = view.container.querySelector("article");

    expect(document.head.textContent).toContain("flex-direction:row");
    expect(document.head.textContent).toContain("justify-content:center");
    expect(document.head.textContent).toContain("flex:0 1 42%");
    expect(document.head.textContent).toContain("flex:1 1 58%");
    expect(document.head.textContent).toContain("order:1");
    expect(document.head.textContent).toContain("order:2");
    expect(document.head.textContent).toContain("align-content:center");
    expect(document.head.textContent).toContain("font-size:42px");
    expect(document.head.textContent).toContain("font-size:26px");
    expect(card?.firstElementChild).toHaveTextContent("y15zr");
    expect(card?.lastElementChild?.querySelector("[data-model-image-transition]")).not.toBeNull();
  });

  it("returns all models in tab order for the default catalog view", () => {
    expect(getVisibleModels("all models")).toEqual([
      MODELS[3]!,
      MODELS[4]!,
      MODELS[1]!,
      MODELS[5]!,
      MODELS[0]!,
      MODELS[6]!,
      MODELS[2]!,
      MODELS[7]!
    ]);
  });

  it("provides at least two models for every category", () => {
    for (const category of MODEL_TABS) {
      expect(getVisibleModels(category).length).toBeGreaterThanOrEqual(2);
    }
  });
});
