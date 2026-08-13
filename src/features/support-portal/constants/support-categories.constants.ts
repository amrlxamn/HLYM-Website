import { Bike, PackageSearch, ShieldCheck, Store, Wrench } from "lucide-react";

export const SUPPORT_CATEGORIES = [
  { icon: Store, label: "Sales and dealers" },
  { icon: Wrench, label: "Service and maintenance" },
  { icon: ShieldCheck, label: "Warranty" },
  { icon: PackageSearch, label: "Genuine parts" },
  { icon: Bike, label: "Vehicle support" }
] as const;
