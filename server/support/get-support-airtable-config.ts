import { SUPPORT_AIRTABLE_DEFAULTS } from "./support-airtable.constants.js";

export function getSupportAirtableConfig() {
  const accessToken = process.env.AIRTABLE_ACCESS_TOKEN;

  if (!accessToken) {
    throw new Error("Support ticket storage is not configured");
  }

  return {
    accessToken,
    attachmentsTableId:
      process.env.AIRTABLE_ATTACHMENTS_TABLE_ID ?? SUPPORT_AIRTABLE_DEFAULTS.attachmentsTableId,
    baseId: process.env.AIRTABLE_BASE_ID ?? SUPPORT_AIRTABLE_DEFAULTS.baseId,
    messagesTableId:
      process.env.AIRTABLE_MESSAGES_TABLE_ID ?? SUPPORT_AIRTABLE_DEFAULTS.messagesTableId,
    ticketsTableId:
      process.env.AIRTABLE_TICKETS_TABLE_ID ?? SUPPORT_AIRTABLE_DEFAULTS.ticketsTableId
  };
}
