import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { App } from "@/app/app";
import { CONTACT_HERO_CONTENT } from "@/features/contact-page";
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
    const newsSection = view.getByRole("region", { name: toSentenceCase(news.ariaLabel) });

    expect(view.getByAltText(toSentenceCase(header.logoAlt))).toBeInTheDocument();
    expect(view.getByRole("region", { name: toSentenceCase(hero.ariaLabel) })).toBeInTheDocument();
    expect(newsSection).toBeInTheDocument();
    expect(newsSection.querySelectorAll("article")).toHaveLength(6);
    expect(view.getByText(toSentenceCase(footer.copyright))).toBeInTheDocument();
    expect(siteTheme.typography.body).toBe('"Lato", Arial, sans-serif');
    expect(document.head.textContent).toMatch(/@media \(max-width:\s*980px\)/);
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
    expect(
      view.queryByRole("region", { name: toSentenceCase(SITE_COPY.hero.ariaLabel) })
    ).toBeNull();
  });

  it("renders the standalone contact page on the contact route", () => {
    window.history.replaceState({}, "", "/contact-us");

    const view = render(<App />);

    expect(view.getByRole("region", { name: CONTACT_HERO_CONTENT.ariaLabel })).toBeInTheDocument();
    expect(
      view
        .getAllByRole("link", { name: "contact us" })
        .some((link) => link.getAttribute("href") === "/contact-us")
    ).toBe(true);
    expect(
      view.queryByRole("region", { name: toSentenceCase(SITE_COPY.hero.ariaLabel) })
    ).toBeNull();
  });
});
