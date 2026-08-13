import type { SupportAdminTicket } from "../support-admin.types";

export async function fetchSupportAdminTicket(ticketReference: string, accessToken: string) {
  const params = new URLSearchParams({ ticketReference });
  const response = await fetch(`/api/support-admin-ticket?${params.toString()}`, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });

  if (!response.ok) {
    throw new Error("Unable to load the support ticket");
  }

  return (await response.json()) as SupportAdminTicket;
}
