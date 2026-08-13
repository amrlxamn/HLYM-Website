import { createSupportSecret } from "./create-support-secret.js";
import { getSupportSupabaseConfig } from "./get-support-supabase-config.js";
import { hashSupportSecret } from "./hash-support-secret.js";

export async function createCustomerAccessToken(ticketReference: string, email: string) {
  const config = getSupportSupabaseConfig();
  const token = createSupportSecret();
  const expiresAt = new Date(Date.now() + 86_400_000).toISOString();
  const response = await fetch(`${config.url}/rest/v1/support_access_tokens`, {
    body: JSON.stringify({
      customer_email_hash: hashSupportSecret(email.toLowerCase()),
      expires_at: expiresAt,
      ticket_reference: ticketReference,
      token_hash: hashSupportSecret(token)
    }),
    headers: {
      apikey: config.serviceRoleKey,
      Authorization: `Bearer ${config.serviceRoleKey}`,
      "Content-Type": "application/json"
    },
    method: "POST",
    signal: AbortSignal.timeout(10_000)
  });

  if (!response.ok) {
    throw new Error("Support access could not be created");
  }

  return token;
}
