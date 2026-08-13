import { randomUUID } from "node:crypto";
import { createAirtableRecord } from "./create-airtable-record.js";
import { getSupportAirtableConfig } from "./get-support-airtable-config.js";
import { getSupportSupabaseConfig } from "./get-support-supabase-config.js";

export async function createSupportAttachmentMetadata(
  ticketReference: string,
  storagePath: string,
  fileName: string,
  mimeType: string,
  sizeBytes: number
) {
  if (!storagePath.startsWith(`${ticketReference}/`)) {
    throw new Error("Attachment path does not belong to this ticket");
  }

  const attachmentId = randomUUID();
  const now = new Date().toISOString();
  const supabase = getSupportSupabaseConfig();
  const supabaseResponse = await fetch(`${supabase.url}/rest/v1/support_attachment_objects`, {
    body: JSON.stringify({
      id: attachmentId,
      mime_type: mimeType,
      original_filename: fileName,
      scan_status: "pending",
      size_bytes: sizeBytes,
      storage_path: storagePath,
      ticket_reference: ticketReference,
      uploaded_by_type: "customer"
    }),
    headers: {
      apikey: supabase.serviceRoleKey,
      Authorization: `Bearer ${supabase.serviceRoleKey}`,
      "Content-Type": "application/json"
    },
    method: "POST",
    signal: AbortSignal.timeout(10_000)
  });

  if (!supabaseResponse.ok) {
    throw new Error("Attachment metadata could not be stored");
  }

  const airtable = getSupportAirtableConfig();
  await createAirtableRecord(airtable.accessToken, airtable.baseId, airtable.attachmentsTableId, {
    "Attachment ID": attachmentId,
    "Created At": now,
    "File Size": sizeBytes,
    "MIME Type": mimeType,
    "Original Filename": fileName,
    "Scan Status": "Pending",
    "Storage Object Path": storagePath,
    "Ticket Reference": ticketReference,
    "Uploaded By": "Customer"
  });

  return { attachmentId };
}
