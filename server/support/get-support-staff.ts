import { getSupportSupabaseConfig } from "./get-support-supabase-config.js";

export async function getSupportStaff(email: string) {
  const config = getSupportSupabaseConfig();
  const parameters = new URLSearchParams({
    email: `eq.${email.toLowerCase()}`,
    is_active: "eq.true",
    select: "user_id,email,display_name,role"
  });
  const response = await fetch(`${config.url}/rest/v1/support_staff?${parameters}`, {
    headers: {
      apikey: config.serviceRoleKey,
      Authorization: `Bearer ${config.serviceRoleKey}`
    },
    signal: AbortSignal.timeout(10_000)
  });

  if (!response.ok) {
    return null;
  }

  const staff = (await response.json()) as Array<{
    display_name: string;
    email: string;
    role: string;
    user_id: string;
  }>;
  return staff[0] ?? null;
}
