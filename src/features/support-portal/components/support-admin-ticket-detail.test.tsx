import { cleanup, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { SupportAdminTicket } from "../support-admin.types";
import { SupportAdminTicketDetail } from "./support-admin-ticket-detail";

const TICKET: SupportAdminTicket = {
  fields: { Status: "Submitted", Subject: "Warranty support" },
  messages: [
    {
      "Author Name": "Customer",
      "Author Type": "Customer",
      Body: "Please help with my warranty.",
      "Created At": "2026-08-12T09:00:00.000Z",
      Visibility: "Public",
      id: "message-1"
    }
  ],
  recordId: "record-1",
  ticketReference: "HLYM-12345678"
};

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("SupportAdminTicketDetail", () => {
  it("submits an internal message and refreshes the ticket", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    const onUpdated = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    const view = render(
      <SupportAdminTicketDetail accessToken="staff-token" onUpdated={onUpdated} ticket={TICKET} />
    );

    await user.type(view.getByLabelText("Add message"), "Dealer confirmed the inspection.");
    await user.selectOptions(view.getByLabelText("Visibility"), "Internal");
    await user.click(view.getByRole("button", { name: /add message/i }));

    await waitFor(() => expect(onUpdated).toHaveBeenCalledOnce());
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/support-admin-ticket",
      expect.objectContaining({
        body: JSON.stringify({
          action: "message",
          body: "Dealer confirmed the inspection.",
          ticketReference: "HLYM-12345678",
          visibility: "Internal"
        }),
        method: "POST"
      })
    );
  });

  it("updates ticket status and refreshes the ticket", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    const onUpdated = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    const view = render(
      <SupportAdminTicketDetail accessToken="staff-token" onUpdated={onUpdated} ticket={TICKET} />
    );

    await user.selectOptions(view.getByLabelText("Ticket status"), "In Progress");
    await user.click(view.getByRole("button", { name: /update status/i }));

    await waitFor(() => expect(onUpdated).toHaveBeenCalledOnce());
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/support-admin-ticket",
      expect.objectContaining({
        body: JSON.stringify({
          action: "status",
          status: "In Progress",
          ticketReference: "HLYM-12345678"
        }),
        method: "POST"
      })
    );
  });
});
