import { useState } from "react";
import { AvatarRoot } from "./avatar.styles";

export type AvatarProps = {
  alt: string;
  fallback: string;
  size?: "sm" | "md" | "lg";
  src?: string;
};

export function Avatar({ alt, fallback, size = "md", src }: AvatarProps) {
  const [failed, setFailed] = useState(false);

  return (
    <AvatarRoot $size={size} aria-label={alt} role="img">
      {src && !failed ? <img alt={alt} onError={() => setFailed(true)} src={src} /> : fallback}
    </AvatarRoot>
  );
}
