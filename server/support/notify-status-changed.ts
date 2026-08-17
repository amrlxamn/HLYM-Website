import { postSupportNotification } from "./post-support-notification.js";

export async function notifyStatusChanged(
  customerEmail: string,
  ticketReference: string,
  status: string
) {
  return postSupportNotification("support.status.changed", {
    email: customerEmail,
    status,
    ticketReference
  });
}
