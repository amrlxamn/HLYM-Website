import { cleanup, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ContactHeroSection } from "@/features/contact-page";
import { CONTACT_HERO_CONTENT } from "../constants/contact-hero.constants";

afterEach(() => {
  cleanup();
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

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

  it("submits the enquiry form to the configured CRM handoff webhook", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    const user = userEvent.setup();

    vi.stubEnv(
      "VITE_CONTACT_ENQUIRY_WEBHOOK_URL",
      "https://n8n.test/webhook/webflow-contact-enquiry"
    );
    vi.stubGlobal("fetch", fetchMock);

    const view = render(<ContactHeroSection />);

    await user.click(view.getByRole("button", { name: /submit to us/i }));
    await user.type(view.getByLabelText("Full name"), "Aina Rahman");
    await user.type(view.getByLabelText("Email address"), "Aina@example.com");
    await user.type(view.getByLabelText("Mobile phone"), "+60123456789");
    await user.selectOptions(view.getByLabelText("Preferred branch"), "Selangor");
    await user.type(
      view.getByRole("textbox", { name: /details/i }),
      "Interested in a product viewing."
    );
    await user.type(view.getByLabelText("Model"), "Yamaha NVX");
    await user.type(view.getByLabelText("Year of purchase"), "2025");
    await user.click(view.getByRole("checkbox"));
    await user.click(view.getByRole("button", { name: /submit enquiry/i }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        "https://n8n.test/webhook/webflow-contact-enquiry",
        expect.objectContaining({
          method: "POST"
        })
      );
    });

    const firstRequest = fetchMock.mock.calls[0];

    if (!firstRequest) {
      throw new Error("Expected contact enquiry request to be sent");
    }

    const requestBody = JSON.parse((firstRequest[1] as RequestInit).body as string);

    expect(requestBody).toMatchObject({
      consent: true,
      email: "aina@example.com",
      message: "Interested in a product viewing.",
      name: "Aina Rahman",
      phone: "+60123456789",
      preferredBranch: "selangor",
      source: "webflow-contact-page",
      topic: "General",
      title: "Mr.",
      ownerType: "owner",
      vehicleModel: "Yamaha NVX",
      yearOfPurchase: "2025"
    });
    expect(requestBody.submissionId).toEqual(expect.any(String));
    await waitFor(() => {
      expect(
        view.getByText("Enquiry submitted. Our team will review it in GenCode CRM.")
      ).toBeInTheDocument();
    });
  });
});
