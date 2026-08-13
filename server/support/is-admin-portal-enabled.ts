import { escapeAirtableFormulaValue } from "./escape-airtable-formula-value.js";
import { getAirtableRecords } from "./get-airtable-records.js";
import { getSupportAirtableConfig } from "./get-support-airtable-config.js";
import { SUPPORT_AIRTABLE_DEFAULTS } from "./support-airtable.constants.js";

export async function isAdminPortalEnabled() {
  const config = getSupportAirtableConfig();
  const setting = escapeAirtableFormulaValue("admin_portal_enabled");
  const result = await getAirtableRecords(
    config.accessToken,
    config.baseId,
    process.env.AIRTABLE_SETTINGS_TABLE_ID ?? SUPPORT_AIRTABLE_DEFAULTS.settingsTableId,
    `{Setting}='${setting}'`
  );

  return String(result.records[0]?.fields.Value).toLowerCase() === "true";
}
