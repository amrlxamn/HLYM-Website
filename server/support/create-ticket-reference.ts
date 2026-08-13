import { randomBytes } from "node:crypto";

export function createTicketReference(now = new Date()) {
  const year = now.getUTCFullYear();
  const suffix = randomBytes(3).toString("hex").toUpperCase();

  return `HLYM-${year}-${suffix}`;
}
