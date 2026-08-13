import { createCustomerAccessToken } from "./create-customer-access-token.js";
import { escapeAirtableFormulaValue } from "./escape-airtable-formula-value.js";
import { getAirtableRecords } from "./get-airtable-records.js";
import { getSupportAirtableConfig } from "./get-support-airtable-config.js";
import { notifySupportAccessLink } from "./notify-support-access-link.js";

export async function requestCustomerAccess(ticketReference: string, email: string) {
  const config = getSupportAirtableConfig();
  const reference = escapeAirtableFormulaValue(ticketReference.toUpperCase());
  const normalizedEmail = escapeAirtableFormulaValue(email.toLowerCase());
  const result = await getAirtableRecords(
    config.accessToken,
    config.baseId,
    config.ticketsTableId,
    `AND({Ticket Reference}='${reference}',LOWER({Customer Email})='${normalizedEmail}')`
  );

  if (result.records.length !== 1) {
    return;
  }

  const token = await createCustomerAccessToken(ticketReference.toUpperCase(), email);
  await notifySupportAccessLink(email, ticketReference.toUpperCase(), token);
}
