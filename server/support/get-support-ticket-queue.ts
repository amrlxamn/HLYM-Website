import { getAirtableRecords } from "./get-airtable-records.js";
import { getSupportAirtableConfig } from "./get-support-airtable-config.js";

export async function getSupportTicketQueue() {
  const config = getSupportAirtableConfig();
  const result = await getAirtableRecords(
    config.accessToken,
    config.baseId,
    config.ticketsTableId,
    "TRUE()"
  );

  return result.records
    .map((record) => ({
      assignedStaff: record.fields["Assigned Staff Email"],
      customerEmail: record.fields["Customer Email"],
      customerName: record.fields["Customer Name"],
      priority: record.fields.Priority,
      status: record.fields.Status,
      subject: record.fields.Subject,
      ticketReference: record.fields["Ticket Reference"],
      updatedAt: record.fields["Updated At"]
    }))
    .sort((left, right) => String(right.updatedAt).localeCompare(String(left.updatedAt)));
}
