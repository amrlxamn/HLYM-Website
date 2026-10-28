import { cleanup, render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { App } from "@/app/app";
import { CONTACT_HERO_CONTENT } from "@/features/contact-page";
import { PRODUCT_HERO_VIDEO } from "@/features/product-page";
import {
  PRODUCT_CATALOG,
  PRODUCT_ROTATION_START_INDEX
} from "@/features/product-page/constants/product-catalog.constants";
import officialFrames from "@/features/product-page/constants/product-official-360-frames.json";
import officialHotspots from "@/features/product-page/constants/product-official-hotspots.json";
import officialSpecifications from "@/features/product-page/constants/product-official-specifications.json";
import {
  ProductOverviewDescription,
  ProductOverviewTitle
} from "@/features/product-page/styles/product-overview-copy.styles";
import { PRODUCT_CURTAIN_MODELS } from "@/components/header/product-curtain-models.constants";
import { SITE_COPY } from "@/data/site-copy.constants";
import { toSentenceCase } from "@/lib/to-sentence-case";
import { siteTheme } from "@/theme/site-theme";

afterEach(() => {
  cleanup();
  window.history.replaceState({}, "", "/");
});

describe("App", () => {
  it.each([
    ["/news-events", "All news"],
    ["/yamalube-scan", "Yamalube Scan & Win"]
  ])("renders the local %s page", async (path, heading) => {
    window.history.replaceState({}, "", path);
    const view = render(<App />);

    expect(await view.findByRole("heading", { name: heading, level: 1 })).toBeInTheDocument();
  });

  it.each([
    ["/after-sales", "After Sales", "Tools & tips", "after sales"],
    ["/yez", "Yamaha Endorsed Zone", "Mengapa YEZ?", "yamaha endorsed zone (yez)"],
    ["/y-connect", "Y-Connect", "Features at a glance", "y-connect"],
    ["/motorsports", "Motorsports", "2026 race schedule", "motorsports"],
    ["/resources", "Resources", "Downloads", "resources"],
    ["/career", "Career", "Available positions", "career"]
  ])(
    "renders %s and links to it from the utility navigation",
    async (path, title, section, navLabel) => {
      window.history.replaceState({}, "", path);
      const view = render(<App />);

      expect(await view.findByRole("heading", { name: title, level: 1 })).toBeInTheDocument();
      expect(view.getByRole("heading", { name: section })).toBeInTheDocument();
      expect(
        view
          .getAllByRole("link", { name: navLabel })
          .some((link) => link.getAttribute("href") === path)
      ).toBe(true);
    }
  );

  it("only links to available resource files and the official careers listing", async () => {
    window.history.replaceState({}, "", "/resources");
    const resources = render(<App />);
    await resources.findByRole("heading", { name: "Resources", level: 1 });

    const pdfLinks = resources.getAllByRole("link", { name: /\(PDF\)/ });
    expect(pdfLinks.length).toBeGreaterThan(40);
    for (const link of pdfLinks) {
      expect(link.getAttribute("href")).toMatch(/^https:\/\/.+\.pdf$/i);
    }
    resources.unmount();

    window.history.replaceState({}, "", "/career");
    const careers = render(<App />);
    await careers.findByRole("heading", { name: "Career", level: 1 });
    expect(
      careers
        .getAllByRole("listitem")
        .filter((item) => item.textContent?.includes("Sungai Buloh, Selangor"))
    ).toHaveLength(7);
    expect(careers.getByRole("link", { name: "View current openings" })).toHaveAttribute(
      "href",
      "https://www.yamaha-motor.com.my/career"
    );
    expect(careers.getByText("Engineer, QA")).toBeInTheDocument();
  });

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

  it("lists every Yamaha model on the products route", () => {
    window.history.replaceState({}, "", "/products");

    const view = render(<App />);

    expect(view.getByRole("heading", { name: "Our motorcycles." })).toBeInTheDocument();
    expect(PRODUCT_CATALOG).toHaveLength(23);
    expect(new Set(PRODUCT_CATALOG.map((product) => product.slug)).size).toBe(23);
    for (const models of Object.values(PRODUCT_CURTAIN_MODELS)) {
      for (const model of models) {
        expect(PRODUCT_CATALOG.some((product) => product.slug === model.slug)).toBe(true);
      }
    }
    for (const product of PRODUCT_CATALOG) {
      expect(product.image).toBeTruthy();
      expect(product.overview.length).toBeGreaterThan(0);
      expect(product.colors.length).toBeGreaterThan(0);
      if (product.slug !== "nvx") {
        expect(product.model.image).toBe(product.colors[0]?.image);
      }
      for (const color of product.colors) {
        expect(color.swatch).not.toBe(color.image);
      }
      if (product.slug === "yseries") {
        expect(product.model.posterMark).toBeUndefined();
      } else {
        expect(product.model.posterMark?.src).toMatch(/^\/assets\/hlym\/.+\.png$/);
      }
      expect(
        view.getByRole("link", { name: new RegExp(`Yamaha ${product.name}`, "i") })
      ).toHaveAttribute("href", `/products/${product.slug}`);
    }
  });

  it("uses complete official specifications and genuine 360 sequences for every model", () => {
    for (const product of PRODUCT_CATALOG) {
      const slug = product.slug as keyof typeof officialSpecifications;
      expect(product.specifications).toEqual(officialSpecifications[slug]);
      expect(
        product.specifications.reduce((total, group) => total + group.items.length, 0)
      ).toBeGreaterThanOrEqual(20);
      expect(product.model.frames?.length).toBeGreaterThan(1);
      if (product.slug !== "nvx") {
        const source = officialFrames[slug];
        const start = PRODUCT_ROTATION_START_INDEX[slug];
        expect(start).toBeLessThan(source.length);
        expect(product.model.frames).toEqual([...source.slice(start), ...source.slice(0, start)]);
      }
    }
  });

  it("renders the NVX layout at its dedicated route", () => {
    window.history.replaceState({}, "", "/products/nvx");

    const view = render(<App />);

    expect(view.getByRole("region", { name: "Products showcase page" })).toBeInTheDocument();
    expect(
      view.getByRole("region", { name: toSentenceCase(PRODUCT_HERO_VIDEO.ariaLabel) })
    ).toBeInTheDocument();
    expect(view.getByRole("region", { name: "Yamaha NVX overview" })).toBeInTheDocument();
    expect(
      view.getByRole("region", { name: "Yamaha NVX technical specifications" })
    ).toBeInTheDocument();
    expect(
      view.queryByRole("region", { name: toSentenceCase(SITE_COPY.hero.ariaLabel) })
    ).toBeNull();
  });

  it("keeps the original NVX route available", () => {
    window.history.replaceState({}, "", "/nvx");

    const view = render(<App />);

    expect(view.getByRole("region", { name: "Yamaha NVX overview" })).toBeInTheDocument();
  });

  it("uses MT-09 photography and facts without showing NVX specifications", () => {
    window.history.replaceState({}, "", "/products/mt-09");

    const view = render(<App />);

    expect(view.getByRole("img", { name: "Yamaha MT-09 mark" })).toBeInTheDocument();
    expect(view.getByRole("region", { name: "Yamaha MT-09 overview" })).toBeInTheDocument();
    expect(view.getAllByText("Intuitive Control Switch").length).toBeGreaterThan(0);
    expect(view.getAllByText("890cc").length).toBeGreaterThan(0);
    expect(
      view.getByRole("group", { name: "360 view of Yamaha MT-09 in Lightning Blue" })
    ).toBeInTheDocument();
    expect(view.queryByText("NVX SP")).not.toBeInTheDocument();
    expect(view.queryByRole("group", { name: "Yamaha NVX body colors" })).not.toBeInTheDocument();
    expect(view.getByRole("group", { name: "Yamaha MT-09 body colors" })).toBeInTheDocument();
    expect(
      view.queryByRole("link", { name: /view full specifications on yamaha motor malaysia/i })
    ).not.toBeInTheDocument();
  });

  it("shows the XMAX 250 bike rather than its campaign poster in the dealer section", () => {
    window.history.replaceState({}, "", "/products/xmax-250");

    const view = render(<App />);
    const panel = view.getByRole("region", { name: "Yamaha XMAX 250 dealer enquiry" });
    const product = PRODUCT_CATALOG.find((item) => item.slug === "xmax-250")!;

    expect(panel.querySelector("img")).toHaveAttribute("src", product.colors[0]!.image);
    expect(panel.querySelector("img")).toHaveAttribute("alt", product.model.alt);
  });

  it("renders the EZ115 specifications and 360 imagery from its official CMS record", () => {
    window.history.replaceState({}, "", "/products/ez115");

    const view = render(<App />);

    expect(view.getByRole("img", { name: "Yamaha EZ115 mark" })).toBeInTheDocument();
    expect(
      view.getByRole("group", { name: "360 view of Yamaha EZ115 in Biru" })
    ).toBeInTheDocument();
    expect(view.getByRole("group", { name: "Yamaha EZ115 body colors" })).toBeInTheDocument();
    expect(view.getAllByText("114 cm3").length).toBeGreaterThan(0);
    expect(view.getByText("Sejukan Udara, 4-Lejang, SOHC, 2-Injap")).toBeInTheDocument();
    expect(
      within(view.getByRole("region", { name: "Yamaha EZ115 tagged motorcycle" })).getByRole(
        "img",
        { name: "Yamaha EZ115 feature diagram" }
      )
    ).toHaveAttribute("src", officialHotspots.ez115.image);
    expect(
      within(view.getByRole("region", { name: "Yamaha EZ115 features" })).getAllByRole("article")
    ).toHaveLength(8);
    expect(view.queryByText("155cc")).not.toBeInTheDocument();
  });

  it("shows the full published feature list beneath the DOXOU heading", () => {
    window.history.replaceState({}, "", "/products/y16zr-doxou");

    const view = render(<App />);
    const features = within(view.getByRole("region", { name: "Yamaha Y16ZR DOXOU features" }));

    expect(
      features.getByRole("heading", { name: "Built to move. Made for the ride." })
    ).toBeInTheDocument();
    expect(features.getAllByRole("article")).toHaveLength(14);
    const tagged = within(
      view.getByRole("region", { name: "Yamaha Y16ZR DOXOU tagged motorcycle" })
    );
    expect(tagged.getAllByRole("button")).toHaveLength(14);
    expect(
      tagged.getByRole("img", { name: "Yamaha Y16ZR DOXOU feature diagram" })
    ).toBeInTheDocument();
    expect(
      tagged.getByRole("button", { name: "Penarik Tuas Klac Lebih Pendek" })
    ).toBeInTheDocument();
    expect(
      tagged.getByRole("button", { name: "Suis Pemberhentian Enjin Baru" })
    ).toBeInTheDocument();
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

  it.each([
    [
      "/corporate",
      "Company Introduction",
      "A partnership that started moving Malaysia in 1978",
      "The start"
    ],
    [
      "/company-introduction",
      "Company Introduction",
      "A partnership that started moving Malaysia in 1978",
      "The start"
    ],
    ["/4-millionth-rollout", "4 Millionth Rollout", "4 Millionth Rollout", null],
    ["/social-responsibility", "Social Responsibility", "Yamaha Safety Riding Science", null],
    ["/principal-policies", "Principles & Policies", "How we work matters", "Principles & policies"]
  ])(
    "renders Yamaha's %s corporate page with four-section navigation",
    async (path, label, heading, removedLabel) => {
      window.history.replaceState({}, "", path);
      const view = render(<App />);

      const tabs = await view.findByRole(
        "navigation",
        { name: "Corporate sections" },
        { timeout: 5000 }
      );
      expect(within(tabs).getAllByRole("link")).toHaveLength(4);
      expect(
        within(tabs)
          .getAllByRole("link")
          .map((link) => link.textContent)
      ).toEqual([
        "Company Introduction",
        "Social Responsibility",
        "Principles & Policies",
        "4 Millionth Rollout"
      ]);
      expect(within(tabs).queryByRole("link", { name: "Corporate" })).toBeNull();
      expect(within(tabs).getByRole("link", { name: label })).toHaveAttribute(
        "aria-current",
        "page"
      );
      expect(view.getByRole("heading", { name: "Powering the passion" })).toBeInTheDocument();
      expect(view.getByRole("heading", { name: heading })).toBeInTheDocument();
      for (const title of within(view.container.querySelector("main")!).getAllByRole("heading")) {
        expect(title.textContent?.trim()).not.toMatch(/\.$/);
      }
      if (removedLabel) expect(view.queryByText(removedLabel)).not.toBeInTheDocument();
      if (path === "/corporate") {
        const timeline = view.getByRole("group", { name: "Company milestones" }).closest("section");
        expect(timeline).not.toBeNull();
        expect(
          within(timeline!).getByRole("button", { name: "Pause timeline" })
        ).toBeInTheDocument();
        expect(within(timeline!).getByText("Our journey through the years")).toBeInTheDocument();
        expect(within(timeline!).queryByRole("button", { name: /milestone$/ })).toBeNull();
        expect(
          within(timeline!).queryByRole("heading", {
            name: "A partnership that started moving Malaysia in 1978"
          })
        ).toBeNull();
        expect(view.queryByText("From Shah Alam to the Hong Leong Yamaha Complex.")).toBeNull();
        expect(
          view.getByText(/Automation robotic technology and Automated Guided vehicles/)
        ).toBeInTheDocument();
        expect(view.getByText(/committed to carry on powering the passions/)).toBeInTheDocument();
        expect(
          view
            .getByText(
              "Investing in people, technology and the quality of every motorcycle we build"
            )
            .closest("section")?.previousElementSibling?.textContent
        ).toContain("Hong Leong Yamaha Motor is committed");
        expect(
          view.getByRole("img", { name: "Aerial view of the Hong Leong Yamaha Complex" })
        ).toHaveAttribute("src", "/assets/hlym/contact/contact-complex.webp");
        expect(
          view.queryByText("Hong Leong Yamaha Complex, Sungai Buloh, Selangor.")
        ).not.toBeInTheDocument();
      }
    }
  );

  it("shows all official 4 Millionth Rollout photos in the corporate navigation", async () => {
    window.history.replaceState({}, "", "/4-millionth-rollout");
    const view = render(<App />);
    await view.findByRole("navigation", { name: "Corporate sections" }, { timeout: 5000 });
    const gallery = within(view.getByRole("group", { name: "4 Millionth Rollout photos" }));

    expect(gallery.getAllByRole("img")).toHaveLength(17);
    expect(gallery.getAllByRole("link")).toHaveLength(17);
    expect(gallery.getAllByRole("link")[0]).toHaveAttribute(
      "href",
      expect.stringContaining("4-millionth-rollout-12_002.jpg")
    );
  });

  it("shares the Contact Us hero typography and a locally loaded image", async () => {
    window.history.replaceState({}, "", "/contact-us");
    const contact = render(<App />);
    const contactTitle = contact.getByRole("heading", { name: "How can we help?" });

    window.history.replaceState({}, "", "/corporate");
    const corporate = render(<App />);
    await corporate.findByRole("navigation", { name: "Corporate sections" }, { timeout: 5000 });
    const corporateTitle = corporate.getByRole("heading", { name: "Powering the passion" });
    const hero = within(corporate.getByRole("region", { name: "Corporate hero" }));

    expect(corporateTitle.className).toBe(contactTitle.className);
    expect(getComputedStyle(corporateTitle).fontSize).toBe(getComputedStyle(contactTitle).fontSize);
    expect(
      getComputedStyle(
        corporate.getByText("Motorcycles, people and progress — made for the roads ahead.")
      ).color
    ).toBe(getComputedStyle(contact.getByText(CONTACT_HERO_CONTENT.description)).color);
    expect(
      hero.getByRole("img", { name: "Yamaha riders on motorcycles along a forest road" })
    ).toHaveAttribute("src", "/assets/hlym/corporate-hero.webp");
  });

  it("uses product-page typography for corporate sections", async () => {
    const reference = render(
      <>
        <ProductOverviewTitle>Heading reference</ProductOverviewTitle>
        <ProductOverviewDescription>Body reference</ProductOverviewDescription>
      </>
    );
    window.history.replaceState({}, "", "/corporate");
    const corporate = render(<App />);
    await corporate.findByRole("navigation", { name: "Corporate sections" }, { timeout: 5000 });

    const pairs = [
      [
        corporate.getByRole("heading", {
          name: "A partnership that started moving Malaysia in 1978"
        }),
        reference.getByRole("heading", { name: "Heading reference" })
      ],
      [
        corporate.getByText(/joint venture between Hong Leong Industries Bhd/),
        reference.getByText("Body reference")
      ]
    ] as const;

    for (const [corporateText, productText] of pairs) {
      const actual = getComputedStyle(corporateText);
      const expected = getComputedStyle(productText);
      expect(actual.fontSize).toBe(expected.fontSize);
      expect(actual.fontWeight).toBe(expected.fontWeight);
      expect(actual.textTransform).toBe(expected.textTransform);
    }

    expect(
      getComputedStyle(corporate.getByText(/joint venture between Hong Leong Industries Bhd/))
        .maxWidth
    ).toBe("none");
    expect(getComputedStyle(corporate.getByText(/Automation robotic technology/)).maxWidth).toBe(
      "none"
    );
  });

  it("preserves the official company timeline, safety activities and policy documents", async () => {
    const user = userEvent.setup();
    window.history.replaceState({}, "", "/company-introduction");
    const company = render(<App />);
    await company.findByRole("navigation", { name: "Corporate sections" }, { timeout: 5000 });
    expect(company.getByText("The first Yamaha RX100")).toBeInTheDocument();
    expect(company.getByText(/Appointed the official licence holder for CKD/)).toBeInTheDocument();
    expect(
      within(
        company.getByRole("group", { name: "Company milestones" }).closest("section")!
      ).queryByText(/Appointed the official licence holder for CKD/)
    ).toBeNull();
    await user.click(company.getByRole("button", { name: "2018: Four million motorcycles" }));
    expect(company.getByRole("heading", { name: "Four million motorcycles" })).toBeInTheDocument();
    company.unmount();

    window.history.replaceState({}, "", "/social-responsibility");
    const social = render(<App />);
    await social.findByRole("navigation", { name: "Corporate sections" }, { timeout: 5000 });
    expect(
      social.getByRole("heading", {
        name: "A corporate social responsibility initiative in support of the Road Safety Campaign"
      })
    ).toBeInTheDocument();
    expect(social.getByRole("heading", { name: "CCS Pledge" })).toBeInTheDocument();
    const pledgeImage = social.getByRole("img", { name: /CCS Pledge poster/ });
    expect(pledgeImage).toHaveAttribute(
      "src",
      expect.stringContaining("6a45e656eecc21ca675c339a_CSS-PLEDGE.jpg")
    );
    expect(pledgeImage.closest("figure")?.previousElementSibling).toHaveTextContent(
      "Customer & Community Satisfaction"
    );
    expect(
      social.getByRole("heading", { name: "Balik Kampung Road Safety Campaign" })
    ).toBeInTheDocument();
    expect(social.getByText(/was incorporated in Malaysia in 1978/)).toBeInTheDocument();
    expect(social.getByText(/annually to educate motorcyclists/)).toBeInTheDocument();
    expect(
      social.getByText(/free helmet exchanges, free safety-vest distribution/)
    ).toBeInTheDocument();
    expect(
      within(
        social.getByRole("group", { name: "Yamaha Safety Riding Science activities" })
      ).getAllByRole("img")
    ).toHaveLength(6);
    const campaignImage = social.getByRole("img", {
      name: "Yamaha representatives at the 2014 Balik Kampung road safety campaign"
    });
    expect(campaignImage).toHaveAttribute(
      "src",
      expect.stringContaining("Balik-Kampung-Road-Safety-Campaign.jpg")
    );
    expect(campaignImage.closest("figure")?.nextElementSibling).toBe(
      social.getByRole("group", { name: "Balik Kampung Road Safety Campaign activities" })
    );
    social.unmount();

    window.history.replaceState({}, "", "/principal-policies");
    const policies = render(<App />);
    await policies.findByRole("navigation", { name: "Corporate sections" }, { timeout: 5000 });
    expect(policies.getAllByRole("link", { name: /Download .* \(PDF\)/ })).toHaveLength(7);
    for (const link of policies.getAllByRole("link", { name: /Download .* \(PDF\)/ })) {
      expect(link).toHaveTextContent(/^DOWNLOAD$/);
      expect(link.querySelector("svg[aria-hidden='true']")).not.toBeNull();
    }
    expect(policies.getByRole("heading", { name: "Quality Policy" })).toBeInTheDocument();
  });
});
