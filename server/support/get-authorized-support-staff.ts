import type { SupportApiRequest } from "./support-api.types.js";
import { getBearerToken } from "./get-bearer-token.js";
import { getSupportStaff } from "./get-support-staff.js";
import { getSupportSupabaseConfig } from "./get-support-supabase-config.js";

export async function getAuthorizedSupportStaff(request: SupportApiRequest) {
  const token = getBearerToken(request);

  if (!token) {
    return null;
  }

  const config = getSupportSupabaseConfig();
  const response = await fetch(`${config.url}/auth/v1/user`, {
    headers: { apikey: config.serviceRoleKey, Authorization: `Bearer ${token}` },
    signal: AbortSignal.timeout(10_000)
  });

  if (!response.ok) {
    return null;
  }

  const user = (await response.json()) as { email?: string };
  return user.email ? getSupportStaff(user.email) : null;
}
