import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { CustomCursor } from "./custom-cursor";

const originalElementFromPoint = document.elementFromPoint;

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();

  if (originalElementFromPoint) {
    Object.defineProperty(document, "elementFromPoint", {
      configurable: true,
      value: originalElementFromPoint
    });
    return;
  }

  Reflect.deleteProperty(document, "elementFromPoint");
});

describe("CustomCursor", () => {
  it("shows the active cursor label from hovered video controls", () => {
    vi.spyOn(window, "matchMedia").mockImplementation((query) => ({
      addEventListener: vi.fn(),
      addListener: vi.fn(),
      dispatchEvent: vi.fn(),
      matches: true,
      media: query,
      onchange: null,
      removeEventListener: vi.fn(),
      removeListener: vi.fn()
    }));

    const view = render(
      <>
        <div data-cursor-label="Pause" data-cursor-tone="dark">
          Video
        </div>
        <CustomCursor />
      </>
    );

    fireEvent.mouseMove(view.getByText("Video"), {
      clientX: 120,
      clientY: 80
    });

    expect(view.getByText("Pause")).toBeInTheDocument();
    expect(
      view.container.querySelector('[aria-hidden="true"][data-cursor-tone="dark"]')
    ).toBeInTheDocument();
  });

  it("updates the active cursor label without another mouse move", async () => {
    vi.spyOn(window, "matchMedia").mockImplementation((query) => ({
      addEventListener: vi.fn(),
      addListener: vi.fn(),
      dispatchEvent: vi.fn(),
      matches: true,
      media: query,
      onchange: null,
      removeEventListener: vi.fn(),
      removeListener: vi.fn()
    }));

    const view = render(
      <>
        <div data-cursor-label="Pause">Video</div>
        <CustomCursor />
      </>
    );
    const videoArea = view.getByText("Video");

    fireEvent.mouseMove(videoArea, {
      clientX: 120,
      clientY: 80
    });

    videoArea.setAttribute("data-cursor-label", "Play");

    await waitFor(() => {
      expect(view.getByText("Play")).toBeInTheDocument();
    });
  });

  it("uses an explicit light cursor tone on light surfaces", () => {
    vi.spyOn(window, "matchMedia").mockImplementation((query) => ({
      addEventListener: vi.fn(),
      addListener: vi.fn(),
      dispatchEvent: vi.fn(),
      matches: true,
      media: query,
      onchange: null,
      removeEventListener: vi.fn(),
      removeListener: vi.fn()
    }));

    const view = render(
      <>
        <div data-cursor-tone="light">Light section</div>
        <CustomCursor />
      </>
    );

    fireEvent.mouseMove(view.getByText("Light section"), {
      clientX: 120,
      clientY: 80
    });

    expect(
      view.container.querySelector('[aria-hidden="true"][data-cursor-tone="light"]')
    ).toBeInTheDocument();
  });

  it("updates cursor tone on scroll without another mouse move", () => {
    vi.spyOn(window, "matchMedia").mockImplementation((query) => ({
      addEventListener: vi.fn(),
      addListener: vi.fn(),
      dispatchEvent: vi.fn(),
      matches: true,
      media: query,
      onchange: null,
      removeEventListener: vi.fn(),
      removeListener: vi.fn()
    }));

    const view = render(
      <>
        <div data-cursor-tone="dark">Dark section</div>
        <div data-cursor-tone="light">Light section</div>
        <CustomCursor />
      </>
    );
    const lightSection = view.getByText("Light section");
    Object.defineProperty(document, "elementFromPoint", {
      configurable: true,
      value: vi.fn(() => lightSection)
    });

    fireEvent.mouseMove(view.getByText("Dark section"), {
      clientX: 120,
      clientY: 80
    });
    expect(
      view.container.querySelector('[aria-hidden="true"][data-cursor-tone="dark"]')
    ).toBeInTheDocument();

    fireEvent.scroll(window);

    expect(
      view.container.querySelector('[aria-hidden="true"][data-cursor-tone="light"]')
    ).toBeInTheDocument();
  });
});
