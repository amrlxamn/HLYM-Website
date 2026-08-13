import { escapeAirtableFormulaValue } from "./escape-airtable-formula-value.js";
import { getAirtableRecords } from "./get-airtable-records.js";
import { getSupportAirtableConfig } from "./get-support-airtable-config.js";

export async function getPublicSupportTicket(ticketReference: string) {
  const config = getSupportAirtableConfig();
  const reference = escapeAirtableFormulaValue(ticketReference);
  const [ticketResult, messageResult] = await Promise.all([
    getAirtableRecords(
      config.accessToken,
      config.baseId,
      config.ticketsTableId,
      `{Ticket Reference}='${reference}'`
    ),
    getAirtableRecords(
      config.accessToken,
      config.baseId,
      config.messagesTableId,
      `AND({Ticket Reference}='${reference}',{Visibility}='Public')`
    )
  ]);
  const ticket = ticketResult.records[0];

  if (!ticket) {
    return null;
  }

  return {
    createdAt: ticket.fields["Created At"],
    messages: messageResult.records
      .map((record) => ({
        authorName: record.fields["Author Name"],
        authorType: record.fields["Author Type"],
        body: record.fields.Body,
        createdAt: record.fields["Created At"],
        id: record.fields["Message ID"]
      }))
      .sort((left, right) => String(left.createdAt).localeCompare(String(right.createdAt))),
    status: ticket.fields.Status,
    subject: ticket.fields.Subject,
    ticketReference,
    topic: ticket.fields.Topic,
    updatedAt: ticket.fields["Updated At"]
  };
}
