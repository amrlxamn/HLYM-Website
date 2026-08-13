export function getSupportSupabaseConfig() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const url = process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL;

  if (!serviceRoleKey || !url) {
    throw new Error("Support security storage is not configured");
  }

  return { serviceRoleKey, url: url.replace(/\/$/, "") };
}
