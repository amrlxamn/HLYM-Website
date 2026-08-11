import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "./input";

describe("Input", () => {
  it("connects its label and error message to the field", () => {
    const view = render(<Input error="Name is required" label="Full name" />);
    const input = view.getByRole("textbox", { name: "Full name" });

    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAccessibleDescription("Name is required");
  });
});
