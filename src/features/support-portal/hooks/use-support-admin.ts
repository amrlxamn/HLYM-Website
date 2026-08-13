import { useEffect, useState } from "react";
import { supportSupabaseClient } from "@/lib/support-supabase-client";
import type { SupportAdminQueue, SupportAdminTicket } from "../support-admin.types";
import { fetchSupportAdminQueue } from "../utils/fetch-support-admin-queue";
import { fetchSupportAdminTicket } from "../utils/fetch-support-admin-ticket";

export function useSupportAdmin() {
  const [accessToken, setAccessToken] = useState("");
  const [queue, setQueue] = useState<SupportAdminQueue | null>(null);
  const [ticket, setTicket] = useState<SupportAdminTicket | null>(null);
  const [status, setStatus] = useState<"loading" | "idle" | "ready" | "error">("loading");

  useEffect(() => {
    void supportSupabaseClient?.auth.getSession().then(async ({ data }) => {
      const token = data.session?.access_token;

      if (!token) {
        setStatus("idle");
        return;
      }

      try {
        setAccessToken(token);
        setQueue(await fetchSupportAdminQueue(token));
        setStatus("ready");
      } catch {
        setStatus("error");
      }
    });
  }, []);

  const selectTicket = async (ticketReference: string) => {
    setStatus("loading");

    try {
      setTicket(await fetchSupportAdminTicket(ticketReference, accessToken));
      setStatus("ready");
    } catch {
      setStatus("error");
    }
  };

  const refreshTicket = async () => {
    if (ticket) {
      setTicket(await fetchSupportAdminTicket(ticket.ticketReference, accessToken));
    }
  };

  return { accessToken, queue, refreshTicket, selectTicket, status, ticket };
}
