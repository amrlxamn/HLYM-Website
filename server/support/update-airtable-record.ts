export async function updateAirtableRecord(
  accessToken: string,
  baseId: string,
  tableId: string,
  recordId: string,
  fields: Record<string, unknown>
) {
  const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}/${recordId}`, {
    body: JSON.stringify({ fields, typecast: true }),
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    method: "PATCH",
    signal: AbortSignal.timeout(10_000)
  });

  if (!response.ok) {
    throw new Error("Support ticket update failed");
  }
}
