import { getSupportSupabaseConfig } from "./get-support-supabase-config.js";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;

export async function checkSupportRateLimit(key: string) {
  try {
    const config = getSupportSupabaseConfig();
    const response = await fetch(`${config.url}/rest/v1/rpc/check_support_rate_limit`, {
      body: JSON.stringify({
        p_key: key,
        p_max: RATE_LIMIT_MAX_REQUESTS,
        p_window_ms: RATE_LIMIT_WINDOW_MS
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
      return { allowed: true, retryAfterSeconds: 0 };
    }

    const result = (await response.json()) as {
      allowed?: boolean;
      retry_after_seconds?: number;
    };

    return {
      allowed: result.allowed !== false,
      retryAfterSeconds: Math.max(0, result.retry_after_seconds ?? 0)
    };
  } catch {
    // Fail open: rate limiting must never block intake when the counter store is down.
    return { allowed: true, retryAfterSeconds: 0 };
  }
}
