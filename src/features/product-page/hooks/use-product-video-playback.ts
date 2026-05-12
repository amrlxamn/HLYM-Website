import type { MouseEventHandler, RefObject } from "react";
import { useRef, useState } from "react";

type ProductVideoPlayback = {
  isPaused: boolean;
  onControlClick: MouseEventHandler<HTMLButtonElement>;
  onTogglePlayback: () => void;
  onVideoPause: () => void;
  onVideoPlay: () => void;
  videoRef: RefObject<HTMLVideoElement>;
};

export function useProductVideoPlayback(): ProductVideoPlayback {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const onTogglePlayback = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (isPaused) {
      void video.play();
      setIsPaused(false);
      return;
    }

    video.pause();
    setIsPaused(true);
  };

  const onControlClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    onTogglePlayback();
  };

  const onVideoPause = () => {
    setIsPaused(true);
  };

  const onVideoPlay = () => {
    setIsPaused(false);
  };

  return {
    isPaused,
    onControlClick,
    onTogglePlayback,
    onVideoPause,
    onVideoPlay,
    videoRef
  };
}
