import { randomUUID } from "node:crypto";
import { createAirtableRecord } from "./create-airtable-record.js";
import { getStaffSupportTicket } from "./get-staff-support-ticket.js";
import { getSupportAirtableConfig } from "./get-support-airtable-config.js";
import { notifyStaffReplied } from "./notify-staff-replied.js";

export async function createStaffMessage(
  ticketReference: string,
  body: string,
  staffName: string,
  staffEmail: string,
  visibility: "Public" | "Internal"
) {
  const config = getSupportAirtableConfig();
  const messageId = randomUUID();

  await createAirtableRecord(config.accessToken, config.baseId, config.messagesTableId, {
    "Author Email": staffEmail,
    "Author Name": staffName,
    "Author Type": "Staff",
    Body: body.trim(),
    Channel: "Staff Portal",
    "Created At": new Date().toISOString(),
    "Idempotency Key": messageId,
    "Message ID": messageId,
    "Notification Status": visibility === "Public" ? "Pending" : "Not Required",
    "Ticket Reference": ticketReference,
    Visibility: visibility
  });

  if (visibility !== "Public") {
    return;
  }

  try {
    const ticket = await getStaffSupportTicket(ticketReference);
    const customerEmail = ticket?.fields?.["Customer Email"];

    if (typeof customerEmail === "string") {
      await notifyStaffReplied(customerEmail, ticketReference, body.trim());
    }
  } catch {
    // Reply delivery remains available when notification infrastructure is degraded.
  }
}
