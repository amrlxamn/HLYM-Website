import { z } from "zod";
import { readContactEnquiryRequestBody } from "../server/contact-enquiries/read-contact-enquiry-request-body.js";
import { createSupportUploadUrl } from "../server/support/create-support-upload-url.js";
import { getCustomerTicketSession } from "../server/support/get-customer-ticket-session.js";
import {
  SUPPORT_ATTACHMENT_MAX_BYTES,
  SUPPORT_ATTACHMENT_MIME_TYPES
} from "../server/support/support-attachment.constants.js";
import type { SupportApiRequest, SupportApiResponse } from "../server/support/support-api.types.js";

const uploadSchema = z.object({
  fileName: z.string().trim().min(1).max(200),
  mimeType: z.enum(SUPPORT_ATTACHMENT_MIME_TYPES),
  sizeBytes: z.number().int().positive().max(SUPPORT_ATTACHMENT_MAX_BYTES)
});

export default async function supportAttachmentUpload(
  request: SupportApiRequest,
  response: SupportApiResponse
) {
  if (request.method !== "POST") {
    response.status(405).json({ code: "method_not_allowed" });
    return;
  }

  const session = await getCustomerTicketSession(request);

  if (!session) {
    response.status(401).json({ code: "ticket_access_required" });
    return;
  }

  try {
    const body = await readContactEnquiryRequestBody(request);
    const input = uploadSchema.parse(JSON.parse(body));
    const extension = input.fileName.split(".").pop()?.toLowerCase() ?? "bin";
    const upload = await createSupportUploadUrl(session.ticket_reference, extension);
    response.status(200).json(upload);
  } catch {
    response.status(400).json({ code: "invalid_attachment" });
  }
}
