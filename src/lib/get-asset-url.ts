const ASSET_CDN_URL = import.meta.env.VITE_SUPABASE_ASSET_CDN_URL?.replace(/\/$/, "");
const SUPABASE_ASSET_BUCKET = import.meta.env.VITE_SUPABASE_ASSET_BUCKET ?? "site-assets";

export function getAssetUrl(assetPath: string) {
  const normalizedPath = assetPath.replace(/^\/?assets\//, "").replace(/^\/+/, "");

  if (!ASSET_CDN_URL) {
    return `/assets/${normalizedPath}`;
  }

  return `${ASSET_CDN_URL}/storage/v1/object/public/${SUPABASE_ASSET_BUCKET}/${normalizedPath}`;
}
