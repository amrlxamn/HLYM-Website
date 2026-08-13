export async function getAirtableRecords(
  accessToken: string,
  baseId: string,
  tableId: string,
  filterByFormula: string
) {
  const parameters = new URLSearchParams({ filterByFormula, maxRecords: "100" });
  const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}?${parameters}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    signal: AbortSignal.timeout(10_000)
  });

  if (!response.ok) {
    throw new Error("Support ticket lookup failed");
  }

  return (await response.json()) as {
    records: Array<{ fields: Record<string, unknown>; id: string }>;
  };
}
