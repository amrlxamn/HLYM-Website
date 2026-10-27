import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ProductColorsSection } from "@/features/product-page";
import { PRODUCT_COLOR_OPTIONS } from "@/features/product-page";
import { PRODUCT_PAGE_COPY } from "@/features/product-page";
import { toSentenceCase } from "@/lib/to-sentence-case";

describe("ProductColorsSection", () => {
  it("switches the NVX body image from the selected color swatch", async () => {
    const user = userEvent.setup();
    const view = render(<ProductColorsSection />);
    const firstColor = PRODUCT_COLOR_OPTIONS[0]!;
    const nextColor = PRODUCT_COLOR_OPTIONS[1]!;

    expect(
      view.getByRole("region", {
        name: toSentenceCase(PRODUCT_PAGE_COPY.colorSectionAriaLabel)
      })
    ).toBeInTheDocument();
    expect(view.queryByText("Body")).toBeNull();
    expect(view.queryByText("Choose your Yamaha NVX finish.")).toBeNull();
    expect(view.getByRole("img", { name: firstColor.alt })).toHaveAttribute(
      "src",
      firstColor.image
    );
    expect(view.getByRole("button", { name: firstColor.label })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
    expect(
      within(view.getByRole("button", { name: firstColor.label })).getByText(firstColor.label)
    ).toBeVisible();
    expect(view.queryByText(nextColor.label)).toBeNull();

    await user.click(view.getByRole("button", { name: nextColor.label }));

    expect(view.getByRole("button", { name: nextColor.label })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
    expect(view.getByRole("img", { name: nextColor.alt })).toHaveAttribute("src", nextColor.image);
    expect(
      within(view.getByRole("button", { name: nextColor.label })).getByText(nextColor.label)
    ).toBeVisible();
    expect(view.queryByText(firstColor.label)).toBeNull();
  });
});
