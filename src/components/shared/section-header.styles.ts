import styled from "styled-components";
import { Container } from "@/styles/layout";

export const SectionHeaderRoot = styled(Container).attrs({ as: "header" })<{
  $align: "center" | "left";
  $hasAction: boolean;
}>`
  align-items: ${({ $align, $hasAction }) =>
    $align === "center" || !$hasAction ? "center" : "flex-end"};
  display: flex;
  flex-direction: ${({ $align, $hasAction }) =>
    $align === "center" || !$hasAction ? "column" : "row"};
  gap: ${({ $align, $hasAction }) => ($align === "center" || !$hasAction ? "16px" : "24px")};
  justify-content: ${({ $align, $hasAction }) =>
    $align === "center" || !$hasAction ? "center" : "space-between"};
  padding: ${({ $align }) => ($align === "center" ? "80px 0 50px" : "80px 0 0")};
  text-align: ${({ $align }) => $align};

  @media (max-width: 980px) {
    align-items: ${({ $align }) => ($align === "center" ? "center" : "flex-start")};
    flex-direction: column;
    gap: 12px;
    padding: ${({ $align }) => ($align === "center" ? "56px 0 36px" : "52px 0 0")};
    text-align: ${({ $align }) => $align};
  }
`;

export const SectionHeaderCopy = styled.div<{ $align: "center" | "left" }>`
  max-width: ${({ $align }) => ($align === "center" ? "720px" : "640px")};
  width: 100%;
`;

export const SectionHeaderTitle = styled.h2<{ $tone: "dark" | "light" }>`
  color: ${({ $tone }) =>
    $tone === "dark" ? "var(--color-text-inverse)" : "var(--color-text-primary)"};
  font-size: 56px;
  font-weight: 800;
  letter-spacing: -2px;
  line-height: 1.05;
  margin: 16px 0 0;
  text-transform: uppercase;

  @media (max-width: 980px) {
    font-size: 40px;
  }

  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

export const SectionHeaderAccent = styled.span`
  color: var(--red);
`;

export const SectionHeaderIntro = styled.p<{ $tone: "dark" | "light" }>`
  color: ${({ $tone }) =>
    $tone === "dark" ? "var(--color-text-soft-dark)" : "var(--color-text-muted-light)"};
  font-size: var(--font-size-description);
  line-height: 1.6;
  margin: 16px auto 0;
  width: ${({ $tone }) => ($tone === "dark" ? "600px" : "100%")};

  @media (max-width: 980px) {
    width: min(600px, 100%);
  }
`;

export const SectionHeaderAction = styled.div`
  align-self: flex-end;
  display: flex;
  flex-shrink: 0;

  @media (max-width: 980px) {
    align-self: flex-start;
  }
`;
