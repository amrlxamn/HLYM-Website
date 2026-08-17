type TurnstileRenderOptions = {
  callback: (token: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: () => void;
  sitekey: string;
  theme?: "auto" | "light" | "dark";
};

type TurnstileApi = {
  getResponse: (widgetId?: string) => string | undefined;
  remove: (widgetId: string) => void;
  render: (container: string | HTMLElement, options: TurnstileRenderOptions) => string;
  reset: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export {};
