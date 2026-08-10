import type { ContactEnquiryPayload } from "../types/contact-page.types";
import { getContactEnquiryWebhookUrl } from "./get-contact-enquiry-webhook-url";

export async function submitContactEnquiry(payload: ContactEnquiryPayload) {
  const webhookUrl = getContactEnquiryWebhookUrl();

  if (!webhookUrl) {
    throw new Error("Missing contact enquiry webhook URL");
  }

  const response = await fetch(webhookUrl, {
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  });

  if (!response.ok) {
    throw new Error("Contact enquiry submission failed");
  }
}
