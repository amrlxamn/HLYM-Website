import { z } from "zod";
import { readContactEnquiryRequestBody } from "../server/contact-enquiries/read-contact-enquiry-request-body.js";
import { requestCustomerAccess } from "../server/support/request-customer-access.js";
import { verifyTurnstileToken } from "../server/support/verify-turnstile-token.js";
import type { SupportApiRequest, SupportApiResponse } from "../server/support/support-api.types.js";

const accessRequestSchema = z.object({
  email: z.string().trim().email().max(254),
  ticketReference: z.string().trim().min(8).max(40)
});

export default async function supportAccessRequest(
  request: SupportApiRequest,
  response: SupportApiResponse
) {
  if (request.method !== "POST") {
    response.status(405).json({ code: "method_not_allowed", message: "Method not allowed" });
    return;
  }

  try {
    const body = await readContactEnquiryRequestBody(request);
    const raw = JSON.parse(body) as {
      email?: string;
      ticketReference?: string;
      turnstileToken?: string;
    };

    if (!(await verifyTurnstileToken(raw.turnstileToken))) {
      response.status(400).json({ code: "challenge_failed", message: "Security check failed" });
      return;
    }

    const input = accessRequestSchema.parse(raw);
    await requestCustomerAccess(input.ticketReference, input.email);
  } catch {
    // Lookup failures intentionally return the same response to prevent ticket enumeration.
  }

  response.status(202).json({
    message: "If the ticket details match, a secure access link will be sent.",
    status: "accepted"
  });
}
