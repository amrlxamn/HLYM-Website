import type { SupportAdminTicketAction } from "../support-admin.types";

export async function submitSupportAdminTicketAction(
  action: SupportAdminTicketAction,
  accessToken: string
) {
  const response = await fetch("/api/support-admin-ticket", {
    body: JSON.stringify(action),
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    method: "POST"
  });

  if (!response.ok) {
    throw new Error("Unable to update the support ticket");
  }
}
