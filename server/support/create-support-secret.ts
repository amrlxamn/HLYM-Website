import { randomBytes } from "node:crypto";

export function createSupportSecret() {
  return randomBytes(32).toString("base64url");
}
