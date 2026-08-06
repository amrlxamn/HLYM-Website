import { afterEach, describe, expect, it, vi } from "vitest";
import { getContactEnquiryWebhookUrl } from "./get-contact-enquiry-webhook-url";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("getContactEnquiryWebhookUrl", () => {
  it("uses the local Vite proxy when no webhook URL is configured", () => {
    vi.stubEnv("VITE_CONTACT_ENQUIRY_WEBHOOK_URL", "");

    expect(getContactEnquiryWebhookUrl()).toBe("/api/contact-enquiries");
  });

  it("uses the local Vite proxy when the example webhook URL is configured", () => {
    vi.stubEnv(
      "VITE_CONTACT_ENQUIRY_WEBHOOK_URL",
      "https://n8n.example.com/webhook/webflow-contact-enquiry"
    );

    expect(getContactEnquiryWebhookUrl()).toBe("/api/contact-enquiries");
  });
});
