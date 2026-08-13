import { randomUUID } from "node:crypto";
import type { SupportTicketInput } from "../../src/features/support-portal/schemas/support-ticket.schema.js";
import { createAirtableRecord } from "./create-airtable-record.js";
import { createCustomerAccessToken } from "./create-customer-access-token.js";
import { createTicketReference } from "./create-ticket-reference.js";
import { deleteAirtableRecord } from "./delete-airtable-record.js";
import { getTicketBySubmissionId } from "./get-ticket-by-submission-id.js";
import { getSupportAirtableConfig } from "./get-support-airtable-config.js";
import { notifySupportAccessLink } from "./notify-support-access-link.js";
import type { SupportTicketResult } from "./support-airtable.types.js";

export async function createSupportTicket(input: SupportTicketInput): Promise<SupportTicketResult> {
  const config = getSupportAirtableConfig();
  const existingReference = await getTicketBySubmissionId(input.submissionId);

  if (typeof existingReference === "string") {
    return { status: "accepted", ticketReference: existingReference };
  }

  const now = new Date().toISOString();
  const ticketReference = createTicketReference();

  const ticketRecord = await createAirtableRecord(
    config.accessToken,
    config.baseId,
    config.ticketsTableId,
    {
      "Alternate Phone": input.alternatePhone,
      "Consent Timestamp": now,
      "Created At": now,
      "Customer Email": input.email,
      "Customer Name": input.name,
      "Dealer Shop": input.dealerShop,
      Mileage: input.mileage,
      "Owner Type": input.ownerType,
      Priority: "Normal",
      "Preferred Branch": input.preferredBranch,
      "Primary Phone": input.phone,
      "Registration Number": input.registrationNumber,
      Source: input.source,
      Status: "Submitted",
      Subject: input.topic,
      "Submission ID": input.submissionId,
      "Ticket Reference": ticketReference,
      Topic: input.topic,
      "Updated At": now,
      "Vehicle Model": input.vehicleModel,
      "Year of Purchase": input.yearOfPurchase
    }
  );

  try {
    await createAirtableRecord(config.accessToken, config.baseId, config.messagesTableId, {
      "Author Email": input.email,
      "Author Name": input.name,
      "Author Type": "Customer",
      Body: input.message,
      Channel: "Contact Form",
      "Created At": now,
      "Idempotency Key": input.submissionId,
      "Message ID": randomUUID(),
      "Notification Status": "Pending",
      "Ticket Reference": ticketReference,
      Visibility: "Public"
    });
  } catch (error) {
    await deleteAirtableRecord(
      config.accessToken,
      config.baseId,
      config.ticketsTableId,
      ticketRecord.id
    );
    throw error;
  }

  try {
    const token = await createCustomerAccessToken(ticketReference, input.email);
    await notifySupportAccessLink(input.email, ticketReference, token);
  } catch {
    // Ticket intake remains available when notification infrastructure is degraded.
  }

  return { status: "accepted", ticketReference };
}
