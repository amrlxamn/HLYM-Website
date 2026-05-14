import { ASSET_BUCKET } from "./supabase-assets/asset-bucket.constants.mjs";
import { collectAssets } from "./supabase-assets/collect-assets.mjs";
import { getRequiredEnv } from "./supabase-assets/get-required-env.mjs";
import { getSupabaseStatusEnv } from "./supabase-assets/get-supabase-status-env.mjs";
import { uploadAsset } from "./supabase-assets/upload-asset.mjs";

const statusEnv = getSupabaseStatusEnv();
const supabaseUrl = getRequiredEnv(statusEnv, "SUPABASE_URL", "VITE_SUPABASE_URL", "API_URL");
const serviceRoleKey = getRequiredEnv(
  statusEnv,
  "SUPABASE_SERVICE_ROLE_KEY",
  "SERVICE_ROLE_KEY"
);
const files = await collectAssets();

for (const file of files) {
  await uploadAsset(file, { serviceRoleKey, supabaseUrl });
}

console.log(`Uploaded ${files.length} assets to Supabase bucket "${ASSET_BUCKET}".`);
