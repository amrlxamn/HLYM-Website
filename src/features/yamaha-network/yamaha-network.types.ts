import type { DealerCategory, DealerLocation, DealerRegion } from "@/data/site-content.types";

export type YamahaDealerLocation = DealerLocation & {
  address: string;
  categories: readonly DealerCategory[];
  email: string;
  fax: string;
  mapUrl: string;
  mobile: string;
  phone: string;
  wazeUrl: string;
  website: string;
};

export type YamahaDealerDataset = {
  count: number;
  coordinatesAuditedAt: string;
  dealers: readonly YamahaDealerRecord[];
  generatedAt: string;
  source: string;
};

export type YamahaDealerRecord = {
  address: string;
  categories: readonly DealerCategory[];
  coordinates: readonly [number, number];
  email: string;
  fax: string;
  hours: string;
  id: string;
  image?: string;
  label: string;
  mapUrl: string;
  mobile: string;
  phone: string;
  region: DealerRegion;
  wazeUrl: string;
  website: string;
};
