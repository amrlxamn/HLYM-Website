import { fireEvent, render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import { CORPORATE_MILESTONES } from "./corporate-content.constants";
import { MilestoneTimeline } from "./milestone-timeline";

it("navigates the company milestones by year, keyboard, and drag", async () => {
  const user = userEvent.setup();
  const view = render(<MilestoneTimeline milestones={CORPORATE_MILESTONES} />);
  const stage = view.getByRole("group", { name: "Company milestones" });
  const timeline = within(stage);

  expect(timeline.getByRole("heading", { name: "The first Yamaha RX100" })).toBeInTheDocument();
  expect(view.queryByRole("button", { name: "Previous milestone" })).not.toBeInTheDocument();
  expect(view.queryByRole("button", { name: "Next milestone" })).not.toBeInTheDocument();
  expect(view.queryByRole("button", { name: "Auto-loop milestones" })).not.toBeInTheDocument();

  await user.click(view.getByRole("button", { name: "1988: 500,000 motorcycles" }));
  expect(timeline.getByRole("heading", { name: "500,000 motorcycles" })).toBeInTheDocument();

  stage.focus();
  await user.keyboard("[ArrowRight]");
  expect(timeline.getByRole("heading", { name: "One million motorcycles" })).toBeInTheDocument();

  fireEvent(stage, new MouseEvent("pointerdown", { bubbles: true, clientX: 200 }));
  fireEvent(stage, new MouseEvent("pointerup", { bubbles: true, clientX: 100 }));
  expect(timeline.getByRole("heading", { name: "A new home" })).toBeInTheDocument();

  await user.click(view.getByRole("button", { name: "2018: Four million motorcycles" }));
  expect(timeline.getByRole("heading", { name: "Four million motorcycles" })).toBeInTheDocument();
  expect(view.getByRole("button", { name: "2018: Four million motorcycles" })).toHaveAttribute(
    "aria-pressed",
    "true"
  );
});
