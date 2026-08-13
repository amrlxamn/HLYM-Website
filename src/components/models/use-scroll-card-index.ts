import { type MotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function useScrollCardIndex(scrollProgress: MotionValue<number>, count: number) {
  const [activeIndex, setActiveIndex] = useState(0);
  const previousIndex = useRef(0);

  useEffect(() => {
    previousIndex.current = 0;
    setActiveIndex(0);
  }, [count]);

  useMotionValueEvent(scrollProgress, "change", (progress) => {
    const nextIndex = Math.min(Math.round(progress * (count - 1)), count - 1);

    if (nextIndex === previousIndex.current) {
      return;
    }

    previousIndex.current = nextIndex;
    setActiveIndex(nextIndex);
  });

  return activeIndex;
}
