import React, { useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT,MENU_HEIGHT } from "./config";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import { PushedProps } from "./types";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../components/Svg";

interface Props extends PushedProps {
  label: string;
  icon: React.ReactElement;
  initialOpenState?: boolean;
  className?: string;
  isMobile: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
`;

const AccordionContent = styled.div<{ isOpen: boolean; isPushed: boolean; maxHeight: number; top: number, isMobile: boolean }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out;
  overflow: ${({ isOpen }) => (isOpen ? `visible` : `hidden`)};
  border-color: ${({ isOpen, isPushed }) => (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent")};
  border-style: solid;
  border-width: 1px;
  position: ${({ isMobile }) => (isMobile?`relative`:`absolute`) };
  top: ${({ top,isMobile }) => (isMobile?0:`${top}px`) };
`;

const Accordion: React.FC<Props> = ({
  label,
  icon,
  isPushed,
  isMobile,
  pushNav,
  initialOpenState = false,
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);

  const handleClick = () => {
    if (isPushed) {
      setIsOpen((prevState) => !prevState);
    } else {
      pushNav(true);
      setIsOpen(true);
    }
  };

  return (
    <Container onMouseEnter={!isMobile?handleClick:(() => {})} onMouseLeave={!isMobile?handleClick:(() => {})}>
      <MenuEntry className={className} onClick={isMobile?handleClick:(() => {})} isMobile={isMobile}>
        {icon}
        <LinkLabel isPushed={isPushed} isMobile={isMobile}>{label}</LinkLabel>
        {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </MenuEntry>
      <AccordionContent
        isOpen={isOpen}
        isPushed={isPushed}
        maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}
        top={MENU_HEIGHT}
        isMobile={isMobile}
      >
        {children}
      </AccordionContent>
    </Container>
  );
};

export default Accordion;
