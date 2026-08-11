import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Modal } from "./modal";

describe("Modal", () => {
  it("closes when Escape is pressed", () => {
    const onClose = vi.fn();
    const view = render(
      <Modal isOpen onClose={onClose} title="Book a test ride">
        Dialog content
      </Modal>
    );

    expect(view.getByRole("dialog")).toBeInTheDocument();
    fireEvent.keyDown(window, { key: "Escape" });

    expect(onClose).toHaveBeenCalledOnce();
  });
});
