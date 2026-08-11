import styled from "styled-components";

export const SkeletonRoot = styled.span<{
  $height: string;
  $width: string;
}>`
  background: linear-gradient(
    90deg,
    var(--alpha-white-04) 20%,
    var(--alpha-white-08) 50%,
    var(--alpha-white-04) 80%
  );
  background-size: 200% 100%;
  border-radius: var(--radius-none);
  display: block;
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
  animation: skeletonShimmer 1.6s var(--easing-out) infinite;

  @keyframes skeletonShimmer {
    from {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }
`;
