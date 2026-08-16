import { fireEvent, render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { NAV_LINKS } from "@/data/navigation.constants";
import { MainNavigation } from "@/components/header/main-navigation";
import { SITE_COPY } from "@/data/site-copy.constants";

describe("MainNavigation", () => {
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
