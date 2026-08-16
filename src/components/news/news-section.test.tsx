import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NEWS_ITEMS } from "@/data/news.constants";
import { SITE_COPY } from "@/data/site-copy.constants";
import { NewsSection } from "./news-section";

const cardCtaLabel = NEWS_ITEMS[0]?.ctaLabel ?? "Read more";

describe("NewsSection", () => {
  it("renders the six official stories in a responsive three-column grid", () => {
    const view = render(<NewsSection />);

    expect(view.getByRole("heading", { name: SITE_COPY.news.heading })).toBeInTheDocument();
    expect(view.getByRole("button", { name: SITE_COPY.news.viewAllLabel })).toBeInTheDocument();
    expect(view.getAllByRole("article")).toHaveLength(6);
    expect(view.getAllByRole("button", { name: cardCtaLabel })).toHaveLength(6);
    expect(view.getAllByText("News")).toHaveLength(6);
    expect(view.getAllByText("|")).toHaveLength(6);
    expect(document.head.textContent).toContain("grid-template-columns:repeat(3, minmax(0, 1fr))");
    expect(document.head.textContent).toContain("column-gap:var(--space-8)");
    expect(document.head.textContent).toContain("row-gap:var(--space-16)");
    expect(document.head.textContent).toContain("background:var(--color-text-inverse)");

    for (const item of NEWS_ITEMS) {
      expect(view.getByRole("heading", { name: item.title })).toBeInTheDocument();
    }
  });
});
