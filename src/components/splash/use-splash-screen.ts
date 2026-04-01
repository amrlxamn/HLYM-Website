import { useCallback, useEffect, useState } from "react";

const SESSION_KEY = "hlym-splash-shown";
const SPLASH_DURATION_MS = 2000;

/**
 * Controls splash screen visibility.
 *
 * - Shows once per browser session (sessionStorage).
 * - Auto-dismisses after SPLASH_DURATION_MS.
 * - Locks body scroll while visible.
 */
export function useSplashScreen() {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(SESSION_KEY) !== "true";
  });
  const [isRemoved, setIsRemoved] = useState(!isVisible);

  useEffect(() => {
    if (!isVisible) return;

    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem(SESSION_KEY, "true");
      document.body.style.overflow = "";
    }, SPLASH_DURATION_MS);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  const handleComplete = useCallback(() => {
    setIsRemoved(true);
  }, []);

  return { isVisible, isRemoved, onComplete: handleComplete };
}
