export type DocNavLink = {
  href: string;
  label: string;
  number: string;
};

export type DocNavSubLink = {
  href: string;
  label: string;
};

export type DocNavGroupLink = {
  href: string;
  label: string;
  number: string;
  subLinks?: readonly DocNavSubLink[];
};

export type DocColorToken = {
  description: string;
  name: string;
  raw: string;
  usage: string;
  variable: string;
};

export type DocColorGroup = {
  name: string;
  tokens: readonly DocColorToken[];
};

export type DocTypeSpecimen = {
  className: string;
  example: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  letterSpacing: string;
  lineHeight: string;
  name: string;
  textTransform: string;
};

export type DocMotionToken = {
  description: string;
  duration: string;
  easing: string;
  name: string;
  property: string;
};

export type DocSpacingToken = {
  name: string;
  raw: string;
  usage: string;
};

export type DocPropDef = {
  default?: string;
  name: string;
  required: boolean;
  type: string;
};

export type DocComponentCategory =
  | "Actions"
  | "Form Controls"
  | "Status & Feedback"
  | "Overlays"
  | "Disclosure"
  | "Media"
  | "Layout"
  | "Navigation"
  | "Content"
  | "Cards"
  | "Forms & Feedback"
  | "Product";

export type DocComponentEntry = {
  category: DocComponentCategory;
  code: string;
  componentName: string;
  description: string;
  id: string;
  name: string;
  note?: string;
  previewTone: "dark" | "light";
  props: readonly DocPropDef[];
  tier: 1 | 2 | 3;
};
