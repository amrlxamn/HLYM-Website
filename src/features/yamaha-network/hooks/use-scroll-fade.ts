import { useEffect, useRef, useState } from "react";

type ScrollFadeState = {
  canScrollLeft: boolean;
  canScrollRight: boolean;
};

export function useScrollFade() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [fadeState, setFadeState] = useState<ScrollFadeState>({
    canScrollLeft: false,
    canScrollRight: false
  });

  useEffect(() => {
    const element = scrollRef.current;

    if (!element) {
      return;
    }

    function updateFade() {
      if (!element) {
        return;
      }

      setFadeState({
        canScrollLeft: element.scrollLeft > 4,
        canScrollRight: element.scrollLeft + element.clientWidth < element.scrollWidth - 4
      });
    }

    updateFade();
    element.addEventListener("scroll", updateFade, { passive: true });
    window.addEventListener("resize", updateFade);

    return () => {
      element.removeEventListener("scroll", updateFade);
      window.removeEventListener("resize", updateFade);
    };
  }, []);

  return { fadeState, scrollRef };
}
