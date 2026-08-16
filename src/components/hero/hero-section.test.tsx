import { cleanup, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { HERO_SLIDES } from "@/data/hero-slides.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { HeroSection } from "./hero-section";

afterEach(cleanup);

describe("HeroSection", () => {
  it("shows the current slide name and number in the single pagination control", () => {
    const view = render(<HeroSection />);
    const firstSlide = HERO_SLIDES[0]!;
    const lastSlide = HERO_SLIDES[HERO_SLIDES.length - 1]!;
    const button = view.getByRole("button", { name: toSentenceCase(firstSlide.alt) });

    expect(button).toHaveTextContent(toSentenceCase(firstSlide.alt));
    expect(button).toHaveTextContent("01");
    expect(view.getByText(toSentenceCase(lastSlide.alt))).toBeInTheDocument();
    expect(document.head.textContent).toContain("max-width:1280px");
    expect(document.head.textContent).toContain("calc(100% - var(--space-16))");
  });

  it("advances to the next slide when the pagination control is clicked", async () => {
    const user = userEvent.setup();
    const view = render(<HeroSection />);
    const firstSlide = HERO_SLIDES[0]!;
    const secondSlide = HERO_SLIDES[1]!;

    await user.click(view.getByRole("button", { name: toSentenceCase(firstSlide.alt) }));

    await waitFor(() => {
      expect(view.getByRole("img", { name: secondSlide.alt }).closest("a")).toHaveAttribute(
        "href",
        secondSlide.href
      );
    });
  });
});
