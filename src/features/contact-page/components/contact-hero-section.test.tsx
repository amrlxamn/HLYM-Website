import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ContactHeroSection } from "@/features/contact-page";
import { CONTACT_HERO_CONTENT } from "../constants/contact-hero.constants";

describe("ContactHeroSection", () => {
  it("renders the contact support hero and action cards", async () => {
    const user = userEvent.setup();
    const view = render(<ContactHeroSection />);

    expect(view.getByRole("region", { name: CONTACT_HERO_CONTENT.ariaLabel })).toHaveAttribute(
      "data-cursor-tone",
      "light"
    );
    expect(view.getByRole("heading", { name: CONTACT_HERO_CONTENT.title })).toBeInTheDocument();
    expect(view.getByLabelText(CONTACT_HERO_CONTENT.searchAriaLabel)).toHaveAttribute(
      "placeholder",
      CONTACT_HERO_CONTENT.searchPlaceholder
    );
    expect(view.getByRole("img", { name: CONTACT_HERO_CONTENT.backgroundAlt })).toHaveAttribute(
      "src",
      CONTACT_HERO_CONTENT.backgroundImage
    );

    CONTACT_HERO_CONTENT.cards.forEach((card) => {
      expect(view.getAllByText(card.number).length).toBeGreaterThan(0);
    });
    expect(CONTACT_HERO_CONTENT.cards).toHaveLength(6);
    expect(view.getAllByText("Got any").length).toBeGreaterThan(0);
    expect(view.getAllByText("enquiry?").length).toBeGreaterThan(0);

    expect(view.queryByRole("dialog")).not.toBeInTheDocument();
    expect(view.getAllByRole("link", { name: /view locations/i })).toHaveLength(5);

    await user.click(view.getByRole("button", { name: /submit to us/i }));

    expect(
      view.getByRole("dialog", {
        name: /got any enquiry/i
      })
    ).toBeInTheDocument();
    expect(view.getByLabelText("Full name")).toBeInTheDocument();
    expect(view.getByLabelText("Type of enquiry")).toBeInTheDocument();
    expect(view.getByLabelText("Vehicle registration no.")).toBeInTheDocument();
  });
});
