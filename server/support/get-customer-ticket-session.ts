import type { SupportApiRequest } from "./support-api.types.js";
import { getSupportRequestCookie } from "./get-support-request-cookie.js";
import { getSupportSupabaseConfig } from "./get-support-supabase-config.js";
import { hashSupportSecret } from "./hash-support-secret.js";

export async function getCustomerTicketSession(request: SupportApiRequest) {
  const session = getSupportRequestCookie(request, "hlym_support_session");

  if (!session) {
    return null;
  }

  const config = getSupportSupabaseConfig();
  const parameters = new URLSearchParams({
    expires_at: `gt.${new Date().toISOString()}`,
    revoked_at: "is.null",
    select: "id,ticket_reference",
    session_hash: `eq.${hashSupportSecret(session)}`
  });
  const response = await fetch(`${config.url}/rest/v1/support_sessions?${parameters}`, {
    headers: {
      apikey: config.serviceRoleKey,
      Authorization: `Bearer ${config.serviceRoleKey}`
    },
    signal: AbortSignal.timeout(10_000)
  });

  if (!response.ok) {
    return null;
  }

  const sessions = (await response.json()) as Array<{ id: string; ticket_reference: string }>;
  return sessions[0] ?? null;
}
