import { AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useId, useRef } from "react";
import { ModalClose, ModalHeader, ModalOverlay, ModalPanel, ModalTitle } from "./modal.styles";

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  size?: "sm" | "md" | "lg";
  title: string;
};

export function Modal({ children, isOpen, onClose, size = "md", title }: ModalProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const titleId = useId();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousFocus =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first && last) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last && first) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <ModalOverlay
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <ModalPanel
            $size={size}
            animate={{ opacity: 1, transform: "translateY(0) scale(1)" }}
            aria-labelledby={titleId}
            exit={{ opacity: 0, transform: reduceMotion ? "none" : "translateY(8px) scale(0.98)" }}
            initial={{
              opacity: 0,
              transform: reduceMotion ? "none" : "translateY(12px) scale(0.98)"
            }}
            onMouseDown={(event) => event.stopPropagation()}
            ref={panelRef}
            role="dialog"
            tabIndex={-1}
            transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <ModalHeader>
              <ModalTitle id={titleId}>{title}</ModalTitle>
              <ModalClose aria-label="Close dialog" onClick={onClose}>
                <X aria-hidden="true" size={18} />
              </ModalClose>
            </ModalHeader>
            {children}
          </ModalPanel>
        </ModalOverlay>
      ) : null}
    </AnimatePresence>
  );
}
