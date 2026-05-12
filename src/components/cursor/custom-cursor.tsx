import { Pause, Play } from "lucide-react";
import { CustomCursorHint, CustomCursorRing, CustomCursorRoot } from "./custom-cursor.styles";
import { useCustomCursor } from "./use-custom-cursor";

const CURSOR_RING_SIZE = 34;

export function CustomCursor() {
  const { isActive, isEnabled, isVisible, label, tone, x, y } = useCustomCursor();
  const CursorIcon = label === "Play" ? Play : Pause;

  if (!isEnabled) {
    return null;
  }

  return (
    <CustomCursorRoot
      $hasLabel={Boolean(label)}
      $tone={tone}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isActive ? 0.92 : 1,
        x: x - CURSOR_RING_SIZE / 2,
        y: y - CURSOR_RING_SIZE / 2
      }}
      aria-hidden="true"
      data-cursor-tone={tone}
      initial={false}
      transition={{
        opacity: { duration: 0.2, ease: "linear" },
        scale: { duration: 0.24, ease: [0.22, 1, 0.36, 1] },
        x: { damping: 42, mass: 0.8, stiffness: 260, type: "spring" },
        y: { damping: 42, mass: 0.8, stiffness: 260, type: "spring" }
      }}
    >
      <CustomCursorRing $hasLabel={Boolean(label)} $tone={tone}>
        {label && <CursorIcon aria-hidden="true" />}
      </CustomCursorRing>
      <CustomCursorHint $hasLabel={Boolean(label)} $tone={tone}>
        <span>{label}</span>
      </CustomCursorHint>
    </CustomCursorRoot>
  );
}
