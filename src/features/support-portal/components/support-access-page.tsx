import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { ArrowLeft, Mail } from "lucide-react";
import { FooterSection } from "@/components/footer";
import { SiteHeader } from "@/components/header/site-header";
import { Button } from "@/components/ui";
import {
  SupportAccessCard,
  SupportAccessForm,
  SupportAccessInput,
  SupportAccessPageRoot,
  SupportAccessStatus
} from "../styles/support-access.styles";

export function SupportAccessPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");

    if (!token) {
      return;
    }

    setStatus("loading");
    void fetch("/api/support-access-exchange", {
      body: JSON.stringify({ token }),
      headers: { "Content-Type": "application/json" },
      method: "POST"
    }).then((response) => {
      if (!response.ok) {
        setStatus("error");
        return;
      }

      window.history.replaceState(null, "", "/support/access");
      window.location.assign("/support/ticket");
    });
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/support-access-request", {
      body: JSON.stringify({
        email: String(formData.get("email") ?? ""),
        ticketReference: String(formData.get("ticketReference") ?? "")
      }),
      headers: { "Content-Type": "application/json" },
      method: "POST"
    });

    setStatus(response.ok ? "success" : "error");
  };

  return (
    <SupportAccessPageRoot>
      <SiteHeader />
      <main>
        <SupportAccessCard>
          <a href="/support">
            <ArrowLeft aria-hidden="true" size={16} /> Back to support
          </a>
          <Mail aria-hidden="true" size={32} />
          <span>Secure ticket access</span>
          <h1>Continue your support conversation</h1>
          <p>
            Enter the ticket reference and email used for your enquiry. We will send a private,
            time-limited access link when the details match.
          </p>
          <SupportAccessForm onSubmit={handleSubmit}>
            <label htmlFor="ticket-reference">Ticket reference</label>
            <SupportAccessInput
              autoComplete="off"
              id="ticket-reference"
              name="ticketReference"
              placeholder="HLYM-2026-ABC123"
              required
            />
            <label htmlFor="ticket-email">Email address</label>
            <SupportAccessInput
              autoComplete="email"
              id="ticket-email"
              name="email"
              required
              type="email"
            />
            <Button disabled={status === "loading"} fullWidth size="lg" type="submit">
              {status === "loading" ? "Requesting link" : "Send secure access link"}
            </Button>
          </SupportAccessForm>
          <SupportAccessStatus aria-live="polite" $error={status === "error"}>
            {status === "success"
              ? "If the details match, the access link is on its way."
              : status === "error"
                ? "We could not process this request. Please try again."
                : ""}
          </SupportAccessStatus>
        </SupportAccessCard>
      </main>
      <FooterSection />
    </SupportAccessPageRoot>
  );
}
