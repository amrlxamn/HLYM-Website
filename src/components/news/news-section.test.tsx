import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SITE_COPY } from "@/data/site-copy.constants";
import { NewsSection } from "./news-section";

describe("NewsSection", () => {
  it("keeps the featured news pinned below the header and scales it from the bottom", () => {
    const view = render(<NewsSection />);

    expect(view.getByRole("heading", { name: SITE_COPY.news.heading })).toBeInTheDocument();
    expect(document.head.textContent).toContain("--news-featured-initial-top:");
    expect(document.head.textContent).toContain("height:1824px");
    expect(document.head.textContent).toContain("overflow:clip");
    expect(document.head.textContent).toContain("height:calc(100vh - var(--header-height-total))");
    expect(document.head.textContent).toContain("justify-content:center");
    expect(document.head.textContent).toContain("top:var(--header-height-total)");
    expect(document.head.textContent).toContain("will-change:border-radius,height,transform,width");
    expect(document.head.textContent).toContain("will-change:opacity,transform");
    expect(document.head.textContent).toContain("transform-origin:center bottom");
    expect(view.getAllByRole("button", { pressed: true }).length).toBe(1);
    expect(view.getByRole("button", { name: SITE_COPY.news.previousMiniNewsLabel })).toBeDisabled();
    expect(view.getByRole("button", { name: SITE_COPY.news.nextMiniNewsLabel })).toBeEnabled();
  });
});
