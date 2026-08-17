import { postSupportNotification } from "./post-support-notification.js";

export async function notifyStaffReplied(
  customerEmail: string,
  ticketReference: string,
  body: string
) {
  return postSupportNotification("support.staff.replied", {
    body,
    email: customerEmail,
    ticketReference
  });
}
