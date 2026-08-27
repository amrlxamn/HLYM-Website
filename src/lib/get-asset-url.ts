const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL?.replace(/\/$/, "");
const SUPABASE_ASSET_BUCKET = import.meta.env.VITE_SUPABASE_ASSET_BUCKET ?? "site-assets";
const ASSET_CDN_URL = import.meta.env.VITE_SUPABASE_ASSET_CDN_URL?.replace(/\/$/, "");

export function getAssetUrl(assetPath: string) {
  const normalizedPath = assetPath.replace(/^\/?assets\//, "").replace(/^\/+/, "");

  const assetOrigin = ASSET_CDN_URL ?? SUPABASE_URL;

  if (!assetOrigin) {
    return `/assets/${normalizedPath}`;
  }

  return `${assetOrigin}/storage/v1/object/public/${SUPABASE_ASSET_BUCKET}/${normalizedPath}`;
}
