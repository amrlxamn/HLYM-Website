import type { ProductFeature } from "../types/product-page.types";
import { getAssetUrl } from "@/lib/get-asset-url";

export const PRODUCT_FEATURES: readonly ProductFeature[] = [
  {
    description:
      "Connect through Yamaha Y-Connect to track maintenance, alerts, fuel use, battery status, parking location, calls, and messages.",
    eyebrow: "01",
    id: "y-connect",
    image: getAssetUrl("hlym/nvx-features/y-connect.jpg"),
    imageAlt: "Yamaha NVX Y-Connect display feature",
    title: "Y-CONNECT"
  },
  {
    description:
      "YECVT 155cc Blue Core and VVA engine tuning with Downshift technology for stronger urban response.",
    eyebrow: "PERTAMA DALAM KELASNYA!",
    id: "downshift",
    image: getAssetUrl("hlym/nvx-features/downshift.jpg"),
    imageAlt: "Yamaha NVX Downshift technology feature",
    title: "ENJIN YECVT 155CC BLUE CORE, VVA DENGAN TEKNOLOGI DOWNSHIFT"
  },
  {
    description: "Sports Mode and Town Mode let riders choose the response that matches the route.",
    eyebrow: "PERTAMA DALAM KELASNYA!",
    id: "riding-modes",
    image: getAssetUrl("hlym/nvx-features/riding-modes.jpg"),
    imageAlt: "Yamaha NVX riding mode selector feature",
    title: "PILIHAN MOD MENUNGGANG"
  },
  {
    description:
      "Emergency Stop Signal alerts surrounding traffic during sudden braking for better road awareness.",
    eyebrow: "(ESS)",
    id: "emergency-stop-signal",
    image: getAssetUrl("hlym/nvx-features/emergency-stop-signal.jpg"),
    imageAlt: "Yamaha NVX Emergency Stop Signal feature",
    title: "ISYARAT BERHENTI KECEMASAN"
  },
  {
    description:
      "Three display modes with adjustable background color keep ride information clear and personal.",
    eyebrow: "3 MOD",
    id: "display-modes",
    image: getAssetUrl("hlym/nvx-features/display-modes.jpg"),
    imageAlt: "Yamaha NVX adjustable display background feature",
    title: "PAPARAN DENGAN WARNA LATAR BELAKANG BOLEH UBAH"
  },
  {
    description:
      "Traction Control System helps manage rear-wheel grip for more confident acceleration.",
    eyebrow: "(TCS)",
    id: "traction-control",
    image: getAssetUrl("hlym/nvx-features/traction-control.jpg"),
    imageAlt: "Yamaha NVX Traction Control System feature",
    title: "SISTEM KAWALAN CENGKAMAN"
  }
] as const;
