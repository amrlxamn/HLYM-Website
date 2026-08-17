import { postSupportNotification } from "./post-support-notification.js";

export async function notifyStaffMagicLink(email: string, magicLink: string) {
  return postSupportNotification("support.staff.magic-link", { email, magicLink });
}
