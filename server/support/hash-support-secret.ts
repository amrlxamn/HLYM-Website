import { createHmac } from "node:crypto";

export function hashSupportSecret(secret: string) {
  const pepper = process.env.SUPPORT_TOKEN_PEPPER;

  if (!pepper) {
    throw new Error("Support token security is not configured");
  }

  return createHmac("sha256", pepper).update(secret).digest("hex");
}
