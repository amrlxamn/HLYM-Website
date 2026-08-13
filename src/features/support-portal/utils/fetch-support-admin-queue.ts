import type { SupportAdminQueue } from "../support-admin.types";

export async function fetchSupportAdminQueue(accessToken: string) {
  const response = await fetch("/api/support-admin-tickets", {
    headers: { Authorization: `Bearer ${accessToken}` }
  });

  if (!response.ok) {
    throw new Error("Unable to load the support queue");
  }

  return (await response.json()) as SupportAdminQueue;
}
