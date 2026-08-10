import { forwardContactEnquiry } from "../server/contact-enquiries/forward-contact-enquiry";
import { getContactEnquiryWebhookUrl } from "../server/contact-enquiries/get-contact-enquiry-webhook-url";
import { readContactEnquiryRequestBody } from "../server/contact-enquiries/read-contact-enquiry-request-body";
import type {
  ContactEnquiryApiRequest,
  ContactEnquiryApiResponse
} from "../server/contact-enquiries/contact-enquiry-api.types";
import { validateContactEnquiryPayload } from "../server/contact-enquiries/validate-contact-enquiry-payload";

export default async function contactEnquiries(
  request: ContactEnquiryApiRequest,
  response: ContactEnquiryApiResponse
) {
  if (request.method !== "POST") {
    response.status(405).json({ code: "method_not_allowed", message: "Method not allowed" });
    return;
  }

  const webhookUrl = getContactEnquiryWebhookUrl();

  if (!webhookUrl) {
    response.status(503).json({
      code: "contact_enquiry_webhook_not_configured",
      message: "Contact enquiry handoff is not configured"
    });
    return;
  }

  try {
    const body = await readContactEnquiryRequestBody(request);
    const payload = validateContactEnquiryPayload(JSON.parse(body));
    const webhookResponse = await forwardContactEnquiry(webhookUrl, payload);

    response.status(202).json({
      provider: "gencode-crm",
      status: "accepted",
      webhookStatusCode: webhookResponse.status
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Contact enquiry submission failed";

    response.status(400).json({
      code: "contact_enquiry_submission_failed",
      message
    });
  }
}
