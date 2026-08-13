export function escapeAirtableFormulaValue(value: string) {
  return value.replaceAll("\\", "\\\\").replaceAll("'", "\\'");
}
