import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  PRODUCT_FULL_SPECIFICATION_CONTENT,
  ProductFullSpecificationSection
} from "@/features/product-page";

describe("ProductFullSpecificationSection", () => {
  it("renders the Figma full specification layout content", () => {
    const view = render(<ProductFullSpecificationSection />);

    expect(view.getByRole("region", { name: "Yamaha NVX full specification" })).toHaveAttribute(
      "data-cursor-tone",
      "light"
    );
    expect(view.getByText(PRODUCT_FULL_SPECIFICATION_CONTENT.eyebrow)).toBeInTheDocument();
    expect(
      view.getByRole("heading", {
        name: `${PRODUCT_FULL_SPECIFICATION_CONTENT.titleLines[0]} ${PRODUCT_FULL_SPECIFICATION_CONTENT.titleLines[1]}`
      })
    ).toBeInTheDocument();
    expect(
      view.getByRole("img", { name: PRODUCT_FULL_SPECIFICATION_CONTENT.image.alt })
    ).toHaveAttribute("src", PRODUCT_FULL_SPECIFICATION_CONTENT.image.src);
    expect(view.getByText("01")).toBeInTheDocument();
    expect(view.getByText("05")).toBeInTheDocument();

    for (const item of PRODUCT_FULL_SPECIFICATION_CONTENT.items) {
      expect(view.getByText(item.title)).toBeInTheDocument();
    }
  });
});
