import type { FormEvent } from "react";
import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui";
import {
  SupportAdminForm,
  SupportAdminPanel,
  SupportAdminStatus
} from "../styles/support-admin-access.styles";

export function SupportAdminAccess() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/support-admin-auth-request", {
      body: JSON.stringify({ email: String(formData.get("email") ?? "") }),
      headers: { "Content-Type": "application/json" },
      method: "POST"
    });
    setStatus(response.ok ? "success" : "error");
  };

  return (
    <SupportAdminPanel>
      <ShieldCheck aria-hidden="true" size={34} />
      <span>Authorized HLYM staff only</span>
      <h1>Support operations</h1>
      <p>
        Request a secure staff access link. Access is restricted to active support-team addresses
        and controlled by the Airtable portal setting.
      </p>
      <SupportAdminForm onSubmit={handleSubmit}>
        <label htmlFor="staff-email">Staff email</label>
        <input autoComplete="email" id="staff-email" name="email" required type="email" />
        <Button disabled={status === "loading"} fullWidth size="lg" type="submit">
          {status === "loading" ? "Requesting access" : "Email staff access link"}
        </Button>
      </SupportAdminForm>
      <SupportAdminStatus aria-live="polite" $error={status === "error"}>
        {status === "success" && "If this address is authorized, the access link is on its way."}
        {status === "error" && "Staff access is unavailable. Contact the system administrator."}
      </SupportAdminStatus>
    </SupportAdminPanel>
  );
}
