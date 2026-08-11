import type { DocComponentEntry } from "../types/design-system-docs.types";

export const DOC_PRIMITIVE_CATALOG: readonly DocComponentEntry[] = [
  {
    category: "Actions",
    code: '<Button variant="primary">Explore models</Button>',
    componentName: "Button",
    description:
      "Canonical pressable action with three variants, three sizes, disabled state, and tactile press feedback.",
    id: "ui-button",
    name: "Button",
    previewTone: "dark",
    props: [
      {
        name: "variant",
        required: false,
        type: '"primary" | "ghost" | "outline"',
        default: '"primary"'
      },
      { name: "size", required: false, type: '"sm" | "md" | "lg"', default: '"md"' },
      { name: "fullWidth", required: false, type: "boolean", default: "false" }
    ],
    tier: 1
  },
  {
    category: "Status & Feedback",
    code: '<Badge variant="accent">New model</Badge>',
    componentName: "Badge",
    description: "Compact non-interactive status label for metadata, categories, and state.",
    id: "ui-badge",
    name: "Badge",
    previewTone: "dark",
    props: [
      {
        name: "variant",
        required: false,
        type: '"default" | "accent" | "outline" | "success"',
        default: '"default"'
      }
    ],
    tier: 1
  },
  {
    category: "Form Controls",
    code: '<Input label="Full name" hint="As shown on your ID" />',
    componentName: "Input",
    description: "Labeled text input with shared focus, hint, disabled, and validation treatment.",
    id: "ui-input",
    name: "Input",
    previewTone: "dark",
    props: [
      { name: "label", required: true, type: "string" },
      { name: "hint", required: false, type: "string" },
      { name: "error", required: false, type: "string" }
    ],
    tier: 1
  },
  {
    category: "Form Controls",
    code: '<Textarea label="Message" hint="Tell us how we can help" />',
    componentName: "Textarea",
    description:
      "Multi-line field sharing the same label, hint, focus, and error contract as Input.",
    id: "ui-textarea",
    name: "Textarea",
    previewTone: "dark",
    props: [
      { name: "label", required: true, type: "string" },
      { name: "hint", required: false, type: "string" },
      { name: "error", required: false, type: "string" }
    ],
    tier: 1
  },
  {
    category: "Form Controls",
    code: '<Select label="Region" options={regions} />',
    componentName: "Select",
    description: "Native select preserving platform accessibility with the shared field contract.",
    id: "ui-select",
    name: "Select",
    previewTone: "dark",
    props: [
      { name: "label", required: true, type: "string" },
      { name: "options", required: true, type: "readonly SelectOption[]" },
      { name: "error", required: false, type: "string" }
    ],
    tier: 1
  },
  {
    category: "Overlays",
    code: '<Modal isOpen={open} onClose={close} title="Book a test ride">...</Modal>',
    componentName: "Modal",
    description:
      "Accessible dialog with Escape dismissal, scroll locking, labeled title, and reduced-motion behavior.",
    id: "ui-modal",
    name: "Modal",
    previewTone: "dark",
    props: [
      { name: "isOpen", required: true, type: "boolean" },
      { name: "onClose", required: true, type: "() => void" },
      { name: "title", required: true, type: "string" },
      { name: "size", required: false, type: '"sm" | "md" | "lg"', default: '"md"' }
    ],
    tier: 1
  },
  {
    category: "Overlays",
    code: '<Tooltip content="View specifications"><Button>Details</Button></Tooltip>',
    componentName: "Tooltip",
    description: "Contextual label revealed by hover or keyboard focus with trigger-linked ARIA.",
    id: "ui-tooltip",
    name: "Tooltip",
    previewTone: "dark",
    props: [
      { name: "content", required: true, type: "string" },
      { name: "placement", required: false, type: '"top" | "bottom"', default: '"top"' }
    ],
    tier: 1
  },
  {
    category: "Status & Feedback",
    code: '<Toast title="Enquiry sent" message="We will be in touch." variant="success" />',
    componentName: "Toast",
    description:
      "Temporary feedback surface with semantic variants and optional auto-dismiss behavior.",
    id: "ui-toast",
    name: "Toast",
    previewTone: "dark",
    props: [
      { name: "title", required: true, type: "string" },
      { name: "message", required: true, type: "string" },
      {
        name: "variant",
        required: false,
        type: '"default" | "success" | "error" | "info"',
        default: '"default"'
      },
      { name: "duration", required: false, type: "number", default: "5000" }
    ],
    tier: 1
  },
  {
    category: "Disclosure",
    code: "<Accordion items={items} />",
    componentName: "Accordion",
    description:
      "Generic disclosure list with single or multiple expansion and reduced-motion support.",
    id: "ui-accordion",
    name: "Accordion",
    previewTone: "dark",
    props: [
      { name: "items", required: true, type: "readonly AccordionItem[]" },
      { name: "allowMultiple", required: false, type: "boolean", default: "false" }
    ],
    tier: 1
  },
  {
    category: "Disclosure",
    code: "<Tabs items={tabs} defaultIndex={0} />",
    componentName: "Tabs",
    description:
      "Content switcher with semantic tab roles, selected state, and controlled change notification.",
    id: "ui-tabs",
    name: "Tabs",
    previewTone: "dark",
    props: [
      { name: "items", required: true, type: "readonly TabItem[]" },
      { name: "defaultIndex", required: false, type: "number", default: "0" }
    ],
    tier: 1
  },
  {
    category: "Media",
    code: '<Avatar alt="Dealer representative" fallback="AR" size="md" />',
    componentName: "Avatar",
    description: "Square identity image with resilient text fallback and three sizes.",
    id: "ui-avatar",
    name: "Avatar",
    previewTone: "dark",
    props: [
      { name: "src", required: false, type: "string" },
      { name: "alt", required: true, type: "string" },
      { name: "fallback", required: true, type: "string" },
      { name: "size", required: false, type: '"sm" | "md" | "lg"', default: '"md"' }
    ],
    tier: 1
  },
  {
    category: "Status & Feedback",
    code: '<Skeleton height="120px" />',
    componentName: "Skeleton",
    description: "Layout-preserving shimmer placeholder with reduced-motion fallback.",
    id: "ui-skeleton",
    name: "Skeleton",
    previewTone: "dark",
    props: [
      { name: "width", required: false, type: "string", default: '"100%"' },
      { name: "height", required: false, type: "string", default: '"16px"' }
    ],
    tier: 1
  },
  {
    category: "Status & Feedback",
    code: '<EmptyState icon={<Search />} title="No dealers found" description="Try another region." />',
    componentName: "EmptyState",
    description:
      "Composed zero-data state with icon, concrete guidance, and optional recovery action.",
    id: "ui-empty-state",
    name: "Empty State",
    previewTone: "dark",
    props: [
      { name: "icon", required: true, type: "ReactNode" },
      { name: "title", required: true, type: "string" },
      { name: "description", required: true, type: "string" },
      { name: "action", required: false, type: "ReactNode" }
    ],
    tier: 1
  },
  {
    category: "Form Controls",
    code: '<Switch checked={enabled} onChange={change} label="Notifications" />',
    componentName: "Switch",
    description:
      "Binary immediate-action control with native checkbox semantics and visible focus.",
    id: "ui-switch",
    name: "Switch",
    previewTone: "dark",
    props: [
      { name: "checked", required: true, type: "boolean" },
      { name: "onChange", required: true, type: "ChangeEventHandler" },
      { name: "label", required: true, type: "string" }
    ],
    tier: 1
  },
  {
    category: "Form Controls",
    code: '<Checkbox checked={accepted} onChange={change} label="I accept the terms" />',
    componentName: "Checkbox",
    description: "Styled native checkbox for multi-selection and agreement flows.",
    id: "ui-checkbox",
    name: "Checkbox",
    previewTone: "dark",
    props: [
      { name: "checked", required: true, type: "boolean" },
      { name: "onChange", required: true, type: "ChangeEventHandler" },
      { name: "label", required: true, type: "string" }
    ],
    tier: 1
  },
  {
    category: "Status & Feedback",
    code: '<ProgressBar label="Profile complete" value={72} />',
    componentName: "ProgressBar",
    description:
      "Determinate progress with clamped values, semantic attributes, and transform-only animation.",
    id: "ui-progress",
    name: "Progress Bar",
    previewTone: "dark",
    props: [
      { name: "label", required: true, type: "string" },
      { name: "value", required: true, type: "number" },
      { name: "max", required: false, type: "number", default: "100" }
    ],
    tier: 1
  }
] as const;
