import { useEffect, useRef, useState } from "react";

interface UseImageSequenceResult {
  readonly images: readonly HTMLImageElement[];
  readonly isLoaded: boolean;
  readonly loadedCount: number;
}

export function useImageSequence(frames: readonly string[]): UseImageSequenceResult {
  const [loadedCount, setLoadedCount] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    setLoadedCount(0);
    const images = frames.map(() => new Image());
    imagesRef.current = images;
    if (!images.length) return;

    let settled = 0;
    let cancelled = false;
    const startRemaining = () => {
      frames.slice(1).forEach((src, index) => {
        images[index + 1]!.src = src;
      });
    };

    images.forEach((img, index) => {
      img.crossOrigin = "anonymous";
      const finish = () => {
        if (cancelled) return;
        settled += 1;
        setLoadedCount(settled);
        if (index === 0) startRemaining();
      };
      img.onload = finish;
      img.onerror = finish;
    });
    images[0]!.src = frames[0]!;

    return () => {
      cancelled = true;
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [frames]);

  return { images: imagesRef.current, isLoaded: loadedCount === frames.length, loadedCount };
}
