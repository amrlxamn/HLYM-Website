import { cleanup, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { SupportPortalPage } from "./support-portal-page";

afterEach(cleanup);

describe("SupportPortalPage", () => {
  it("filters support questions from the hero search", async () => {
    const user = userEvent.setup();
    const view = render(<SupportPortalPage />);

    expect(view.getByRole("heading", { name: "How can we help you today?" })).toBeInTheDocument();
    await user.type(view.getByLabelText("Search Yamaha support questions"), "warranty period");

    await waitFor(() => {
      expect(view.getByText(/results for/i)).toBeInTheDocument();
      expect(view.getAllByRole("button", { name: /what is the warranty period/i })).toHaveLength(2);
    });
  });
});
