import { render, within } from "@testing-library/react";
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

  it("renders a submenu only for navigation items with dropdown children", () => {
    const view = render(<MainNavigation />);
    const currentView = within(view.container);
    const submenu = currentView.getByLabelText("Contact us submenu");

    expect(submenu).toBeInTheDocument();
    expect(within(submenu).getByText("contact information").closest("a")).toHaveAttribute(
      "href",
      "/contact-us#contact-information"
    );
    expect(within(submenu).getByText("feedback form").closest("a")).toHaveAttribute(
      "href",
      "/contact-us#feedback-form"
    );
    expect(within(submenu).getByText("faq").closest("a")).toHaveAttribute(
      "href",
      "/contact-us#faq"
    );
    expect(currentView.queryByLabelText("Corporate submenu")).not.toBeInTheDocument();
    expect(currentView.queryByLabelText("News & events submenu")).not.toBeInTheDocument();
  });
});
