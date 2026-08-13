import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { HERO_SLIDES } from "@/data/hero-slides.constants";
import { HeroSection } from "./hero-section";

describe("HeroSection", () => {
  it("changes the linked banner using the pagination controls", async () => {
    const user = userEvent.setup();
    const view = render(<HeroSection />);
    const secondSlide = HERO_SLIDES[1]!;

    await user.click(view.getByRole("button", { name: `Show ${secondSlide.alt}` }));

    await waitFor(() => {
      expect(view.getByRole("img", { name: secondSlide.alt }).closest("a")).toHaveAttribute(
        "href",
        secondSlide.href
      );
    });
  });
});
