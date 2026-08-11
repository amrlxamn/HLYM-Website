import styled from "styled-components";

export const AvatarRoot = styled.span<{ $size: "sm" | "md" | "lg" }>`
  align-items: center;
  background: var(--color-neutral-800);
  border: 1px solid var(--alpha-white-12);
  border-radius: var(--radius-none);
  color: var(--color-text-inverse);
  display: inline-flex;
  font-size: ${({ $size }) => {
    if ($size === "sm") return "var(--font-size-sm)";
    if ($size === "lg") return "var(--font-size-lg)";
    return "var(--font-size-base)";
  }};
  font-weight: var(--font-weight-bold);
  height: ${({ $size }) => {
    if ($size === "sm") return "32px";
    if ($size === "lg") return "56px";
    return "40px";
  }};
  justify-content: center;
  overflow: hidden;
  width: ${({ $size }) => {
    if ($size === "sm") return "32px";
    if ($size === "lg") return "56px";
    return "40px";
  }};

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;
