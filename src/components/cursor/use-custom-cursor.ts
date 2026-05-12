import { useEffect, useRef, useState } from "react";
import { INITIAL_CUSTOM_CURSOR_STATE } from "./custom-cursor-state.constants";
import { getCursorTargetAtPoint } from "./get-cursor-target-at-point";
import { syncCursorTarget } from "./sync-cursor-target";

export function useCustomCursor() {
  const cursorElementRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<MutationObserver | null>(null);
  const [state, setState] = useState(INITIAL_CUSTOM_CURSOR_STATE);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") {
      return;
    }

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const syncCursorMode = () => {
      setState((current) => ({
        ...current,
        isEnabled: mediaQuery.matches,
        isVisible: mediaQuery.matches ? current.isVisible : false,
        label: mediaQuery.matches ? current.label : null,
        tone: mediaQuery.matches ? current.tone : "auto"
      }));
    };

    const handleMouseDown = () => {
      setState((current) => ({ ...current, isActive: true }));
    };

    const handleMouseLeave = () => {
      cursorElementRef.current = null;
      observerRef.current?.disconnect();
      observerRef.current = null;

      setState((current) => ({
        ...current,
        isActive: false,
        isVisible: false,
        label: null,
        tone: "auto"
      }));
    };

    const handleMouseMove = (event: MouseEvent) => {
      const cursorTarget = syncCursorTarget({
        cursorElementRef,
        observerRef,
        onLabelChange: (label) => {
          setState((current) => ({ ...current, label }));
        },
        target: event.target
      });

      setState((current) => ({
        ...current,
        isVisible: true,
        label: cursorTarget.label,
        tone: cursorTarget.tone,
        x: event.clientX,
        y: event.clientY
      }));
    };

    const handleMouseUp = () => {
      setState((current) => ({ ...current, isActive: false }));
    };

    const handleScroll = () => {
      setState((current) => {
        if (!current.isEnabled || !current.isVisible) {
          return current;
        }

        const target = getCursorTargetAtPoint(current.x, current.y);
        const cursorTarget = syncCursorTarget({
          cursorElementRef,
          observerRef,
          onLabelChange: (label) => {
            setState((cursor) => ({ ...cursor, label }));
          },
          target
        });

        return {
          ...current,
          label: cursorTarget.label,
          tone: cursorTarget.tone
        };
      });
    };

    syncCursorMode();
    mediaQuery.addEventListener("change", syncCursorMode);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      mediaQuery.removeEventListener("change", syncCursorMode);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("scroll", handleScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  return state;
}
