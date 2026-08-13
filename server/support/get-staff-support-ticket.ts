import { escapeAirtableFormulaValue } from "./escape-airtable-formula-value.js";
import { getAirtableRecords } from "./get-airtable-records.js";
import { getSupportAirtableConfig } from "./get-support-airtable-config.js";

export async function getStaffSupportTicket(ticketReference: string) {
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
      `{Ticket Reference}='${reference}'`
    )
  ]);
  const ticket = ticketResult.records[0];

  if (!ticket) {
    return null;
  }

  return {
    fields: ticket.fields,
    messages: messageResult.records
      .map((record): Record<string, unknown> => ({ id: record.id, ...record.fields }))
      .sort((left, right) => String(left["Created At"]).localeCompare(String(right["Created At"]))),
    recordId: ticket.id,
    ticketReference
  };
}
