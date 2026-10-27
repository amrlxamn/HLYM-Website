import { act, cleanup, fireEvent, render, within } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { CORPORATE_MILESTONES } from "./corporate-content.constants";
import { MILESTONE_ADVANCE_MS } from "./corporate-timeline.styles";
import { MilestoneTimeline } from "./milestone-timeline";

vi.mock("framer-motion", () => ({ useReducedMotion: () => false }));

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

it("advances visible milestones on a timer, pauses, and loops after 2018", () => {
  vi.useFakeTimers();
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      constructor(private callback: IntersectionObserverCallback) {}
      observe = () => {
        this.callback(
          [{ isIntersecting: true } as IntersectionObserverEntry],
          this as unknown as IntersectionObserver
        );
      };
      disconnect = () => {};
    }
  );

  const view = render(<MilestoneTimeline milestones={CORPORATE_MILESTONES} />);
  const years = within(view.getByRole("navigation", { name: "Company timeline years" }));
  const activeYear = () =>
    years.getAllByRole("button").find((button) => button.getAttribute("aria-pressed") === "true")
      ?.textContent;

  expect(view.queryByText(/Hong Leong Yamaha Motor \/ 01/)).toBeNull();
  expect(activeYear()).toBe("1979");
  act(() => vi.advanceTimersByTime(MILESTONE_ADVANCE_MS));
  expect(activeYear()).toBe("1988");

  fireEvent.click(view.getByRole("button", { name: "Pause timeline" }));
  act(() => vi.advanceTimersByTime(MILESTONE_ADVANCE_MS * 2));
  expect(activeYear()).toBe("1988");

  fireEvent.click(view.getByRole("button", { name: "Play timeline" }));
  act(() => vi.advanceTimersByTime(MILESTONE_ADVANCE_MS));
  expect(activeYear()).toBe("1994");

  fireEvent.click(view.getByRole("button", { name: "2018: Four million motorcycles" }));
  act(() => vi.advanceTimersByTime(MILESTONE_ADVANCE_MS));
  expect(activeYear()).toBe("1979");
});
