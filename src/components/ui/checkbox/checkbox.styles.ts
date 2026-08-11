import styled from "styled-components";

export const CheckboxLabel = styled.label`
  align-items: flex-start;
  color: var(--color-text-inverse);
  cursor: pointer;
  display: inline-flex;
  font-size: var(--font-size-md);
  gap: var(--space-3);
  line-height: var(--leading-normal);
`;

export const CheckboxInput = styled.input`
  height: 1px;
  opacity: 0;
  position: absolute;
  width: 1px;
`;

export const CheckboxBox = styled.span<{ $checked: boolean }>`
  align-items: center;
  background: ${({ $checked }) =>
    $checked ? "var(--color-brand-500)" : "var(--color-neutral-900)"};
  border: 1px solid
    ${({ $checked }) => ($checked ? "var(--color-brand-500)" : "var(--alpha-white-20)")};
  border-radius: var(--radius-none);
  color: var(--color-text-inverse);
  display: inline-flex;
  flex-shrink: 0;
  height: 18px;
  justify-content: center;
  margin-top: 1px;
  transition:
    background var(--duration-press) var(--easing-out),
    border-color var(--duration-press) var(--easing-out),
    transform var(--duration-press) var(--easing-out);
  width: 18px;

  ${CheckboxInput}:focus-visible + & {
    box-shadow: var(--shadow-focus);
  }

  svg {
    opacity: ${({ $checked }) => ($checked ? 1 : 0)};
    transform: scale(${({ $checked }) => ($checked ? 1 : 0.9)});
    transition:
      opacity var(--duration-press) var(--easing-out),
      transform var(--duration-press) var(--easing-out);
  }
`;
