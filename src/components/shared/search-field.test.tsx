import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SearchField } from "./search-field";

describe("SearchField", () => {
  it("supports controlled plain search without changing the shared structure", () => {
    const onChange = vi.fn();
    const view = render(
      <SearchField
        ariaLabel="Search dealers"
        onChange={onChange}
        placeholder="Search"
        value="Yamaha"
        variant="plain"
      />
    );
    const input = view.getByRole("searchbox", { name: "Search dealers" });

    expect(input).toHaveValue("Yamaha");
    expect(input.closest('[role="search"]')).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "Kuala Lumpur" } });
    expect(onChange).toHaveBeenCalledOnce();
  });
});
