import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { ArrowLeft, LockKeyhole, Send } from "lucide-react";
import { FooterSection } from "@/components/footer";
import { SiteHeader } from "@/components/header/site-header";
import { Badge, Button, EmptyState, Skeleton } from "@/components/ui";
import type { PublicSupportTicket } from "../support-ticket.types";
import { uploadSupportAttachment } from "../utils/upload-support-attachment";
import {
  SupportConversation,
  SupportMessage,
  SupportTicketHeader,
  SupportTicketMain,
  SupportTicketPageRoot,
  SupportTicketSidebar
} from "../styles/support-ticket.styles";
import { SupportComposer } from "../styles/support-ticket-composer.styles";

export function SupportTicketPage() {
  const [ticket, setTicket] = useState<PublicSupportTicket | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [attachmentStatus, setAttachmentStatus] = useState("");

  const loadTicket = async () => {
    const response = await fetch("/api/support-ticket");
    setTicket(response.ok ? ((await response.json()) as PublicSupportTicket) : null);
    setIsLoading(false);
  };

  useEffect(() => {
    void loadTicket();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const response = await fetch("/api/support-ticket", {
      body: JSON.stringify({ message: String(formData.get("message") ?? "") }),
      headers: { "Content-Type": "application/json" },
      method: "POST"
    });

    if (response.ok) {
      form.reset();
      await loadTicket();
    }
  };

  return (
    <SupportTicketPageRoot>
      <SiteHeader />
      <main>
        {isLoading ? (
          <Skeleton height="520px" width="100%" />
        ) : ticket ? (
          <SupportTicketMain>
            <section>
              <SupportTicketHeader>
                <a href="/support">
                  <ArrowLeft aria-hidden="true" size={16} /> Support home
                </a>
                <span>{ticket.ticketReference}</span>
                <h1>{String(ticket.subject ?? "Support enquiry")}</h1>
                <Badge variant="accent">{String(ticket.status ?? "Submitted")}</Badge>
              </SupportTicketHeader>
              <SupportConversation aria-label="Ticket conversation">
                {ticket.messages.map((message) => (
                  <SupportMessage
                    $staff={String(message.authorType).toLowerCase() === "staff"}
                    key={String(message.id)}
                  >
                    <header>
                      <strong>{String(message.authorName ?? message.authorType)}</strong>
                      <time>{new Date(String(message.createdAt)).toLocaleString()}</time>
                    </header>
                    <p>{String(message.body)}</p>
                  </SupportMessage>
                ))}
              </SupportConversation>
              <SupportComposer onSubmit={handleSubmit}>
                <label htmlFor="support-reply">Reply to support</label>
                <textarea id="support-reply" name="message" required rows={5} />
                <label htmlFor="support-attachment">Optional attachment</label>
                <input
                  accept=".pdf,.png,.jpg,.jpeg,.webp"
                  id="support-attachment"
                  onChange={(event) => {
                    const file = event.currentTarget.files?.[0];

                    if (!file) {
                      return;
                    }

                    setAttachmentStatus("Uploading attachment...");
                    void uploadSupportAttachment(file)
                      .then(() => setAttachmentStatus(`${file.name} uploaded.`))
                      .catch(() => setAttachmentStatus("Attachment upload failed."));
                  }}
                  type="file"
                />
                <span aria-live="polite">{attachmentStatus}</span>
                <Button type="submit">
                  Send reply <Send aria-hidden="true" size={16} />
                </Button>
              </SupportComposer>
            </section>
            <SupportTicketSidebar>
              <span>Ticket summary</span>
              <dl>
                <dt>Status</dt>
                <dd>{String(ticket.status)}</dd>
                <dt>Topic</dt>
                <dd>{String(ticket.topic)}</dd>
                <dt>Created</dt>
                <dd>{new Date(String(ticket.createdAt)).toLocaleDateString()}</dd>
                <dt>Last update</dt>
                <dd>{new Date(String(ticket.updatedAt)).toLocaleDateString()}</dd>
              </dl>
            </SupportTicketSidebar>
          </SupportTicketMain>
        ) : (
          <EmptyState
            action={
              <Button onClick={() => window.location.assign("/support/access")}>
                Request access
              </Button>
            }
            description="Use the private link sent to your email to open this ticket."
            icon={<LockKeyhole size={24} />}
            title="Secure ticket access required"
          />
        )}
      </main>
      <FooterSection />
    </SupportTicketPageRoot>
  );
}
