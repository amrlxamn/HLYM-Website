import { cleanup, render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  PRODUCT_FULL_SPECIFICATION_CONTENT,
  ProductFullSpecificationSection
} from "@/features/product-page";
import { PRODUCT_COLOR_OPTIONS } from "../constants/product-colors.constants";
import { PRODUCT_OVERVIEW_CONTENT } from "../constants/product-overview.constants";
import { PRODUCT_TECHNICAL_SPECIFICATIONS } from "../constants/product-technical-specifications.constants";
import { PRODUCT_CATALOG } from "../constants/product-catalog.constants";
import officialFeatures from "../constants/product-official-features.json";
import officialHotspots from "../constants/product-official-hotspots.json";

afterEach(() => {
  cleanup();
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe("ProductFullSpecificationSection", () => {
  it("includes the official hotspot image and feature coordinates for every model", () => {
    const expectedCounts: Record<string, number> = {
      xsr155: 9,
      "xmax-300": 4,
      y16zr: 6,
      y15zr: 4,
      "135lc-fi": 10,
      "yzf-r25": 6,
      tmax: 6,
      "tenere-700": 4,
      "pg-1": 6,
      "tracer-9-gt": 6,
      nmax: 7,
      "ego-avantiz": 8,
      ez115: 8,
      "ego-gear": 13,
      "mt-09": 13,
      nvx: 6,
      r15m: 8,
      "xmax-250": 6,
      yseries: 5,
      "mt-15": 11,
      "y16zr-6mro-limited-edition": 3,
      "mt-25": 12,
      "y16zr-doxou": 14
    };

    expect(PRODUCT_CATALOG.map(({ slug }) => slug)).toEqual(Object.keys(expectedCounts));
    for (const [slug, count] of Object.entries(expectedCounts)) {
      const items = officialFeatures[slug as keyof typeof officialFeatures];
      expect(items).toHaveLength(count);
      expect(
        items.every((item) => item.title && item.image.src && (item.description || slug === "nvx"))
      ).toBe(true);
      expect(officialHotspots[slug as keyof typeof officialHotspots].image).toBeTruthy();
    }
    expect(officialHotspots["y16zr-doxou"].points).toHaveLength(14);
    expect(officialHotspots["y16zr-doxou"].points[0]).toMatchObject({ x: 48.4, y: 16.8 });

    const product = PRODUCT_CATALOG.find(({ slug }) => slug === "y16zr-doxou")!;
    const items = officialFeatures["y16zr-doxou"];
    const view = render(
      <ProductFullSpecificationSection
        content={{ titleLines: ["Built to move.", "Made for the ride."], items }}
        model={product.model}
        specifications={product.specifications}
      />
    );
    const featureSection = within(
      view.getByRole("region", { name: "Yamaha Y16ZR DOXOU features" })
    );
    const tagged = within(
      view.getByRole("region", { name: "Yamaha Y16ZR DOXOU tagged motorcycle" })
    );
    expect(tagged.getByRole("img", { name: "Yamaha Y16ZR DOXOU feature diagram" })).toHaveAttribute(
      "src",
      officialHotspots["y16zr-doxou"].image
    );
    expect(tagged.getAllByRole("button", { name: /.+/ })).toHaveLength(14);
    expect(featureSection.getAllByRole("article")).toHaveLength(14);
    expect(
      featureSection.getByRole("heading", { name: "Penarik Tuas Klac Lebih Pendek" })
    ).toBeInTheDocument();
    expect(
      featureSection
        .getByRole("heading", { name: "Suis Pemberhentian Enjin Baru" })
        .closest("article")
        ?.querySelector("img")
    ).toHaveAttribute("src", items[13]!.image.src);
  });

  it("renders distinct feature and technical specification headings", () => {
    const view = render(<ProductFullSpecificationSection />);

    expect(view.getByRole("region", { name: "Yamaha NVX features" })).toBeInTheDocument();
    expect(view.queryByText("Full specification")).toBeNull();
    expect(
      view.getByRole("heading", {
        name: `${PRODUCT_FULL_SPECIFICATION_CONTENT.titleLines[0]} ${PRODUCT_FULL_SPECIFICATION_CONTENT.titleLines[1]}`
      })
    ).toBeInTheDocument();
    const featureSection = within(view.getByRole("region", { name: "Yamaha NVX features" }));
    expect(featureSection.getByText(PRODUCT_OVERVIEW_CONTENT.description)).toBeInTheDocument();
    const firstFeatureImage = featureSection.getByRole("img", {
      name: PRODUCT_FULL_SPECIFICATION_CONTENT.items[0]!.image.alt
    });
    expect(firstFeatureImage).toHaveAttribute(
      "src",
      PRODUCT_FULL_SPECIFICATION_CONTENT.items[0]!.image.src
    );
    expect(featureSection.getAllByRole("img")).toHaveLength(1);
    expect(
      getComputedStyle(firstFeatureImage.parentElement!.parentElement!).gridTemplateColumns
    ).toBe("repeat(2, minmax(0, 1fr))");
    const tagged = within(view.getByRole("region", { name: "Yamaha NVX tagged motorcycle" }));
    expect(tagged.getByRole("img", { name: "Yamaha NVX feature diagram" })).toHaveAttribute(
      "src",
      officialHotspots.nvx.image
    );
    expect(tagged.getAllByRole("button")).toHaveLength(5);
    expect(view.queryByRole("img", { name: /360/i })).toBeNull();
    expect(featureSection.queryByText(/^0[1-5]$/)).toBeNull();

    for (const item of PRODUCT_FULL_SPECIFICATION_CONTENT.items) {
      const title = item.eyebrow ? `${item.eyebrow} ${item.title}` : item.title;
      expect(
        featureSection
          .getByRole("heading", { name: title })
          .closest("article")
          ?.querySelector("img")
      ).toHaveAttribute("src", item.image.src);
    }

    const technicalSpecs = view.getByRole("region", {
      name: "Yamaha NVX technical specifications"
    });
    expect(technicalSpecs).toHaveAttribute("id", "product-specification");
    expect(getComputedStyle(technicalSpecs).minHeight).toBe("100dvh");
    expect(
      within(technicalSpecs).getByRole("heading", { name: "Technical specifications" })
    ).toBeInTheDocument();
    const categories = within(technicalSpecs).getByRole("group", {
      name: "Specification categories"
    });
    const engineButton = within(categories).getByRole("button", { name: "01 Engine" });
    expect(within(categories).getAllByRole("button")).toHaveLength(7);
    expect(engineButton).toHaveAttribute("aria-pressed", "true");
    expect(engineButton.querySelectorAll("span")).toHaveLength(2);
    expect(engineButton.querySelector("strong")).toBeNull();
    expect(technicalSpecs.querySelectorAll("dl")).toHaveLength(7);
    expect(technicalSpecs.querySelectorAll("dt")).toHaveLength(27);
    expect(technicalSpecs.querySelectorAll("dd")).toHaveLength(27);
    const engineDetails = technicalSpecs.querySelector("#product-specification-details-0")!;
    expect(getComputedStyle(engineDetails.parentElement!).display).toBe("grid");
    expect(engineDetails).toHaveAttribute("aria-hidden", "false");
    expect(engineDetails.querySelectorAll("dd")).toHaveLength(13);
    expect(
      PRODUCT_TECHNICAL_SPECIFICATIONS.reduce((total, group) => total + group.items.length, 0)
    ).toBe(27);
    expect(engineDetails).not.toHaveTextContent("Automatic V-belt");
    expect(engineDetails).toHaveTextContent("155cc");
    expect(engineDetails).toHaveTextContent("14.2 Nm (1.4 kgf.m) / 6,500 r/min");
    expect(engineDetails).toHaveTextContent("1.1L (Versi SP), 1.0L (Versi ABS)");
    expect(within(engineDetails as HTMLElement).getByText("Displacement").tagName).toBe("DT");
    expect(within(engineDetails as HTMLElement).getByText("155cc").tagName).toBe("DD");
    expect(within(technicalSpecs).queryByRole("button", { name: "CONTACT DEALER" })).toBeNull();
    expect(technicalSpecs).not.toHaveTextContent(
      "Specifications are subject to change without notice"
    );

    const modelSection = view.getByRole("region", { name: "Yamaha NVX SP dealer enquiry" });
    expect(technicalSpecs.nextElementSibling).toBe(modelSection);
    const ctaHeading = within(modelSection).getByRole("heading", { name: "NVX SP" });
    expect(getComputedStyle(modelSection.querySelector(":scope > div")!).maxWidth).toBe("1280px");
    expect(getComputedStyle(ctaHeading.parentElement!).gap).toBe("var(--space-4)");
    expect(getComputedStyle(ctaHeading.parentElement!.parentElement!).gap).toBe("var(--space-8)");
    const dealerCopy = within(modelSection).getByText(/Contact your nearest dealer/);
    expect(dealerCopy).toHaveTextContent(
      "Contact your nearest dealer for more information on the new NVX SP: you will be contacted to provide additional details and active financing proposals."
    );
    expect(getComputedStyle(dealerCopy).fontSize).toBe("16px");
    expect(getComputedStyle(dealerCopy).fontWeight).toBe("300");
    expect(getComputedStyle(dealerCopy).lineHeight).toBe("1.25");
    expect(getComputedStyle(dealerCopy).textTransform).not.toBe("uppercase");
    expect(modelSection).not.toHaveTextContent("DesertX");
    expect(
      within(modelSection).getByRole("img", { name: "Yamaha NVX SP in Gunmetal Grey" })
    ).toHaveAttribute("src", PRODUCT_COLOR_OPTIONS[0]!.image);
    expect(within(modelSection).queryByRole("link", { name: "EXPLORE" })).toBeNull();
    expect(view.queryByText("Other Models")).toBeNull();
    expect(modelSection).not.toHaveTextContent(
      "A fastback scooter designed for the rush of urban performance."
    );
  });

  it("opens the selected source hotspot and closes on Escape or outside click", async () => {
    const user = userEvent.setup();
    const view = render(<ProductFullSpecificationSection />);
    const features = within(view.getByRole("region", { name: "Yamaha NVX tagged motorcycle" }));
    const first = features.getByRole("button", { name: officialHotspots.nvx.points[0]!.title });
    const second = features.getByRole("button", { name: officialHotspots.nvx.points[1]!.title });

    await user.click(first);
    expect(first).toHaveAttribute("aria-expanded", "true");
    const panel = features.getByRole("region", { name: officialHotspots.nvx.points[0]!.title });
    expect(getComputedStyle(panel).position).toBe("absolute");
    expect(getComputedStyle(panel).right).toBe("0px");
    expect(within(panel).getByText("Feature 01 / 05")).toBeInTheDocument();
    await user.click(second);
    expect(first).toHaveAttribute("aria-expanded", "false");
    expect(
      features.getByRole("region", { name: officialHotspots.nvx.points[1]!.title })
    ).toBeInTheDocument();
    expect(features.getByText("Feature 02 / 05")).toBeInTheDocument();
    await user.keyboard("{Escape}");
    expect(
      features.queryByRole("region", { name: officialHotspots.nvx.points[1]!.title })
    ).toBeNull();
    expect(second).toHaveFocus();
    await user.click(first);
    await user.pointer({ keys: "[MouseLeft]", target: document.body });
    expect(
      features.queryByRole("region", { name: officialHotspots.nvx.points[0]!.title })
    ).toBeNull();
  });

  it("keeps the NVX-height specifications footprint on other models when categories change", async () => {
    const user = userEvent.setup();
    const product = PRODUCT_CATALOG.find((model) => model.slug === "pg-1")!;
    const view = render(
      <ProductFullSpecificationSection
        model={product.model}
        specifications={product.specifications}
      />
    );
    const section = view.getByRole("region", {
      name: "Yamaha PG-1 technical specifications"
    });
    const categories = within(section).getByRole("group", { name: "Specification categories" });
    const engine = section.querySelector("#product-specification-details-0")!;

    expect(getComputedStyle(section).minHeight).toBe("100dvh");
    await user.click(within(categories).getByRole("button", { name: /02 / }));
    expect(getComputedStyle(engine).display).toBe("flex");
    expect(getComputedStyle(engine).visibility).toBe("hidden");
    expect(getComputedStyle(section).minHeight).toBe("100dvh");
  });

  it("switches the right-hand details when categories 02–07 are selected", async () => {
    const user = userEvent.setup();
    const view = render(<ProductFullSpecificationSection />);
    const technicalSpecs = within(view.container).getByRole("region", {
      name: "Yamaha NVX technical specifications"
    });
    const categories = within(technicalSpecs).getByRole("group", {
      name: "Specification categories"
    });
    const engineDetails = technicalSpecs.querySelector("#product-specification-details-0")!;

    for (const [index, group] of PRODUCT_TECHNICAL_SPECIFICATIONS.entries()) {
      if (index === 0) continue;

      const button = within(categories).getByRole("button", {
        name: `${String(index + 1).padStart(2, "0")} ${group.title}`
      });
      await user.click(button);

      const details = technicalSpecs.querySelector(`#product-specification-details-${index}`)!;
      expect(button).toHaveAttribute("aria-pressed", "true");
      expect(button).toHaveAttribute("aria-controls", details.id);
      expect(details).toHaveAttribute("aria-label", `${group.title} specifications`);
      expect(details).toHaveAttribute("aria-hidden", "false");
      expect(engineDetails).toHaveAttribute("aria-hidden", "true");
      expect(getComputedStyle(engineDetails).visibility).toBe("hidden");
      expect(details.querySelectorAll("dd")).toHaveLength(group.items.length);
      for (const spec of group.items) {
        expect(within(details as HTMLElement).getByText(spec.value)).toBeInTheDocument();
      }
    }

    const engineButton = within(categories).getByRole("button", { name: "01 Engine" });
    engineButton.focus();
    await user.keyboard("[Enter]");
    expect(engineButton).toHaveAttribute("aria-pressed", "true");
    expect(engineDetails).toHaveAttribute("aria-hidden", "false");
    expect(within(engineDetails as HTMLElement).getByText("155cc")).toBeInTheDocument();
  });

  it("opens the Contact Us enquiry panel for a dealer request", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      json: async () => ({ status: "accepted", ticketReference: "HLYM-2026-NVX123" }),
      ok: true
    });
    vi.stubEnv("VITE_CONTACT_ENQUIRY_WEBHOOK_URL", "https://n8n.test/webhook/contact-enquiry");
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    const view = render(<ProductFullSpecificationSection />);
    const specs = view.getByRole("region", { name: "Yamaha NVX technical specifications" });
    const modelSection = view.getByRole("region", { name: "Yamaha NVX SP dealer enquiry" });
    const contactDealer = within(modelSection).getByRole("button", { name: "CONTACT DEALER" });

    expect(within(specs).queryByRole("button", { name: "CONTACT DEALER" })).toBeNull();
    expect(view.queryByText(/Specifications are subject to change without notice/)).toBeNull();
    expect(specs).not.toHaveTextContent("Zero Motorcycles");
    await user.click(contactDealer);

    expect(view.getByRole("dialog", { name: "CONTACT DEALER" })).toBeInTheDocument();
    expect(view.getByLabelText("Type of enquiry")).toHaveValue("Sales & Marketing");
    await user.type(view.getByLabelText("Full name"), "Aina Rahman");
    await user.type(view.getByLabelText("Email address"), "Aina@example.com");
    await user.type(view.getByLabelText("Mobile phone"), "+60123456789");
    await user.type(view.getByRole("textbox", { name: /details/i }), "Interested in an NVX SP.");
    await user.click(view.getByRole("checkbox"));
    await user.click(view.getByRole("button", { name: /submit enquiry/i }));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledOnce());
    const requestBody = JSON.parse((fetchMock.mock.calls[0]![1] as RequestInit).body as string);
    expect(requestBody).toMatchObject({
      source: "webflow-product-page",
      topic: "Sales & Marketing"
    });

    await user.keyboard("{Escape}");
    await waitFor(() => expect(view.queryByRole("dialog")).not.toBeInTheDocument());
    expect(contactDealer).toHaveFocus();
  });

  it("keeps the pinned feature viewport and adds the tagged motorcycle after it", () => {
    const view = render(<ProductFullSpecificationSection />);

    expect(
      getComputedStyle(within(view.container).getByRole("region", { name: "Yamaha NVX features" }))
        .paddingTop
    ).toBe("100px");
    const hotspots = view.getByRole("group", { name: "Yamaha NVX feature hotspots" });
    expect(getComputedStyle(hotspots).maxWidth).toBe("1280px");
    expect(getComputedStyle(hotspots).overflowY).not.toBe("auto");
    expect(document.head.textContent).toContain("position:sticky");
    expect(document.head.textContent).toContain("mask-image:linear-gradient");
    expect(document.head.textContent).toContain("overflow-y:hidden");
  });
});
