import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
  isMobile: boolean
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed: boolean, isMobile: boolean }>`
  color: ${({ isPushed,isMobile, theme }) => (isPushed || !isMobile ? theme.colors.textSubtle : "transparent")};
  transition: color 0.4s;
  flex-grow: 1;
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  transition: all 0.3s ease-in-out;
  padding: ${({ secondary }) => (secondary ? "0 32px" : "0 16px")};
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  filter: brightness(${({ isActive }) => (isActive ? "100" : "100")}%);
  /* background-color: ${({ secondary, theme }) => (secondary ? theme.colors.background : "transparent")}; */
  background-color: ${({ theme }) => theme.nav.background};
  color: ${({ theme }) => theme.colors.textSubtle};
  box-shadow: ${({ isActive, theme, isMobile }) => (isActive ? `inset ${isMobile?2:0}px -${isMobile?0:2}px 0px ${theme.colors.primary}` : "none")};

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
    fill: ${({ theme }) => theme.colors.textSubtle};
  }

  &:hover {
    ${({ theme, isMobile }) => isMobile?`background-color: ${theme.colors.tertiary}`:""};
    filter: brightness(100%);
    box-shadow: ${({ theme, isMobile }) => `inset ${isMobile?2:0}px -${isMobile?0:2}px 0px ${theme.colors.primary}`};
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    -webkit-background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 200% 100%;
    font-weight: bold;
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

export { MenuEntry, LinkLabel };
