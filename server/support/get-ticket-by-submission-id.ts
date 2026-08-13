import { escapeAirtableFormulaValue } from "./escape-airtable-formula-value.js";
import { getAirtableRecords } from "./get-airtable-records.js";
import { getSupportAirtableConfig } from "./get-support-airtable-config.js";

export async function getTicketBySubmissionId(submissionId: string) {
  const config = getSupportAirtableConfig();
  const result = await getAirtableRecords(
    config.accessToken,
    config.baseId,
    config.ticketsTableId,
    `{Submission ID}='${escapeAirtableFormulaValue(submissionId)}'`
  );

  return result.records[0]?.fields["Ticket Reference"];
}
