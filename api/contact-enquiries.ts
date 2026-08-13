import { readContactEnquiryRequestBody } from "../server/contact-enquiries/read-contact-enquiry-request-body.js";
import type {
  ContactEnquiryApiRequest,
  ContactEnquiryApiResponse
} from "../server/contact-enquiries/contact-enquiry-api.types.js";
import { createSupportTicket } from "../server/support/create-support-ticket.js";
import { supportTicketSchema } from "../src/features/support-portal/schemas/support-ticket.schema.js";

export default async function contactEnquiries(
  request: ContactEnquiryApiRequest,
  response: ContactEnquiryApiResponse
) {
  if (request.method !== "POST") {
    response.status(405).json({ code: "method_not_allowed", message: "Method not allowed" });
    return;
  }

  try {
    const body = await readContactEnquiryRequestBody(request);
    const payload = supportTicketSchema.parse(JSON.parse(body));
    const result = await createSupportTicket(payload);

    response.status(201).json(result);
  } catch {
    response.status(400).json({
      code: "contact_enquiry_submission_failed",
      message: "Unable to submit this enquiry. Check the details and try again."
    });
  }
}
