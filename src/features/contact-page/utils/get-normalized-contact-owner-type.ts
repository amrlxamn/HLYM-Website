export function getNormalizedContactOwnerType(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, "-");
}
