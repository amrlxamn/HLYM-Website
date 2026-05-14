import { stat } from "node:fs/promises";
import { ASSET_ROOTS } from "./asset-roots.constants.mjs";
import { toStoragePath } from "./to-storage-path.mjs";
import { walkFiles } from "./walk-files.mjs";

export async function collectAssets() {
  const assets = new Map();

  for (const root of ASSET_ROOTS) {
    const rootStat = await stat(root).catch(() => null);

    if (!rootStat?.isDirectory()) {
      continue;
    }

    for (const file of await walkFiles(root)) {
      assets.set(toStoragePath(root, file), file);
    }
  }

  return [...assets].map(([storagePath, filePath]) => ({ filePath, storagePath }));
}
