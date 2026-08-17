import { getAuthorizedSupportStaff } from "../server/support/get-authorized-support-staff.js";
import { getSupportTicketQueue } from "../server/support/get-support-ticket-queue.js";
import { isAdminPortalEnabled } from "../server/support/is-admin-portal-enabled.js";
import type { SupportApiRequest, SupportApiResponse } from "../server/support/support-api.types.js";

export default async function supportAdminTickets(
  request: SupportApiRequest,
  response: SupportApiResponse
) {
  if (request.method !== "GET") {
    response.status(405).json({ code: "method_not_allowed", message: "Method not allowed" });
    return;
  }

  if (!(await isAdminPortalEnabled())) {
    response.status(503).json({ code: "portal_disabled", message: "Staff portal is disabled" });
    return;
  }

  const staff = await getAuthorizedSupportStaff(request);

  if (!staff) {
    response.status(401).json({ code: "staff_access_required", message: "Staff access required" });
    return;
  }

  response.status(200).json({ staff, tickets: await getSupportTicketQueue() });
}
