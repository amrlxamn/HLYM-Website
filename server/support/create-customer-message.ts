import { randomUUID } from "node:crypto";
import { createAirtableRecord } from "./create-airtable-record.js";
import { getSupportAirtableConfig } from "./get-support-airtable-config.js";
import { notifyCustomerReplied } from "./notify-customer-replied.js";

export async function createCustomerMessage(ticketReference: string, body: string) {
  const config = getSupportAirtableConfig();
  const now = new Date().toISOString();
  const messageId = randomUUID();

  await createAirtableRecord(config.accessToken, config.baseId, config.messagesTableId, {
    "Author Name": "Customer",
    "Author Type": "Customer",
    Body: body.trim(),
    Channel: "Customer Portal",
    "Created At": now,
    "Idempotency Key": messageId,
    "Message ID": messageId,
    "Notification Status": "Pending",
    "Ticket Reference": ticketReference,
    Visibility: "Public"
  });

  try {
    await notifyCustomerReplied(ticketReference, body.trim());
  } catch {
    // Reply delivery remains available when notification infrastructure is degraded.
  }

  return { createdAt: now, id: messageId };
}
