import styled from "styled-components";

export const DocShell = styled.div`
  background: var(--bg);
  color: var(--color-text-inverse);
  min-height: 100vh;
  overflow-x: clip;

  *,
  *::before,
  *::after {
    border-radius: 0 !important;
  }
`;

export const DocContent = styled.main`
  margin-left: 248px;
  width: calc(100% - 248px);

  @media (max-width: 980px) {
    margin-left: 0;
    width: 100%;
  }
`;
