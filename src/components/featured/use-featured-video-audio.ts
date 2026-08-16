import { useEffect, type RefObject } from "react";
import type { MotionValue } from "framer-motion";

export function useFeaturedVideoAudio(
  videoRef: RefObject<HTMLVideoElement | null>,
  volumeProgress: MotionValue<number>
) {
  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    let audioUnlocked = false;
    video.muted = true;
    video.volume = 0;

    const updateVolume = (volume: number) => {
      if (audioUnlocked) {
        video.volume = Math.min(1, Math.max(0, volume));
      }
    };
    const unlockAudio = () => {
      audioUnlocked = true;
      video.muted = false;
      updateVolume(volumeProgress.get());
      void video.play().catch(() => undefined);
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
    const unsubscribe = volumeProgress.on("change", updateVolume);

    window.addEventListener("pointerdown", unlockAudio, { once: true });
    window.addEventListener("keydown", unlockAudio, { once: true });

    return () => {
      unsubscribe();
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
  }, [videoRef, volumeProgress]);
}
