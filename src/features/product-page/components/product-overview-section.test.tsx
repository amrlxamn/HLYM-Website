import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  PRODUCT_OVERVIEW_COLORS,
  PRODUCT_OVERVIEW_CONTENT,
  ProductOverviewSection
} from "@/features/product-page";

describe("ProductOverviewSection", () => {
  it("renders the Figma overview copy, specs, and color cards", () => {
    const view = render(<ProductOverviewSection />);

    expect(view.getByRole("region", { name: "Yamaha NVX overview" })).toHaveAttribute(
      "data-cursor-tone",
      "dark"
    );
    expect(view.getByText(PRODUCT_OVERVIEW_CONTENT.eyebrow)).toBeInTheDocument();
    expect(
      view.getByRole("heading", {
        name: `${PRODUCT_OVERVIEW_CONTENT.titleLines[0]} ${PRODUCT_OVERVIEW_CONTENT.titleLines[1]}`
      })
    ).toBeInTheDocument();
    expect(view.getByText(PRODUCT_OVERVIEW_CONTENT.description)).toBeInTheDocument();
    expect(view.getByText("01")).toBeInTheDocument();
    expect(view.getByText("Maximum torque")).toBeInTheDocument();
    expect(view.getByText("14.2Nm (1.4 kgf.m) / 6,500 r/min")).toBeInTheDocument();

    for (const color of PRODUCT_OVERVIEW_COLORS) {
      expect(view.getByText(color.label)).toBeInTheDocument();
      expect(view.getByText(color.description)).toBeInTheDocument();
      expect(view.getByRole("img", { name: color.alt })).toHaveAttribute("src", color.image);
    }
  });
});
