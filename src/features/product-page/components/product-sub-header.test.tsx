import { cleanup, fireEvent, render, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { PRODUCT_SUB_NAV_TABS } from "@/features/product-page";
import { ProductSubHeader } from "./product-sub-header";

function renderSubHeader() {
  return render(<ProductSubHeader />);
}

afterEach(() => {
  cleanup();
});

describe("ProductSubHeader", () => {
  it("does not render product branding in the tab bar", () => {
    const { container } = renderSubHeader();
    const view = within(container);

    expect(view.queryByRole("img")).toBeNull();
    expect(view.queryByText("nvx")).toBeNull();
    expect(view.queryByText("155")).toBeNull();
  });

  it("renders links to every product section", () => {
    const { container } = renderSubHeader();
    const view = within(container);

    for (const tab of PRODUCT_SUB_NAV_TABS) {
      expect(view.getByRole("link", { name: toSentenceCase(tab.label) })).toHaveAttribute(
        "href",
        `#product-${tab.id}`
      );
    }
  });

  it("highlights overview by default and moves the underline when a section is selected", () => {
    const { container } = renderSubHeader();
    const view = within(container);

    const overview = view.getByRole("link", { name: "Overview" });
    const features = view.getByRole("link", { name: "Features" });
    expect(overview).toHaveAttribute("aria-current", "location");
    expect(view.queryByRole("link", { name: /ask a dealer/i })).toBeNull();

    fireEvent.click(features);
    expect(features).toHaveAttribute("aria-current", "location");
    expect(overview).not.toHaveAttribute("aria-current");
  });

  it("matches the header menu width", () => {
    renderSubHeader();

    expect(document.head.textContent).toContain("max-width:1280px");
    expect(document.head.textContent).toContain("margin:0 auto");
  });

  it("reuses the same tab styles for active corporate pages", () => {
    const tabs = [
      { href: "/corporate", label: "Corporate" },
      { href: "/company-introduction", label: "Company Introduction" }
    ];
    const view = render(
      <ProductSubHeader
        activeHref="/company-introduction"
        ariaLabel="Corporate sections"
        tabs={tabs}
      />
    );
    const navigation = within(view.container).getByRole("navigation", {
      name: "Corporate sections"
    });

    expect(within(navigation).getByRole("link", { name: "Company Introduction" })).toHaveAttribute(
      "aria-current",
      "page"
    );
    expect(within(navigation).getByRole("link", { name: "Corporate" })).toHaveAttribute(
      "href",
      "/corporate"
    );
  });
});
