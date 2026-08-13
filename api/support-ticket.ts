import { z } from "zod";
import { readContactEnquiryRequestBody } from "../server/contact-enquiries/read-contact-enquiry-request-body.js";
import { createCustomerMessage } from "../server/support/create-customer-message.js";
import { getCustomerTicketSession } from "../server/support/get-customer-ticket-session.js";
import { getPublicSupportTicket } from "../server/support/get-public-support-ticket.js";
import type { SupportApiRequest, SupportApiResponse } from "../server/support/support-api.types.js";

const messageSchema = z.object({ message: z.string().trim().min(1).max(5000) });

export default async function supportTicket(
  request: SupportApiRequest,
  response: SupportApiResponse
) {
  const session = await getCustomerTicketSession(request);

  if (!session) {
    response
      .status(401)
      .json({ code: "ticket_access_required", message: "Ticket access required" });
    return;
  }

  if (request.method === "GET") {
    const ticket = await getPublicSupportTicket(session.ticket_reference);
    response.status(ticket ? 200 : 404).json(ticket ?? { code: "ticket_not_found" });
    return;
  }

  if (request.method === "POST") {
    try {
      const body = await readContactEnquiryRequestBody(request);
      const input = messageSchema.parse(JSON.parse(body));
      const message = await createCustomerMessage(session.ticket_reference, input.message);
      response.status(201).json(message);
    } catch {
      response.status(400).json({ code: "invalid_message", message: "Message is invalid" });
    }
    return;
  }

  response.status(405).json({ code: "method_not_allowed", message: "Method not allowed" });
}
