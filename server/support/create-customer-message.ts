import { randomUUID } from "node:crypto";
import { createAirtableRecord } from "./create-airtable-record.js";
import { getSupportAirtableConfig } from "./get-support-airtable-config.js";

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

  return { createdAt: now, id: messageId };
}
