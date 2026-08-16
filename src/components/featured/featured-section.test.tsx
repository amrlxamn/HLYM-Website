import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FeaturedSection } from "@/components/featured/featured-section";
import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";

describe("FeaturedSection", () => {
  it("renders the eight-card featured gallery", () => {
    const view = render(<FeaturedSection />);

    expect(view.container.querySelectorAll("article")).toHaveLength(8);
    expect(view.getByText("nmax - move through the city")).toBeInTheDocument();
    expect(view.getByText("follow yamaha malaysia")).toBeInTheDocument();
    expect(view.getByText("watch yamaha stories")).toBeInTheDocument();
    expect(view.container.querySelectorAll("[data-gallery-index]")).toHaveLength(8);
    expect(view.container.querySelector('[data-gallery-index="01"]')).toBeInTheDocument();
    expect(view.container.querySelector('[data-gallery-index="08"]')).toBeInTheDocument();
  });

  it("renders a focused heading without a chip or subtitle", () => {
    const view = render(<FeaturedSection />);

    const heading = view.container.querySelector("header h2");

    expect(heading).toHaveTextContent("born to perform");
    expect(view.container.querySelector("header p")).toBeNull();
    expect(view.container).not.toHaveTextContent(toSentenceCase(SITE_COPY.featured.intro));
  });

  it("renders discover buttons for every image card", () => {
    const view = render(<FeaturedSection />);

    const buttons = Array.from(view.container.querySelectorAll("button")).filter((button) =>
      button.textContent?.includes(SITE_COPY.featured.detailsLabel)
    );

    expect(buttons).toHaveLength(8);
    buttons.forEach((button) => {
      expect(button).toHaveTextContent(SITE_COPY.featured.detailsLabel);
      expect(button).not.toHaveStyle({ minWidth: "160px" });
    });
  });

  it("keeps the card CTA hugging its content instead of stretching", () => {
    render(<FeaturedSection />);

    const detailsRule = document.head.textContent?.match(
      /[^{}]*\{[^}]*top:calc\(100% \+ var\(--space-4\)\)[^}]*\}/
    )?.[0];

    expect(detailsRule).toBeTruthy();
    expect(detailsRule).toContain("align-items:flex-start");
    expect(detailsRule).not.toContain("justify-content");
  });

  it("renders the three-row motorcycle marquee", () => {
    const view = render(<FeaturedSection />);

    const marquee = view.container.querySelector(`section[aria-label="Yamaha motorcycle range"]`);

    expect(marquee?.children[0]?.children).toHaveLength(3);
    expect(marquee).not.toBeNull();
    expect(marquee).toHaveTextContent("XMAX 250");
    expect(marquee).toHaveTextContent("Y16ZR DOXOU");
    expect(marquee).toHaveTextContent("MT-15");
    expect(document.head.textContent).toContain("gap:var(--space-8)");
    expect(document.head.textContent).toContain("gap:var(--space-6)");
    expect(document.head.textContent).toContain("gap:var(--space-4)");
  });

  it("renders the looping cinematic video", () => {
    const view = render(<FeaturedSection />);
    const video = view.container.querySelector<HTMLVideoElement>(
      `video[src*="hlym/featured/video/yamaha-film.mp4"]`
    );

    expect(video).toHaveAttribute("autoplay");
    expect(video).toHaveAttribute("loop");
    expect(video?.muted).toBe(true);
    expect(video).toHaveAttribute("playsinline");
  });
});
