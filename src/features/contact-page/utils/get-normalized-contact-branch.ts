export function getNormalizedContactBranch(value: string) {
  const normalizedValue = value.trim().toLowerCase();

  if (normalizedValue === "not sure yet" || normalizedValue.length === 0) {
    return "unknown";
  }

  return normalizedValue;
}
