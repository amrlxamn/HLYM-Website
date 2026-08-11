import styled from "styled-components";

export const SidebarShell = styled.aside`
  border-right: 1px solid var(--color-border-inverse);
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  padding: 32px 0 24px;
  position: fixed;
  top: 0;
  width: 248px;
  z-index: 100;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const SidebarLogo = styled.a`
  align-items: center;
  color: var(--color-text-inverse);
  display: flex;
  font-size: 13px;
  font-weight: 700;
  gap: 10px;
  letter-spacing: -0.3px;
  margin: 0 20px 28px;
`;

export const SidebarLogoMark = styled.span`
  align-items: center;
  background: var(--red);
  border-radius: var(--radius-none);
  display: inline-flex;
  font-size: 14px;
  font-weight: 800;
  height: 28px;
  justify-content: center;
  width: 28px;
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 0 12px;
`;

export const SidebarGroup = styled.div`
  margin-bottom: 20px;
`;

export const SidebarGroupLabel = styled.span`
  color: var(--color-text-soft-dark);
  display: block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 6px;
  padding: 0 12px;
  text-transform: uppercase;
`;

export const SidebarLink = styled.a<{ $active: boolean }>`
  align-items: center;
  border-radius: var(--radius-none);
  color: ${({ $active }) =>
    $active ? "var(--color-text-inverse)" : "var(--color-text-readable-dark)"};
  display: block;
  font-size: 13px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  padding: 7px 12px;
  transition:
    background 160ms var(--easing-standard),
    color 160ms var(--easing-standard);

  &:hover {
    background: rgba(255, 255, 255, 0.04);
    color: var(--color-text-inverse);
  }
`;

export const SidebarSubLink = styled.a<{ $active: boolean }>`
  border-radius: var(--radius-none);
  color: ${({ $active }) =>
    $active ? "var(--color-text-inverse)" : "var(--color-text-muted-dark)"};
  display: block;
  font-size: 12px;
  font-weight: ${({ $active }) => ($active ? 500 : 400)};
  padding: 5px 12px 5px 24px;
  transition:
    background 160ms var(--easing-standard),
    color 160ms var(--easing-standard);

  &:hover {
    background: rgba(255, 255, 255, 0.03);
    color: var(--color-text-inverse);
  }
`;

export const SidebarFooter = styled.div`
  border-top: 1px solid var(--color-border-inverse);
  margin: auto 20px 0;
  padding: 16px 0 0;
`;

export const SidebarVersion = styled.span`
  color: var(--color-text-soft-dark);
  display: block;
  font-size: 11px;
`;
