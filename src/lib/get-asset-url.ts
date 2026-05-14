const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL?.replace(/\/$/, "");
const SUPABASE_ASSET_BUCKET = import.meta.env.VITE_SUPABASE_ASSET_BUCKET ?? "site-assets";

export function getAssetUrl(assetPath: string) {
  const normalizedPath = assetPath.replace(/^\/?assets\//, "").replace(/^\/+/, "");

  if (!SUPABASE_URL) {
    return `/assets/${normalizedPath}`;
  }

  return `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_ASSET_BUCKET}/${normalizedPath}`;
}
