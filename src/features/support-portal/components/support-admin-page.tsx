import { LogOut } from "lucide-react";
import { Button } from "@/components/ui";
import { SiteHeader } from "@/components/header/site-header";
import { supportSupabaseClient } from "@/lib/support-supabase-client";
import { useSupportAdmin } from "../hooks/use-support-admin";
import {
  SupportAdminHeader,
  SupportAdminPageRoot,
  SupportAdminWorkspace
} from "../styles/support-admin.styles";
import { SupportAdminAccess } from "./support-admin-access";
import { SupportAdminQueue } from "./support-admin-queue";
import { SupportAdminTicketDetail } from "./support-admin-ticket-detail";

export function SupportAdminPage() {
  const { accessToken, queue, refreshTicket, selectTicket, status, ticket } = useSupportAdmin();

  if (queue) {
    return (
      <SupportAdminPageRoot>
        <SiteHeader />
        <main>
          <SupportAdminHeader>
            <div>
              <span>Support operations</span>
              <h1>Ticket queue</h1>
              <p>{queue.staff.display_name || queue.staff.email}</p>
            </div>
            <Button
              onClick={() => {
                void supportSupabaseClient?.auth.signOut().then(() => window.location.reload());
              }}
              variant="secondary"
            >
              <LogOut aria-hidden="true" size={16} /> Sign out
            </Button>
          </SupportAdminHeader>
          <SupportAdminWorkspace aria-busy={status === "loading"}>
            <SupportAdminQueue
              onSelect={selectTicket}
              selectedReference={ticket?.ticketReference}
              tickets={queue.tickets}
            />
            {ticket && (
              <SupportAdminTicketDetail
                accessToken={accessToken}
                onUpdated={refreshTicket}
                ticket={ticket}
              />
            )}
          </SupportAdminWorkspace>
        </main>
      </SupportAdminPageRoot>
    );
  }

  return (
    <SupportAdminPageRoot>
      <SiteHeader />
      <main>
        <SupportAdminAccess />
      </main>
    </SupportAdminPageRoot>
  );
}
