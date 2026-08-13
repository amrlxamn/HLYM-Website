import { getSupportSupabaseConfig } from "./get-support-supabase-config.js";

export async function createStaffMagicLink(email: string) {
  const config = getSupportSupabaseConfig();
  const redirectTo = `${process.env.SUPPORT_PUBLIC_BASE_URL ?? "http://localhost:5173"}/support/admin`;
  const response = await fetch(`${config.url}/auth/v1/admin/generate_link`, {
    body: JSON.stringify({ email, options: { redirectTo }, type: "magiclink" }),
    headers: {
      apikey: config.serviceRoleKey,
      Authorization: `Bearer ${config.serviceRoleKey}`,
      "Content-Type": "application/json"
    },
    method: "POST",
    signal: AbortSignal.timeout(10_000)
  });

  if (!response.ok) {
    throw new Error("Staff access link could not be created");
  }

  const body = (await response.json()) as { action_link?: string };
  return body.action_link ?? null;
}
