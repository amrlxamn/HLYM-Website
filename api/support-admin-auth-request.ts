import { z } from "zod";
import { readContactEnquiryRequestBody } from "../server/contact-enquiries/read-contact-enquiry-request-body.js";
import { createStaffMagicLink } from "../server/support/create-staff-magic-link.js";
import { getSupportStaff } from "../server/support/get-support-staff.js";
import { isAdminPortalEnabled } from "../server/support/is-admin-portal-enabled.js";
import { notifyStaffMagicLink } from "../server/support/notify-staff-magic-link.js";
import type { SupportApiRequest, SupportApiResponse } from "../server/support/support-api.types.js";

const staffAccessSchema = z.object({ email: z.string().trim().email().max(254) });

export default async function supportAdminAuthRequest(
  request: SupportApiRequest,
  response: SupportApiResponse
) {
  if (request.method !== "POST") {
    response.status(405).json({ code: "method_not_allowed", message: "Method not allowed" });
    return;
  }

  try {
    if (!(await isAdminPortalEnabled())) {
      response.status(503).json({ code: "portal_disabled", message: "Staff portal is disabled" });
      return;
    }

    const body = await readContactEnquiryRequestBody(request);
    const input = staffAccessSchema.parse(JSON.parse(body));
    const staff = await getSupportStaff(input.email);

    if (staff) {
      const magicLink = await createStaffMagicLink(staff.email);

      if (magicLink) {
        await notifyStaffMagicLink(staff.email, magicLink);
      }
    }
  } catch {
    // Staff lookup always returns a generic response to avoid exposing the allowlist.
  }

  response.status(202).json({
    message: "If this email is authorized, a staff access link will be sent.",
    status: "accepted"
  });
}
