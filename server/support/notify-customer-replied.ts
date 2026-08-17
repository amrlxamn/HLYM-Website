import { postSupportNotification } from "./post-support-notification.js";

export async function notifyCustomerReplied(ticketReference: string, body: string) {
  const inbox = process.env.SUPPORT_INBOX_EMAIL;

  if (!inbox) {
    return false;
  }

  return postSupportNotification("support.customer.replied", {
    body,
    email: inbox,
    ticketReference
  });
}
