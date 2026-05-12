import { render, within, fireEvent } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { toSentenceCase } from "@/lib/to-sentence-case";
import {
  PRODUCT_HERO_VIDEO,
  PRODUCT_PAGE_MODELS,
  PRODUCT_SUB_NAV_TABS
} from "@/features/product-page";
import { ProductSubHeader } from "./product-sub-header";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("ProductSubHeader", () => {
  it("renders the product mark in place of the product name text", () => {
    const { container } = render(<ProductSubHeader />);
    const view = within(container);

    expect(view.getByAltText(PRODUCT_HERO_VIDEO.brandMark.alt)).toHaveAttribute(
      "src",
      PRODUCT_HERO_VIDEO.brandMark.src
    );
    expect(view.queryByText("nvx")).toBeNull();
    expect(view.queryByText("155")).toBeNull();
  });

  it("renders all navigation tabs", () => {
    const { container } = render(<ProductSubHeader />);
    const view = within(container);

    for (const tab of PRODUCT_SUB_NAV_TABS) {
      expect(view.getByRole("button", { name: toSentenceCase(tab.label) })).toBeInTheDocument();
    }
  });

  it("marks the first tab as active by default", () => {
    const { container } = render(<ProductSubHeader />);
    const view = within(container);

    const firstTabLabel = toSentenceCase(PRODUCT_SUB_NAV_TABS[0]!.label);
    const firstTab = view.getByRole("button", { name: firstTabLabel });
    expect(firstTab).toHaveAttribute("aria-current", "true");
  });

  it("switches the active tab when another tab is clicked", () => {
    const { container } = render(<ProductSubHeader />);
    const view = within(container);

    const firstTabLabel = toSentenceCase(PRODUCT_SUB_NAV_TABS[0]!.label);
    const secondTabLabel = toSentenceCase(PRODUCT_SUB_NAV_TABS[1]!.label);

    const secondTab = view.getByRole("button", { name: secondTabLabel });
    fireEvent.click(secondTab);

    expect(secondTab).toHaveAttribute("aria-current", "true");

    const firstTab = view.getByRole("button", { name: firstTabLabel });
    expect(firstTab).not.toHaveAttribute("aria-current");
  });

  it("scrolls to the target section when a tab is clicked", () => {
    const target = document.createElement("div");
    const scrollSpy = vi.fn();
    const { container } = render(<ProductSubHeader />);
    const view = within(container);
    const secondTabLabel = toSentenceCase(PRODUCT_SUB_NAV_TABS[1]!.label);

    target.id = PRODUCT_SUB_NAV_TABS[1]!.targetId;
    target.scrollIntoView = scrollSpy;
    document.body.append(target);

    fireEvent.click(view.getByRole("button", { name: secondTabLabel }));

    expect(scrollSpy).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start"
    });

    target.remove();
  });

  it("renders the contact dealer link with the correct href", () => {
    const { container } = render(<ProductSubHeader />);
    const view = within(container);

    const product = PRODUCT_PAGE_MODELS[0]!;
    const cta = view.getByRole("link", { name: /ask a dealer/i });
    expect(cta).toHaveAttribute("href", product.ctaHref);
  });

  it("sticks directly under the site header", () => {
    render(<ProductSubHeader />);

    expect(document.head.textContent).toContain("position:sticky");
    expect(document.head.textContent).toContain("top:var(--header-height-total)");
  });

  it("uses the shared site container for header alignment", () => {
    render(<ProductSubHeader />);

    expect(document.head.textContent).toContain("max-width:var(--container)");
    expect(document.head.textContent).toContain("width:calc(100% - 2rem)");
  });
});
