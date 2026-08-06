import type { ContactEnquiryServerPayload } from "./contact-enquiry-api.types";

export async function forwardContactEnquiry(
  webhookUrl: string,
  payload: ContactEnquiryServerPayload
) {
  const response = await fetch(webhookUrl, {
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  });

  if (!response.ok) {
    throw new Error(`Contact enquiry webhook failed with status ${response.status}`);
  }

  return response;
}
