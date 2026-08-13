import type { SupportApiRequest } from "./support-api.types.js";

export function getBearerToken(request: SupportApiRequest) {
  const authorization = request.headers.authorization;

  if (!authorization?.startsWith("Bearer ")) {
    return null;
  }

  return authorization.slice("Bearer ".length).trim() || null;
}
