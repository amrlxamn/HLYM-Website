import type { ModelCategory } from "@/data/site-content.types";
import { getAssetUrl } from "@/lib/get-asset-url";

type ProductCategory = Exclude<ModelCategory, "all models">;

type CurtainModel = {
  image: string;
  name: string;
  slug: string;
};

export const PRODUCT_CURTAIN_MODELS: Record<ProductCategory, readonly CurtainModel[]> = {
  automatic: [
    {
      image: getAssetUrl("hlym/product-curtain/nmax.jpg"),
      name: "NMAX",
      slug: "nmax"
    },
    {
      image: getAssetUrl("hlym/product-curtain/ego-avantiz.jpg"),
      name: "EGO AVANTIZ",
      slug: "ego-avantiz"
    },
    {
      image: getAssetUrl("hlym/product-curtain/ego-gear.jpg"),
      name: "EGO GEAR",
      slug: "ego-gear"
    },
    {
      image: getAssetUrl("hlym/product-curtain/nvx.jpg"),
      name: "NVX",
      slug: "nvx"
    }
  ],
  "big bikes": (
    [
      ["XMAX 300", "xmax-300"],
      ["TMAX", "tmax"],
      ["TENERE 700", "tenere-700"],
      ["TRACER 9 GT", "tracer-9-gt"],
      ["MT-09", "mt-09"],
      ["XMAX 250", "xmax-250"],
      ["MT-25", "mt-25"]
    ] as const
  ).map(([name, file]) => ({
    image: getAssetUrl(`hlym/product-curtain/${file}.jpg`),
    name,
    slug: file
  })),
  moped: (
    [
      ["Y16ZR-R", "y16zr-r"],
      ["Y15ZR", "y15zr"],
      ["135LC Fi", "135lc-fi"],
      ["PG-1", "pg-1"],
      ["Y16ZR 6MRO Limited Edition", "y16zr-6mro"],
      ["Y16ZR DOXOU", "y16zr-doxou"],
      ["EZ115", "ez115"]
    ] as const
  ).map(([name, file]) => ({
    image: getAssetUrl(`hlym/product-curtain/${file}.jpg`),
    name,
    slug: file
  })),
  street: (
    [
      ["XSR155", "xsr155"],
      ["YZF-R25", "yzf-r25"],
      ["R15M", "r15m"],
      ["MT-15", "mt-15"]
    ] as const
  ).map(([name, file]) => ({
    image: getAssetUrl(`hlym/product-curtain/${file}.jpg`),
    name,
    slug: file
  }))
};
