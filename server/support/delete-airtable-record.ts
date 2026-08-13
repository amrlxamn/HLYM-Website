export async function deleteAirtableRecord(
  accessToken: string,
  baseId: string,
  tableId: string,
  recordId: string
) {
  await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}/${recordId}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    method: "DELETE",
    signal: AbortSignal.timeout(10_000)
  });
}
