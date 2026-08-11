export const DOC_PRINCIPLES: readonly { description: string; title: string }[] = [
  {
    description:
      "The HLYM brand is cinematic and dark. The base background is near-black (#0A0A0A). All content must feel like it lives on a film set, not a spreadsheet.",
    title: "Dark First, Always"
  },
  {
    description:
      "Brand red (#EC1C24) is the single accent color. It appears in CTAs, focus rings, active states, and decorative markers. Never introduce a second hue without explicit design approval.",
    title: "One Accent, One Voice"
  },
  {
    description:
      "Headings are bold, uppercase, and tightly tracked (-2px letter-spacing). The type system is aggressive and confident, not timid. Body text uses Lato at 16px with 1.6 line-height for readability.",
    title: "Typography is Architecture"
  },
  {
    description:
      "Motion duration is 240ms for standard transitions. Easing is always cubic-bezier(0.22, 1, 0.36, 1). Never use linear or ease-in for UI. Press feedback is 160ms with scale(0.97).",
    title: "Motion Has Purpose"
  },
  {
    description:
      "All colors, spacing, shadows, and motion values are defined as CSS custom properties in the global stylesheet. Components read from variables, never hardcode values.",
    title: "Tokens, Not Hardcode"
  },
  {
    description:
      "Every component must have an accessible name, visible focus states, and keyboard operability. The focus ring is 2px solid red with 3px offset. This is non-negotiable.",
    title: "Accessibility is the Floor"
  }
] as const;
