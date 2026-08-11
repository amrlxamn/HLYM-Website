import { Search } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  Avatar,
  Badge,
  Button,
  Checkbox,
  EmptyState,
  Input,
  Modal,
  ProgressBar,
  Select,
  Skeleton,
  Switch,
  Tabs,
  Textarea,
  Toast,
  Tooltip
} from "@/components/ui";
import type { DocComponentEntry } from "../types/design-system-docs.types";

export function DocPrimitivePreview({ entry }: { entry: DocComponentEntry }) {
  const [checked, setChecked] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  switch (entry.componentName) {
    case "Button":
      return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <Button>Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      );
    case "Badge":
      return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <Badge>Automatic</Badge>
          <Badge variant="accent">New</Badge>
          <Badge variant="outline">155cc</Badge>
          <Badge variant="success">Available</Badge>
        </div>
      );
    case "Input":
      return (
        <Input
          hint="As shown on your identity document"
          label="Full name"
          name="full-name"
          placeholder="Amirul Amin"
        />
      );
    case "Textarea":
      return (
        <Textarea
          hint="Include your preferred model and branch"
          label="Message"
          name="message"
          placeholder="How can we help?"
        />
      );
    case "Select":
      return (
        <Select
          label="Region"
          name="region"
          options={[
            { label: "Central", value: "central" },
            { label: "Northern", value: "northern" }
          ]}
        />
      );
    case "Modal":
      return (
        <>
          <Button onClick={() => setModalOpen(true)}>Open dialog</Button>
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Book a test ride">
            <p style={{ color: "var(--color-text-readable-dark)" }}>
              Choose your preferred Yamaha model and dealership.
            </p>
          </Modal>
        </>
      );
    case "Tooltip":
      return (
        <Tooltip content="View complete specifications">
          <Button variant="outline">Hover or focus</Button>
        </Tooltip>
      );
    case "Toast":
      return (
        <Toast
          duration={0}
          message="A Yamaha specialist will contact you shortly."
          title="Enquiry sent"
          variant="success"
        />
      );
    case "Accordion":
      return (
        <div style={{ width: "100%" }}>
          <Accordion
            items={[
              {
                id: "warranty",
                title: "Warranty coverage",
                content: "Two years or 20,000 km, whichever comes first."
              },
              {
                id: "service",
                title: "Service intervals",
                content: "Follow the schedule in your owner's manual."
              }
            ]}
          />
        </div>
      );
    case "Tabs":
      return (
        <Tabs
          items={[
            { id: "overview", label: "Overview", content: "Designed for connected urban riding." },
            {
              id: "specs",
              label: "Specifications",
              content: "155cc VVA engine with traction control."
            }
          ]}
        />
      );
    case "Avatar":
      return (
        <div style={{ alignItems: "center", display: "flex", gap: 12 }}>
          <Avatar alt="Small representative" fallback="HA" size="sm" />
          <Avatar alt="Representative" fallback="HA" />
          <Avatar alt="Large representative" fallback="HA" size="lg" />
        </div>
      );
    case "Skeleton":
      return (
        <div style={{ display: "grid", gap: 12, width: "100%" }}>
          <Skeleton height="120px" />
          <Skeleton width="72%" />
          <Skeleton width="46%" />
        </div>
      );
    case "EmptyState":
      return (
        <EmptyState
          action={<Button size="sm">Reset filters</Button>}
          description="Try another region or remove active filters."
          icon={<Search size={20} />}
          title="No dealers found"
        />
      );
    case "Switch":
      return (
        <Switch
          checked={checked}
          label="Dealer notifications"
          onChange={(event) => setChecked(event.target.checked)}
        />
      );
    case "Checkbox":
      return (
        <Checkbox
          checked={checked}
          label="I agree to the privacy notice"
          onChange={(event) => setChecked(event.target.checked)}
        />
      );
    case "ProgressBar":
      return <ProgressBar label="Profile complete" value={72} />;
    default:
      return null;
  }
}
