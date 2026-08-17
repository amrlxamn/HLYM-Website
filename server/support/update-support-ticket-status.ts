import { getStaffSupportTicket } from "./get-staff-support-ticket.js";
import { getSupportAirtableConfig } from "./get-support-airtable-config.js";
import { notifyStatusChanged } from "./notify-status-changed.js";
import { updateAirtableRecord } from "./update-airtable-record.js";

export async function updateSupportTicketStatus(ticketReference: string, status: string) {
  const config = getSupportAirtableConfig();
  const ticket = await getStaffSupportTicket(ticketReference);

  if (!ticket) {
    return false;
  }

  await updateAirtableRecord(
    config.accessToken,
    config.baseId,
    config.ticketsTableId,
    ticket.recordId,
    {
      Status: status,
      "Updated At": new Date().toISOString()
    }
  );

  try {
    const customerEmail = ticket.fields?.["Customer Email"];

    if (typeof customerEmail === "string") {
      await notifyStatusChanged(customerEmail, ticketReference, status);
    }
  } catch {
    // Status updates remain available when notification infrastructure is degraded.
  }

  return true;
}
