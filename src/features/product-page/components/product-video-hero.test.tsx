import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ProductVideoHero } from "@/features/product-page";
import { PRODUCT_HERO_VIDEO } from "@/features/product-page";
import { toSentenceCase } from "@/lib/to-sentence-case";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("ProductVideoHero", () => {
  it("renders the Yamaha NVX video hero with accessible controls", () => {
    const view = render(<ProductVideoHero />);
    const video = view.getByLabelText(toSentenceCase(PRODUCT_HERO_VIDEO.alt));
    const source = PRODUCT_HERO_VIDEO.sources[0];

    expect(
      view.getByRole("region", {
        name: toSentenceCase(PRODUCT_HERO_VIDEO.ariaLabel)
      })
    ).toBeInTheDocument();
    expect(view.getByText(PRODUCT_HERO_VIDEO.copy)).toBeInTheDocument();
    expect(view.queryByAltText(PRODUCT_HERO_VIDEO.brandMark.alt)).toBeNull();
    expect(view.getByRole("button", { name: "Pause Yamaha NVX video" })).toBeInTheDocument();
    expect(video).toHaveAttribute("autoplay");
    expect(video).toHaveAttribute("loop");
    expect(video).toHaveAttribute("playsinline");
    expect(video).toHaveAttribute("poster", PRODUCT_HERO_VIDEO.poster);
    expect(video.querySelector("source")).toHaveAttribute("src", source?.src);
    expect((video as HTMLVideoElement).muted).toBe(true);
  });

  it("toggles playback from the hero cursor zone and the control button", async () => {
    const user = userEvent.setup();
    const pauseSpy = vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
    const playSpy = vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue(undefined);
    const view = render(<ProductVideoHero />);
    const hero = view.getByRole("region", {
      name: toSentenceCase(PRODUCT_HERO_VIDEO.ariaLabel)
    });

    expect(hero).toHaveAttribute("data-cursor-label", "Pause");
    expect(hero).toHaveAttribute("data-cursor-tone", "dark");

    await user.click(hero);

    expect(pauseSpy).toHaveBeenCalled();
    expect(hero).toHaveAttribute("data-cursor-label", "Play");
    expect(view.getByRole("button", { name: "Play Yamaha NVX video" })).toBeInTheDocument();

    await user.click(view.getByRole("button", { name: "Play Yamaha NVX video" }));

    expect(playSpy).toHaveBeenCalled();
    expect(hero).toHaveAttribute("data-cursor-label", "Pause");
    expect(view.getByRole("button", { name: "Pause Yamaha NVX video" })).toBeInTheDocument();
  });
});
