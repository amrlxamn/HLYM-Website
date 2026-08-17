import { postSupportNotification } from "./post-support-notification.js";

export async function notifySupportAccessLink(
  email: string,
  ticketReference: string,
  token: string
) {
  const publicBaseUrl = process.env.SUPPORT_PUBLIC_BASE_URL ?? "http://localhost:5173";

  return postSupportNotification("support.access.requested", {
    email,
    magicLink: `${publicBaseUrl}/support/access?token=${encodeURIComponent(token)}`,
    ticketReference
  });
}
