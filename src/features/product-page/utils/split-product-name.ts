export function splitProductName(name: string): { lead: string; suffix: string } {
  const parts = name.trim().split(" ");
  return {
    lead: parts[0] ?? name,
    suffix: parts.slice(1).join(" ")
  };
}
