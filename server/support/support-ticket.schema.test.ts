import { describe, expect, it } from "vitest";
import { supportTicketSchema } from "./support-ticket.schema";

const VALID_TICKET = {
  consent: true,
  email: " CUSTOMER@EXAMPLE.COM ",
  message: "My motorcycle requires support.",
  name: "Customer Name",
  phone: "+60123456789",
  preferredBranch: "selangor",
  source: "webflow-contact-page",
  submissionId: "submission-123",
  topic: "Service"
} as const;

describe("supportTicketSchema", () => {
  it("normalizes valid contact ticket input", () => {
    const result = supportTicketSchema.parse(VALID_TICKET);

    expect(result.email).toBe("customer@example.com");
  });

  it("rejects invalid consent and oversized messages", () => {
    expect(() => supportTicketSchema.parse({ ...VALID_TICKET, consent: false })).toThrow();
    expect(() =>
      supportTicketSchema.parse({ ...VALID_TICKET, message: "x".repeat(5001) })
    ).toThrow();
  });
});
