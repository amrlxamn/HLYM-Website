import { createReadStream } from "node:fs";
import { extname } from "node:path";
import { ASSET_BUCKET } from "./asset-bucket.constants.mjs";
import { CONTENT_TYPES } from "./content-types.constants.mjs";

export async function uploadAsset({ filePath, storagePath }, { serviceRoleKey, supabaseUrl }) {
  const contentType =
    CONTENT_TYPES.get(extname(filePath).toLowerCase()) ?? "application/octet-stream";
  const response = await fetch(
    `${supabaseUrl}/storage/v1/object/${ASSET_BUCKET}/${encodeURI(storagePath)}`,
    {
      body: createReadStream(filePath),
      duplex: "half",
      headers: {
        apikey: serviceRoleKey,
        authorization: `Bearer ${serviceRoleKey}`,
        "cache-control": "31536000, immutable",
        "content-type": contentType,
        "x-upsert": "true"
      },
      method: "POST"
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to upload ${storagePath}: ${response.status} ${await response.text()}`);
  }
}
