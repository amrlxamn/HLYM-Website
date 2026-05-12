import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { getVisibleModels } from "@/components/models/get-visible-models";
import { ModelsSection } from "@/components/models/models-section";
import { MODELS, MODEL_TABS } from "@/data/models.constants";

describe("ModelsSection", () => {
  it("renders display-only category tabs without the all models option", () => {
    const view = render(<ModelsSection />);

    expect(view.getByRole("region")).toHaveAttribute("data-cursor-tone", "light");
    expect(view.queryByRole("button", { name: "all models" })).toBeNull();

    for (const tab of MODEL_TABS) {
      expect(view.getAllByRole("button", { name: tab })[0]).toBeDisabled();
    }
  });

  it("keeps the desktop sticky viewport offset below the site header", () => {
    render(<ModelsSection />);

    expect(document.head.textContent).toContain("top:var(--header-height-total)");
    expect(document.head.textContent).toContain("padding:0 1rem");
  });

  it("returns all models in tab order for the default catalog view", () => {
    expect(getVisibleModels("all models")).toEqual([
      MODELS[3]!,
      MODELS[1]!,
      MODELS[0]!,
      MODELS[2]!,
      MODELS[4]!
    ]);
  });
});
