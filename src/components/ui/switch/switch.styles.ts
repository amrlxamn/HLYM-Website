import styled from "styled-components";

export const SwitchLabel = styled.label`
  align-items: center;
  color: var(--color-text-inverse);
  cursor: pointer;
  display: inline-flex;
  font-size: var(--font-size-md);
  gap: var(--space-3);
`;

export const SwitchInput = styled.input`
  height: 1px;
  opacity: 0;
  position: absolute;
  width: 1px;
`;

export const SwitchTrack = styled.span<{ $checked: boolean }>`
  background: ${({ $checked }) =>
    $checked ? "var(--color-brand-500)" : "var(--color-neutral-700)"};
  border: 1px solid
    ${({ $checked }) => ($checked ? "var(--color-brand-500)" : "var(--alpha-white-12)")};
  border-radius: var(--radius-none);
  display: inline-flex;
  height: 24px;
  padding: 2px;
  transition:
    background var(--duration-base) var(--easing-out),
    border-color var(--duration-base) var(--easing-out);
  width: 42px;

  ${SwitchInput}:focus-visible + & {
    box-shadow: var(--shadow-focus);
  }

  &::after {
    background: var(--color-neutral-50);
    border-radius: var(--radius-none);
    content: "";
    height: 18px;
    transform: translateX(${({ $checked }) => ($checked ? "18px" : "0")});
    transition: transform var(--duration-base) var(--easing-out);
    width: 18px;
  }
`;
