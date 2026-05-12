import { cleanup, fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { ProductFeaturesSection } from "@/features/product-page";
import { PRODUCT_FEATURES } from "@/features/product-page";
import { PRODUCT_PAGE_COPY } from "@/features/product-page";
import { toSentenceCase } from "@/lib/to-sentence-case";

afterEach(() => {
  cleanup();
});

describe("ProductFeaturesSection", () => {
  it("renders the first official NVX feature", () => {
    const view = render(<ProductFeaturesSection />);
    const firstFeature = PRODUCT_FEATURES[0]!;

    expect(
      view.getByRole("region", {
        name: toSentenceCase(PRODUCT_PAGE_COPY.featuresSectionAriaLabel)
      })
    ).toHaveAttribute("data-cursor-tone", "light");
    expect(view.getByText("01 / 06")).toBeInTheDocument();
    expect(view.getByRole("heading", { name: firstFeature.title })).toBeInTheDocument();
    expect(view.getByRole("img", { name: firstFeature.imageAlt })).toHaveAttribute(
      "src",
      firstFeature.image
    );
  });

  it("switches features from the arrow controls", async () => {
    const user = userEvent.setup();
    const view = render(<ProductFeaturesSection />);
    const nextFeature = PRODUCT_FEATURES[1]!;

    await user.click(view.getByRole("button", { name: "Next NVX feature" }));

    expect(view.getByText("02 / 06")).toBeInTheDocument();
    expect(view.getByRole("heading", { name: nextFeature.title })).toBeInTheDocument();
    expect(view.getByRole("img", { name: nextFeature.imageAlt })).toHaveAttribute(
      "src",
      nextFeature.image
    );
  });

  it("wraps feature navigation at both ends", async () => {
    const user = userEvent.setup();
    const view = render(<ProductFeaturesSection />);
    const firstFeature = PRODUCT_FEATURES[0]!;
    const lastFeature = PRODUCT_FEATURES[PRODUCT_FEATURES.length - 1]!;

    await user.click(view.getByRole("button", { name: "Previous NVX feature" }));

    expect(view.getByText("06 / 06")).toBeInTheDocument();
    expect(view.getByRole("heading", { name: lastFeature.title })).toBeInTheDocument();

    await user.click(view.getByRole("button", { name: "Next NVX feature" }));

    expect(view.getByText("01 / 06")).toBeInTheDocument();
    expect(view.getByRole("heading", { name: firstFeature.title })).toBeInTheDocument();
  });

  it("supports keyboard feature navigation", () => {
    const view = render(<ProductFeaturesSection />);
    const section = view.getByRole("region", {
      name: toSentenceCase(PRODUCT_PAGE_COPY.featuresSectionAriaLabel)
    });

    section.focus();
    fireEvent.keyDown(section, { key: "ArrowRight" });
    expect(view.getByText("02 / 06")).toBeInTheDocument();

    fireEvent.keyDown(section, { key: "ArrowLeft" });
    expect(view.getByText("01 / 06")).toBeInTheDocument();
  });
});
