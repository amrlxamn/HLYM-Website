import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  PRODUCT_FULL_SPECIFICATION_CONTENT,
  ProductFullSpecificationSection
} from "@/features/product-page";

describe("ProductFullSpecificationSection", () => {
  it("renders the Figma full specification layout content", () => {
    const view = render(<ProductFullSpecificationSection />);

    expect(view.getByRole("region", { name: "Yamaha NVX full specification" })).toBeInTheDocument();
    expect(view.getByText(PRODUCT_FULL_SPECIFICATION_CONTENT.eyebrow)).toBeInTheDocument();
    expect(
      view.getByRole("heading", {
        name: `${PRODUCT_FULL_SPECIFICATION_CONTENT.titleLines[0]} ${PRODUCT_FULL_SPECIFICATION_CONTENT.titleLines[1]}`
      })
    ).toBeInTheDocument();
    expect(
      view.getByRole("img", { name: PRODUCT_FULL_SPECIFICATION_CONTENT.image.alt })
    ).toBeInTheDocument();
    expect(PRODUCT_FULL_SPECIFICATION_CONTENT.image.src).toBe(
      PRODUCT_FULL_SPECIFICATION_CONTENT.image.frames[0]
    );
    expect(view.getByText("01")).toBeInTheDocument();
    expect(view.getByText("05")).toBeInTheDocument();

    for (const item of PRODUCT_FULL_SPECIFICATION_CONTENT.items) {
      expect(view.getByText(item.title)).toBeInTheDocument();
    }
  });

  it("pins the section viewport while page scroll advances specifications", () => {
    render(<ProductFullSpecificationSection />);

    expect(document.head.textContent).toContain("position:sticky");
    expect(document.head.textContent).toContain("top:var(--header-height-total)");
    expect(document.head.textContent).toContain(
      "min-height:calc(260vh - var(--header-height-total))"
    );
    expect(document.head.textContent).toContain("height:calc(100vh - var(--header-height-total))");
    expect(document.head.textContent).toContain("overflow-y:hidden");
    expect(document.head.textContent).toContain("mask-image:linear-gradient");
    expect(document.head.textContent).toContain("will-change:transform");
  });
});
