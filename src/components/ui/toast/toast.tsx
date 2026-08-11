import { X } from "lucide-react";
import { useEffect } from "react";
import {
  ToastClose,
  ToastCopy,
  ToastMessage,
  ToastRoot,
  ToastTitle,
  type ToastVariant
} from "./toast.styles";

export type ToastProps = {
  duration?: number;
  message: string;
  onDismiss?: () => void;
  title: string;
  variant?: ToastVariant;
};

export function Toast({
  duration = 5000,
  message,
  onDismiss,
  title,
  variant = "default"
}: ToastProps) {
  useEffect(() => {
    if (!onDismiss || duration <= 0) return;
    const timeoutId = window.setTimeout(onDismiss, duration);
    return () => window.clearTimeout(timeoutId);
  }, [duration, onDismiss]);

  return (
    <ToastRoot $variant={variant} aria-live="polite" role="status">
      <ToastCopy>
        <ToastTitle>{title}</ToastTitle>
        <ToastMessage>{message}</ToastMessage>
      </ToastCopy>
      {onDismiss ? (
        <ToastClose aria-label="Dismiss notification" onClick={onDismiss}>
          <X aria-hidden="true" size={16} />
        </ToastClose>
      ) : null}
    </ToastRoot>
  );
}
