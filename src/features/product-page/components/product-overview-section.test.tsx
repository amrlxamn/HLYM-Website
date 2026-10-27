import { cleanup, fireEvent, render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  PRODUCT_OVERVIEW_CONTENT,
  ProductOverviewSection,
  ProductOverviewSlidingCarousel
} from "@/features/product-page";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("ProductOverviewSection", () => {
  it("renders a full-width NVX SP carousel with captions and preview controls", () => {
    const view = render(<ProductOverviewSection />);

    expect(view.getByRole("region", { name: "Yamaha NVX overview" })).toBeInTheDocument();
    expect(view.queryByRole("heading", { name: /Meet the NVX SP/i })).toBeNull();
    const galleryElement = view.getByRole("region", { name: "Yamaha NVX SP photo gallery" });
    const gallery = within(galleryElement);
    expect(gallery.queryByText(PRODUCT_OVERVIEW_CONTENT.description)).toBeNull();
    expect(getComputedStyle(galleryElement).maxWidth).toBe("none");
    expect(getComputedStyle(galleryElement).width).toBe("100%");
    const captionAlignment = gallery.getByRole("heading", { name: "NVX SP" }).parentElement!
      .parentElement!;
    const previewAlignment = gallery.getByRole("group", {
      name: "Choose NVX SP photo"
    }).parentElement!;
    expect(getComputedStyle(captionAlignment).maxWidth).toBe("1280px");
    expect(getComputedStyle(previewAlignment).maxWidth).toBe("1280px");
    expect(gallery.getAllByRole("img")).toHaveLength(1);
    expect(
      gallery.getByRole("img", {
        name: /White and blue Yamaha NVX 155 SP, right three-quarter view/i
      })
    ).toHaveAttribute("src", "/assets/hlym/nvx-gallery/nvx-sp-review-01.webp");
    expect(gallery.getByRole("heading", { name: "NVX SP" })).toBeInTheDocument();
    expect(gallery.getByText(/White and blue bodywork/)).toBeInTheDocument();
    const previews = within(gallery.getByRole("group", { name: "Choose NVX SP photo" }));
    expect(previews.getAllByRole("button")).toHaveLength(6);
    expect(previews.getByRole("button", { name: /photo 1: NVX SP/i })).toHaveAttribute(
      "aria-pressed",
      "true"
    );
    expect(previews.getByRole("button", { name: /photo 2: Digital display/i })).toHaveAttribute(
      "aria-pressed",
      "false"
    );
    expect(view.queryByRole("button", { name: "Previous NVX SP photo" })).toBeNull();
    expect(view.queryByRole("button", { name: "Next NVX SP photo" })).toBeNull();
    expect(view.queryByRole("region", { name: "Yamaha NVX SP sliding photo gallery" })).toBeNull();
    expect(view.getAllByText("Maximum Torque")).toHaveLength(1);
    expect(view.getAllByText("14.2 Nm (1.4 kgf.m) / 6,500 r/min")).toHaveLength(1);
    expect(view.getByRole("region", { name: "Yamaha NVX features" })).toBeInTheDocument();

    expect(view.queryByRole("group", { name: "Yamaha NVX body colors" })).toBeNull();
  });

  it("switches photos using previews and arrow keys without wrapping", async () => {
    const user = userEvent.setup();
    const view = render(<ProductOverviewSection />);
    const gallery = view.getByRole("region", { name: "Yamaha NVX SP photo gallery" });
    const carousel = within(gallery);
    const previews = within(carousel.getByRole("group", { name: "Choose NVX SP photo" }));

    gallery.focus();
    await user.keyboard("[ArrowLeft]");
    expect(carousel.getByRole("img", { name: /right three-quarter view/i })).toBeInTheDocument();

    await user.click(previews.getByRole("button", { name: /photo 2: Digital display/i }));
    expect(
      carousel.getByRole("img", { name: /instrument display and lap timer/i })
    ).toHaveAttribute("src", "/assets/hlym/nvx-gallery/nvx-sp-review-53.webp");
    expect(previews.getByRole("button", { name: /photo 2: Digital display/i })).toHaveAttribute(
      "aria-pressed",
      "true"
    );

    await user.click(previews.getByRole("button", { name: /photo 1: NVX SP/i }));
    expect(carousel.getByRole("img", { name: /right three-quarter view/i })).toBeInTheDocument();

    await user.click(previews.getByRole("button", { name: /photo 3: Front profile/i }));
    expect(carousel.getByRole("img", { name: /front three-quarter view/i })).toHaveAttribute(
      "src",
      "/assets/hlym/nvx-gallery/nvx-sp-review-04.webp"
    );

    await user.click(previews.getByRole("button", { name: /photo 6: Every angle/i }));
    expect(carousel.getByRole("img", { name: /rear three-quarter view/i })).toHaveAttribute(
      "src",
      "/assets/hlym/nvx-gallery/nvx-sp-review-02.webp"
    );
    expect(previews.getByRole("button", { name: /photo 6: Every angle/i })).toHaveAttribute(
      "aria-pressed",
      "true"
    );

    gallery.focus();
    await user.keyboard("[ArrowRight]");
    expect(carousel.getByRole("img", { name: /rear three-quarter view/i })).toBeInTheDocument();
    await user.keyboard("[ArrowLeft]");
    expect(carousel.getByRole("img", { name: /side profile/i })).toBeInTheDocument();
  });

  it("keeps the previous sliding carousel and chevron controls available for reuse", async () => {
    vi.spyOn(window, "matchMedia").mockReturnValue({ matches: false } as MediaQueryList);
    const user = userEvent.setup();
    const view = render(<ProductOverviewSlidingCarousel />);
    const gallery = within(
      view.getByRole("region", { name: "Yamaha NVX SP sliding photo gallery" })
    );
    const track = gallery.getByRole("img").parentElement!.parentElement!;

    expect(view.getByRole("button", { name: "Previous NVX SP photo" })).toBeDisabled();
    await user.click(view.getByRole("button", { name: "Next NVX SP photo" }));
    fireEvent.transitionEnd(track);
    expect(
      gallery.getByRole("img", { name: /instrument display and lap timer/i })
    ).toBeInTheDocument();
    expect(view.getByRole("button", { name: "Previous NVX SP photo" })).toBeEnabled();
  });

  it("links features and technical specifications to populated sections", () => {
    const view = render(<ProductOverviewSection />);

    expect(view.container.querySelector("#product-features")).toContainElement(
      view.getByRole("region", { name: "Yamaha NVX features" })
    );
    expect(
      view.getByRole("region", { name: "Yamaha NVX technical specifications" })
    ).toBeInTheDocument();
    expect(
      within(view.getByRole("region", { name: "Yamaha NVX features" })).getByText(
        PRODUCT_OVERVIEW_CONTENT.description
      )
    ).toBeInTheDocument();
    expect(view.getByRole("link", { name: "Features" })).toHaveAttribute(
      "href",
      "#product-features"
    );
    expect(view.getByRole("link", { name: "Specification" })).toHaveAttribute(
      "href",
      "#product-specification"
    );
  });
});
