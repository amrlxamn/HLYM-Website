import { z } from "zod";
import { readContactEnquiryRequestBody } from "../server/contact-enquiries/read-contact-enquiry-request-body.js";
import { createSupportAttachmentMetadata } from "../server/support/create-support-attachment-metadata.js";
import { getCustomerTicketSession } from "../server/support/get-customer-ticket-session.js";
import {
  SUPPORT_ATTACHMENT_MAX_BYTES,
  SUPPORT_ATTACHMENT_MIME_TYPES
} from "../server/support/support-attachment.constants.js";
import type { SupportApiRequest, SupportApiResponse } from "../server/support/support-api.types.js";

const confirmationSchema = z.object({
  fileName: z.string().trim().min(1).max(200),
  mimeType: z.enum(SUPPORT_ATTACHMENT_MIME_TYPES),
  sizeBytes: z.number().int().positive().max(SUPPORT_ATTACHMENT_MAX_BYTES),
  storagePath: z.string().trim().min(10).max(500)
});

export default async function supportAttachmentConfirm(
  request: SupportApiRequest,
  response: SupportApiResponse
) {
  const session = await getCustomerTicketSession(request);

  if (!session) {
    response.status(401).json({ code: "ticket_access_required" });
    return;
  }

  try {
    const body = await readContactEnquiryRequestBody(request);
    const input = confirmationSchema.parse(JSON.parse(body));
    const result = await createSupportAttachmentMetadata(
      session.ticket_reference,
      input.storagePath,
      input.fileName,
      input.mimeType,
      input.sizeBytes
    );
    response.status(201).json(result);
  } catch {
    response.status(400).json({ code: "invalid_attachment" });
  }
}
