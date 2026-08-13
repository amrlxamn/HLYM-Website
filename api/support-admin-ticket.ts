import { z } from "zod";
import { readContactEnquiryRequestBody } from "../server/contact-enquiries/read-contact-enquiry-request-body.js";
import { createStaffMessage } from "../server/support/create-staff-message.js";
import { getAuthorizedSupportStaff } from "../server/support/get-authorized-support-staff.js";
import { getStaffSupportTicket } from "../server/support/get-staff-support-ticket.js";
import { isAdminPortalEnabled } from "../server/support/is-admin-portal-enabled.js";
import type { SupportApiRequest, SupportApiResponse } from "../server/support/support-api.types.js";
import { updateSupportTicketStatus } from "../server/support/update-support-ticket-status.js";

const actionSchema = z.discriminatedUnion("action", [
  z.object({
    action: z.literal("message"),
    body: z.string().trim().min(1).max(5000),
    ticketReference: z.string().trim().min(8).max(40),
    visibility: z.enum(["Public", "Internal"])
  }),
  z.object({
    action: z.literal("status"),
    status: z.enum(["Submitted", "In Progress", "Awaiting Customer", "Resolved", "Closed"]),
    ticketReference: z.string().trim().min(8).max(40)
  })
]);

export default async function supportAdminTicket(
  request: SupportApiRequest,
  response: SupportApiResponse
) {
  if (!(await isAdminPortalEnabled())) {
    response.status(503).json({ code: "portal_disabled" });
    return;
  }

  const staff = await getAuthorizedSupportStaff(request);

  if (!staff) {
    response.status(401).json({ code: "staff_access_required" });
    return;
  }

  if (request.method === "GET") {
    const reference = String(request.query?.ticketReference ?? "");
    const ticket = await getStaffSupportTicket(reference);
    response.status(ticket ? 200 : 404).json(ticket ?? { code: "ticket_not_found" });
    return;
  }

  if (request.method === "POST") {
    try {
      const body = await readContactEnquiryRequestBody(request);
      const input = actionSchema.parse(JSON.parse(body));

      if (input.action === "message") {
        await createStaffMessage(
          input.ticketReference,
          input.body,
          staff.display_name || staff.email,
          staff.email,
          input.visibility
        );
      } else {
        await updateSupportTicketStatus(input.ticketReference, input.status);
      }

      response.status(200).json({ status: "accepted" });
    } catch {
      response.status(400).json({ code: "invalid_ticket_action" });
    }
    return;
  }

  response.status(405).json({ code: "method_not_allowed" });
}
