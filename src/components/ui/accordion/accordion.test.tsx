import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Accordion } from "./accordion";

describe("Accordion", () => {
  it("reveals content from its disclosure trigger", () => {
    const view = render(
      <Accordion
        items={[{ content: "Two years or 20,000 km.", id: "warranty", title: "Warranty" }]}
      />
    );

    const trigger = view.getByRole("button", { name: "Warranty" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(view.getByText("Two years or 20,000 km.")).toBeInTheDocument();
  });
});
