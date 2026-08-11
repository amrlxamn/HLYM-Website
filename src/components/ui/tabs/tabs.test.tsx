import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tabs } from "./tabs";

describe("Tabs", () => {
  it("supports arrow-key navigation", () => {
    const view = render(
      <Tabs
        items={[
          { content: "Overview content", id: "overview", label: "Overview" },
          { content: "Specification content", id: "specs", label: "Specifications" }
        ]}
      />
    );
    const overview = view.getByRole("tab", { name: "Overview" });

    fireEvent.keyDown(overview, { key: "ArrowRight" });

    expect(view.getByRole("tab", { name: "Specifications" })).toHaveAttribute(
      "aria-selected",
      "true"
    );
    expect(view.getByText("Specification content")).toBeInTheDocument();
  });
});
