import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { App } from "@/app/app";
import { PRODUCT_HERO_VIDEO } from "@/features/product-page";
import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { siteTheme } from "@/theme/site-theme";

afterEach(() => {
  cleanup();
  window.history.replaceState({}, "", "/");
});

describe("App", () => {
  it("renders the core landing-page sections", () => {
    const view = render(<App />);
    const { footer, header, hero, news } = SITE_COPY;
    const spotlightImage = view.getByAltText("Yamaha tracer 9 gt sport touring spotlight");
    const newsSection = view.getByRole("region", { name: toSentenceCase(news.ariaLabel) });
    const spotlight = spotlightImage.closest("article");

    if (!spotlight) {
      throw new Error("Expected spotlight article to exist");
    }

    expect(view.getByAltText(toSentenceCase(header.logoAlt))).toBeInTheDocument();
    expect(view.getByRole("region", { name: toSentenceCase(hero.ariaLabel) })).toBeInTheDocument();
    expect(newsSection).toBeInTheDocument();
    expect(spotlight).toBeInTheDocument();
    expect(spotlight.compareDocumentPosition(newsSection) & Node.DOCUMENT_POSITION_FOLLOWING).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING
    );
    expect(view.getByText("119ps peak power")).toBeInTheDocument();
    expect(view.getByText("intelligent ride")).toBeInTheDocument();
    expect(view.getByText("connected cockpit")).toBeInTheDocument();
    expect(view.queryByText("intelligent suspension")).not.toBeInTheDocument();
    expect(view.getByText(toSentenceCase(footer.copyright))).toBeInTheDocument();
    const footerWordmarks = view.getAllByText(footer.watermark);

    expect(footerWordmarks.some((node) => node.closest("[aria-hidden='true']"))).toBe(true);
    expect(
      document.querySelector("img[src='/assets/hlym/footer-wordmark/y-stroke.svg']")
    ).not.toBeNull();
    expect(document.head.textContent).toContain("/assets/hlym/footer-wordmark/yamaha-mask.svg");
    expect(document.head.textContent).toMatch(/height:\s*clamp\(64px,\s*11\.1vw,\s*196px\)/);
    expect(document.head.textContent).toContain("--footer-wordmark-stroke-top");
    expect(siteTheme.typography.body).toBe('"Lato", Arial, sans-serif');
    expect(document.head.textContent).toMatch(/@media \(max-width:\s*980px\)/);
    expect(document.head.textContent).toMatch(/width:\s*min\(calc\(100vw - 160px\),\s*1274px\)/);
    expect(document.querySelector("video source[src='/assets/hlym/nvx-hero.mp4']")).not.toBeNull();
    expect(view.queryByLabelText("custom cursor")).not.toBeInTheDocument();
  });

  it("renders the standalone products page on the products route", () => {
    window.history.replaceState({}, "", "/products");

    const view = render(<App />);

    expect(view.getByRole("region", { name: "Products showcase page" })).toBeInTheDocument();
    expect(
      view.getByRole("region", { name: toSentenceCase(PRODUCT_HERO_VIDEO.ariaLabel) })
    ).toBeInTheDocument();
    expect(view.getByRole("region", { name: "Yamaha NVX overview" })).toBeInTheDocument();
    expect(view.getByRole("region", { name: "Yamaha NVX full specification" })).toBeInTheDocument();
    expect(view.getByRole("heading", { name: "Yamaha NVX SP" })).toBeInTheDocument();
    expect(
      view.queryByRole("region", { name: toSentenceCase(SITE_COPY.hero.ariaLabel) })
    ).toBeNull();
  });
});
