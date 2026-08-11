import { SkeletonRoot } from "./skeleton.styles";

export type SkeletonProps = {
  height?: string;
  width?: string;
};

export function Skeleton({ height = "16px", width = "100%" }: SkeletonProps) {
  return <SkeletonRoot $height={height} $width={width} aria-hidden="true" />;
}
