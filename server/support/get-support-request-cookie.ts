import type { SupportApiRequest } from "./support-api.types.js";

export function getSupportRequestCookie(request: SupportApiRequest, name: string) {
  const cookies = request.headers.cookie?.split(";") ?? [];

  for (const cookie of cookies) {
    const [cookieName, ...valueParts] = cookie.trim().split("=");

    if (cookieName === name) {
      return decodeURIComponent(valueParts.join("="));
    }
  }

  return null;
}
