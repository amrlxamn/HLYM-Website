import { fireEvent, render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { NAV_LINKS } from "@/data/navigation.constants";
import { MainNavigation } from "@/components/header/main-navigation";
import { SITE_COPY } from "@/data/site-copy.constants";
import { MODEL_TABS } from "@/data/models.constants";
import { PRODUCT_CURTAIN_MODELS } from "./product-curtain-models.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";

describe("MainNavigation", () => {
  it("shows only the Hong Leong Yamaha Motor logo in the header", () => {
    const view = render(<MainNavigation />);
    const homeLink = view.getByRole("link", { name: "Go to homepage" });

    expect(within(homeLink).getAllByRole("img")).toHaveLength(1);
    expect(view.queryByRole("img", { name: "Yamaha Revs your Heart" })).toBeNull();
    view.unmount();
  });

  it("toggles the mobile menu state", async () => {
    const user = userEvent.setup();
    const view = render(<MainNavigation />);
    const { header } = SITE_COPY;

    const toggle = view.getByRole("button", { name: header.menuToggleClosedLabel });

    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(view.getByRole("link", { name: NAV_LINKS[6]!.label })).toBeInTheDocument();
  });
  it("renders no hover submenus for the main navigation links", () => {
    const view = render(<MainNavigation />);
    const currentView = within(view.container);

    expect(currentView.queryByLabelText("Contact us submenu")).not.toBeInTheDocument();
    expect(currentView.queryByLabelText("Corporate submenu")).not.toBeInTheDocument();
    expect(currentView.queryByLabelText("News & events submenu")).not.toBeInTheDocument();
    expect(currentView.getByRole("link", { name: "news & events" })).toHaveAttribute(
      "href",
      "/news-events"
    );
    const contactLinks = view.getAllByRole("link", { name: "contact us" });

    expect(contactLinks.length).toBeGreaterThan(0);
    expect(contactLinks[0]).toHaveAttribute("href", "/contact-us");
  });

  it("updates the products mega menu when a category is hovered", async () => {
    const view = render(<MainNavigation />);
    const currentView = within(view.container);

    fireEvent.mouseEnter(currentView.getByRole("button", { name: "products" }));
    fireEvent.mouseEnter(currentView.getByText("big bikes"));

    const modelList = within(currentView.getByLabelText("Big bikes motorcycles"));

    expect(modelList.getByText("MT-09")).toBeInTheDocument();
    expect(modelList.getByText("TMAX")).toBeInTheDocument();
    fireEvent.mouseEnter(modelList.getByText("MT-09"));
    expect(currentView.getByAltText("MT-09")).toBeInTheDocument();

    fireEvent.keyDown(currentView.getByRole("button", { name: "products" }), { key: "Escape" });
  });

  it("shows NEW beside newly introduced models without marking the rest", async () => {
    const view = render(<MainNavigation />);
    const currentView = within(view.container);

    fireEvent.mouseEnter(currentView.getByRole("button", { name: "products" }));
    fireEvent.mouseEnter(currentView.getByText("big bikes"));

    const bigBikes = within(currentView.getByLabelText("Big bikes motorcycles"));
    const xmax = bigBikes.getByRole("link", { name: "XMAX 300 NEW" });
    expect(getComputedStyle(xmax).justifyContent).toBe("space-between");
    expect(getComputedStyle(xmax).width).toBe("180px");
    expect(bigBikes.getByRole("link", { name: "TENERE 700 NEW" })).toBeInTheDocument();
    expect(bigBikes.getByRole("link", { name: "TMAX" })).not.toHaveTextContent("NEW");

    fireEvent.mouseEnter(currentView.getByText("street"));
    const street = within(currentView.getByLabelText("Street motorcycles"));
    expect(street.getByRole("link", { name: "XSR155 NEW" })).toBeInTheDocument();
    expect(street.getByRole("link", { name: "YZF-R25" })).not.toHaveTextContent("NEW");

    fireEvent.keyDown(currentView.getByRole("button", { name: "products" }), { key: "Escape" });
    await waitFor(() => expect(currentView.queryByLabelText("Products submenu")).toBeNull());
  });

  it("links every mega menu model name to its product page", async () => {
    const view = render(<MainNavigation />);
    const currentView = within(view.container);

    fireEvent.mouseEnter(currentView.getByRole("button", { name: "products" }));

    for (const category of MODEL_TABS) {
      fireEvent.mouseEnter(currentView.getByRole("button", { name: new RegExp(category, "i") }));
      const links = within(
        currentView.getByLabelText(`${toSentenceCase(category)} motorcycles`)
      ).getAllByRole("link");
      expect(links.map((link) => link.getAttribute("href"))).toEqual(
        PRODUCT_CURTAIN_MODELS[category].map((model) => `/products/${model.slug}`)
      );
    }

    fireEvent.keyDown(currentView.getByRole("button", { name: "products" }), { key: "Escape" });
    await waitFor(() => expect(currentView.queryByLabelText("Products submenu")).toBeNull());
  });

  it("closes the products curtain with escape", async () => {
    const view = render(<MainNavigation />);
    const currentView = within(view.container);

    fireEvent.mouseEnter(currentView.getByRole("button", { name: "products" }));
    expect(currentView.getByLabelText("Products submenu")).toBeInTheDocument();

    fireEvent.keyDown(currentView.getByRole("button", { name: "products" }), { key: "Escape" });

    await waitFor(() => {
      expect(currentView.queryByLabelText("Products submenu")).not.toBeInTheDocument();
    });
  });

  it("closes the products curtain when the pointer leaves it", async () => {
    const view = render(<MainNavigation />);
    const currentView = within(view.container);

    fireEvent.mouseEnter(currentView.getByRole("button", { name: "products" }));
    fireEvent.pointerLeave(currentView.getByLabelText("Products submenu"));

    await waitFor(() => {
      expect(currentView.queryByLabelText("Products submenu")).not.toBeInTheDocument();
    });
  });

  it("prevents page scrolling only while the products curtain is open", async () => {
    const view = render(<MainNavigation />);
    const currentView = within(view.container);

    fireEvent.mouseEnter(currentView.getByRole("button", { name: "products" }));

    const lockedWheelEvent = new WheelEvent("wheel", { cancelable: true });
    window.dispatchEvent(lockedWheelEvent);
    expect(lockedWheelEvent.defaultPrevented).toBe(true);

    fireEvent.keyDown(currentView.getByRole("button", { name: "products" }), { key: "Escape" });

    await waitFor(() => {
      expect(currentView.queryByLabelText("Products submenu")).not.toBeInTheDocument();
    });

    const unlockedWheelEvent = new WheelEvent("wheel", { cancelable: true });
    window.dispatchEvent(unlockedWheelEvent);
    expect(unlockedWheelEvent.defaultPrevented).toBe(false);
  });
});
