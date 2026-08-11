import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it("forwards native button behavior", () => {
    const onClick = vi.fn();
    const view = render(<Button onClick={onClick}>Explore models</Button>);

    fireEvent.click(view.getByRole("button", { name: "Explore models" }));

    expect(onClick).toHaveBeenCalledOnce();
  });
});
