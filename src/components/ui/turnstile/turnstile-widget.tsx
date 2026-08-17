import { useEffect, useRef, useState } from "react";

const TURNSTILE_SCRIPT_URL = "https://challenges.cloudflare.com/turnstile/v0/api.js";

type TurnstileWidgetProps = {
  onChange: (token: string | null) => void;
};

export function TurnstileWidget({ onChange }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onChangeRef = useRef(onChange);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

    if (!siteKey) {
      onChangeRef.current(null);
      return;
    }

    const ensureScript = () => {
      if (window.turnstile) {
        setScriptLoaded(true);
        return;
      }

      const existing = document.querySelector<HTMLScriptElement>(
        `script[src="${TURNSTILE_SCRIPT_URL}"]`
      );

      if (existing) {
        setScriptLoaded(true);
        return;
      }

      const script = document.createElement("script");
      script.async = true;
      script.defer = true;
      script.src = TURNSTILE_SCRIPT_URL;
      script.onload = () => setScriptLoaded(true);
      document.head.appendChild(script);
    };

    ensureScript();
  }, []);

  useEffect(() => {
    const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

    if (!scriptLoaded || !siteKey || !window.turnstile || !containerRef.current) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      callback: (token: string) => onChangeRef.current(token),
      "error-callback": () => onChangeRef.current(null),
      "expired-callback": () => onChangeRef.current(null),
      sitekey: siteKey
    });

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, [scriptLoaded]);

  if (!import.meta.env.VITE_TURNSTILE_SITE_KEY) {
    return null;
  }

  return <div ref={containerRef} />;
}
