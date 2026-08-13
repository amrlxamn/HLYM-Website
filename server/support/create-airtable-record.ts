import type { AirtableRecordResponse } from "./support-airtable.types.js";

export async function createAirtableRecord(
  accessToken: string,
  baseId: string,
  tableId: string,
  fields: Record<string, unknown>
) {
  const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}`, {
    body: JSON.stringify({ fields, typecast: true }),
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    method: "POST",
    signal: AbortSignal.timeout(10_000)
  });

  if (!response.ok) {
    throw new Error("Support ticket storage failed");
  }

  return (await response.json()) as AirtableRecordResponse;
}
