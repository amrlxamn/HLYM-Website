import { createSupportSecret } from "./create-support-secret.js";
import { getSupportSupabaseConfig } from "./get-support-supabase-config.js";
import { hashSupportSecret } from "./hash-support-secret.js";

export async function exchangeCustomerAccessToken(token: string) {
  const config = getSupportSupabaseConfig();
  const parameters = new URLSearchParams({
    consumed_at: "is.null",
    expires_at: `gt.${new Date().toISOString()}`,
    revoked_at: "is.null",
    select: "id,ticket_reference",
    token_hash: `eq.${hashSupportSecret(token)}`
  });
  const tokenResponse = await fetch(`${config.url}/rest/v1/support_access_tokens?${parameters}`, {
    headers: {
      apikey: config.serviceRoleKey,
      Authorization: `Bearer ${config.serviceRoleKey}`
    },
    signal: AbortSignal.timeout(10_000)
  });
  const accessTokens = tokenResponse.ok
    ? ((await tokenResponse.json()) as Array<{ id: string; ticket_reference: string }>)
    : [];
  const accessToken = accessTokens[0];

  if (!accessToken) {
    return null;
  }

  const session = createSupportSecret();
  const expiresAt = new Date(Date.now() + 604_800_000).toISOString();
  const sessionResponse = await fetch(`${config.url}/rest/v1/support_sessions`, {
    body: JSON.stringify({
      expires_at: expiresAt,
      session_hash: hashSupportSecret(session),
      ticket_reference: accessToken.ticket_reference
    }),
    headers: {
      apikey: config.serviceRoleKey,
      Authorization: `Bearer ${config.serviceRoleKey}`,
      "Content-Type": "application/json"
    },
    method: "POST"
  });

  if (!sessionResponse.ok) {
    return null;
  }

  await fetch(`${config.url}/rest/v1/support_access_tokens?id=eq.${accessToken.id}`, {
    body: JSON.stringify({ consumed_at: new Date().toISOString() }),
    headers: {
      apikey: config.serviceRoleKey,
      Authorization: `Bearer ${config.serviceRoleKey}`,
      "Content-Type": "application/json"
    },
    method: "PATCH"
  });

  return { expiresAt, session, ticketReference: accessToken.ticket_reference };
}
