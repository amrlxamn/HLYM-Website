import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { ASSET_BUCKET } from "./supabase-assets/asset-bucket.constants.mjs";
import { getRequiredEnv } from "./supabase-assets/get-required-env.mjs";
import { syncDealerImage } from "./supabase-assets/sync-dealer-image.mjs";

const datasetUrl = new URL("../src/features/yamaha-network/yamaha-dealers.json", import.meta.url);
const dataset = JSON.parse(await readFile(datasetUrl, "utf8"));
const supabaseUrl = getRequiredEnv(process.env, "VITE_SUPABASE_URL", "SUPABASE_URL").replace(
  /\/$/,
  ""
);
const serviceRoleKey = getRequiredEnv(process.env, "SUPABASE_SERVICE_ROLE_KEY");
const syncOptions = {
  assetBucket: ASSET_BUCKET,
  serviceRoleKey,
  supabaseUrl
};
const dealers = [];
const batchSize = 4;

for (let offset = 0; offset < dataset.dealers.length; offset += batchSize) {
  const tasks = [];

  for (const dealer of dataset.dealers.slice(offset, offset + batchSize)) {
    tasks.push(syncDealerImage(dealer, syncOptions));
  }

  dealers.push(...(await Promise.all(tasks)));
  console.log(`Synced ${dealers.length}/${dataset.dealers.length} dealer images.`);
}

await writeFile(
  fileURLToPath(datasetUrl),
  `${JSON.stringify({ ...dataset, dealers }, null, 2)}\n`,
  "utf8"
);
