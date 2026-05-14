import { spawnSync } from "node:child_process";
import { parseSupabaseStatusEnv } from "./parse-supabase-status-env.mjs";

export function getSupabaseStatusEnv() {
  const result = spawnSync("supabase", ["status", "-o", "env"], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"]
  });

  if (result.status !== 0) {
    return new Map();
  }

  return parseSupabaseStatusEnv(result.stdout);
}
