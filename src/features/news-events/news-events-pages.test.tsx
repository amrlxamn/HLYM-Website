import { cleanup, render, within } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { NEWS_ARCHIVE_ITEMS } from "@/data/news.constants";
import { ContactHeroCopy } from "@/features/contact-page/styles/contact-hero-shell.styles";
import { NewsEventsPage, YamalubeScanPage } from "./news-events-pages";
import { YAMALUBE_ENTRY_URL, YAMALUBE_WINNERS } from "./yamalube-winners.constants";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

it("uses the Contact Us and Corporate subtitle styling on both tabs", () => {
  const view = render(
    <>
      <ContactHeroCopy>Reference subtitle</ContactHeroCopy>
      <NewsEventsPage />
      <YamalubeScanPage />
    </>
  );
  const reference = view.getByText("Reference subtitle");

  for (const text of [
    "Model launches, community initiatives and campaign updates from Hong Leong Yamaha Motor.",
    "2026 contest updates and published monthly winners."
  ]) {
    const subtitle = view.getByText(text);
    expect(subtitle.className).toBe(reference.className);
    expect(getComputedStyle(subtitle).fontSize).toBe(getComputedStyle(reference).fontSize);
    expect(getComputedStyle(subtitle).color).toBe(getComputedStyle(reference).color);
  }
});

it("lists the current stories and routes the contest to its own page", () => {
  const view = render(<NewsEventsPage />);

  expect(
    within(view.getByRole("region", { name: "News and events hero" })).getByRole("heading", {
      name: "All news",
      level: 1
    })
  ).toBeInTheDocument();
  expect(
    within(view.getByRole("region", { name: "News and events hero" })).getByText(
      "Model launches, community initiatives and campaign updates from Hong Leong Yamaha Motor."
    )
  ).toBeInTheDocument();
  expect(view.queryByRole("heading", { name: "Stories that move" })).toBeNull();
  expect(view.getByRole("heading", { name: "All News", level: 2 })).toBeInTheDocument();
  expect(
    view.getByText(
      "The latest launches, community stories and announcements from Hong Leong Yamaha Motor."
    )
  ).toBeInTheDocument();
  expect(
    view.getByRole("img", { name: "Motorcycle racers competing in the Malaysian Cub Prix" })
  ).toHaveAttribute("src", expect.stringContaining("motorsports-cub-prix.jpg"));
  const tabs = within(view.getByRole("navigation", { name: "News & Events sections" }));
  expect(tabs.getByRole("link", { name: "All News" })).toHaveAttribute("aria-current", "page");
  expect(tabs.getByRole("link", { name: "Yamalube Scan & Win" })).toHaveAttribute(
    "href",
    "/yamalube-scan"
  );
  expect(view.getAllByRole("article")).toHaveLength(7);
  expect(view.getAllByRole("link", { name: "Read more" })).toHaveLength(7);
  expect(NEWS_ARCHIVE_ITEMS).toHaveLength(7);
  expect(
    view.getAllByRole("link", { name: "Read more" }).map((link) => link.getAttribute("href"))
  ).toContain("/yamalube-scan");
});

it("shares the news hero and puts published winners directly below the tabs", () => {
  vi.spyOn(Date, "now").mockReturnValue(Date.parse("2026-10-27T12:00:00+08:00"));
  const view = render(<YamalubeScanPage />);

  expect(
    within(view.getByRole("region", { name: "News and events hero" })).getByRole("heading", {
      name: "Yamalube Scan & Win",
      level: 1
    })
  ).toBeInTheDocument();
  expect(
    within(view.getByRole("region", { name: "News and events hero" })).getByText(
      "2026 contest updates and published monthly winners."
    )
  ).toBeInTheDocument();
  expect(
    within(view.getByRole("region", { name: "News and events hero" })).getByRole("img", {
      name: "Motorcycle racers competing in the Malaysian Cub Prix"
    })
  ).toHaveAttribute("src", expect.stringContaining("motorsports-cub-prix.jpg"));
  expect(view.queryByRole("img", { name: /Yamalube Scan and Win prizes/ })).toBeNull();
  expect(view.getByRole("heading", { name: "Yamalube Scan & Win", level: 2 })).toBeInTheDocument();
  expect(
    view.getByText(
      "Contest period: 1 January – 31 December 2026. Explore published monthly winners."
    )
  ).toBeInTheDocument();
  expect(view.queryByRole("heading", { name: "How to enter" })).toBeNull();
  expect(view.queryByRole("list", { name: "How to enter" })).toBeNull();
  expect(view.queryByRole("heading", { name: "Published winners" })).toBeNull();
  expect(view.queryByRole("heading", { name: "Full contest terms" })).toBeNull();
  expect(view.queryByRole("link", { name: "Read official terms" })).toBeNull();
  expect(view.queryByText(/Official monthly results, newest first/)).toBeNull();
  expect(view.queryByText(/Official monthly winners list · PDF/)).toBeNull();
  expect(
    within(view.getByRole("navigation", { name: "News & Events sections" })).getByRole("link", {
      name: "Yamalube Scan & Win"
    })
  ).toHaveAttribute("aria-current", "page");
  expect(view.getByRole("link", { name: "Open official entry" })).toHaveAttribute(
    "href",
    YAMALUBE_ENTRY_URL
  );
  expect(view.getByRole("link", { name: "August 2026 winners" })).toHaveAttribute(
    "href",
    expect.stringContaining("yamalube-scan-2026-august-winners.pdf")
  );
  expect(
    within(view.getByRole("list", { name: "Published monthly winners" })).getAllByRole("listitem")
  ).toHaveLength(32);
  expect(view.getByRole("region", { name: "Published winners" }).firstElementChild).toBe(
    view.getByRole("list", { name: "Published monthly winners" })
  );
  expect(YAMALUBE_WINNERS.flatMap((group) => group.months)).toHaveLength(32);
});

it("stops inviting entries after the official 2026 contest period", () => {
  vi.spyOn(Date, "now").mockReturnValue(Date.parse("2027-01-01T00:00:00+08:00"));
  const view = render(<YamalubeScanPage />);

  expect(view.getByRole("status")).toHaveTextContent("entry period has ended");
  expect(view.queryByRole("link", { name: "Open official entry" })).toBeNull();
});
