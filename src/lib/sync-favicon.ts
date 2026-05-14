import { getAssetUrl } from "@/lib/get-asset-url";

export function syncFavicon() {
  const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');

  if (favicon) {
    favicon.href = getAssetUrl("logo.png");
    favicon.type = "image/png";
    return;
  }

  const link = document.createElement("link");
  link.href = getAssetUrl("logo.png");
  link.rel = "icon";
  link.type = "image/png";
  document.head.append(link);
}
