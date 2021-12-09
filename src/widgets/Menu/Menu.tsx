import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import { Flex } from "../../components/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./Logo";
import Panel from "./Panel";
import UserBlock from "./UserBlock";
import { NavProps } from "./types";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import Avatar from "./Avatar";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import Warning from "./Warning";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const MenuContainer = styled.div<{ showMenu: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT*4}px`)};
  transition: top 0.3s;
  left: 0;
  z-index: 20;
  width: 100%;
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  // position: fixed;
  // top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  // left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
  min-height: calc(100vh - 50px);
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  transform: translate3d(0, 0, 0);
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  priceLink,
  profile,
  children,
  warningClosed=true,
  toggleWarningClosed,
  cakeContract,
  socials
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);
  const [closedWarning, setClosedWarning] = useState(warningClosed);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <MenuContainer showMenu={showMenu}>
        {!closedWarning && <Warning setClosedWarning={setClosedWarning} toggleValue={toggleWarningClosed} />}
        <StyledNav showMenu={showMenu}>
          <Logo
            isPushed={isPushed}
            togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
            isDark={isDark}
            isMobile={isMobile}
            href={homeLink?.href ?? "/"}
          />
          {!isMobile && 
            <PanelBody 
              isPushed={isPushed}
              isMobile={isMobile}
              isDark={isDark}
              toggleTheme={toggleTheme}
              langs={langs}
              setLang={setLang}
              currentLang={currentLang}
              cakePriceUsd={cakePriceUsd}
              pushNav={setIsPushed}
              links={links}
              priceLink={priceLink}
              socials={socials} />
          }
          {!!login && !!logout && (
            <Flex>
              <UserBlock account={account} login={login} logout={logout} cakeContract={cakeContract} priceLink={priceLink} socials={socials} cakePriceUsd={cakePriceUsd} />
              {profile && <Avatar profile={profile} />}
            </Flex>
          )}
        </StyledNav>
      </MenuContainer>
      <BodyWrapper>
        {
          isMobile &&
          <Panel
            isPushed={isPushed}
            isMobile={isMobile}
            closedWarning={closedWarning}
            showMenu={showMenu}
            isDark={isDark}
            toggleTheme={toggleTheme}
            langs={langs}
            setLang={setLang}
            currentLang={currentLang}
            cakePriceUsd={cakePriceUsd}
            pushNav={setIsPushed}
            links={links}
            priceLink={priceLink}
            socials={socials}
          />
        }
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
      {!isMobile && 
        <PanelFooter 
            isPushed={isPushed}
            isMobile={isMobile}
            isDark={isDark}
            toggleTheme={toggleTheme}
            langs={langs}
            setLang={setLang}
            currentLang={currentLang}
            cakePriceUsd={cakePriceUsd}
            pushNav={setIsPushed}
            links={links}
            priceLink={priceLink} 
            socials={socials}
        />
      }
    </Wrapper>
  );
};

export default Menu;
