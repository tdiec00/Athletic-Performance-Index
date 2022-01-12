import NavigationLinks from "./NavigationLinks"
import { CgMenuRound } from 'react-icons/cg';
import { StyledHamburger } from "./styles/Hamburger.styled";
import { useState } from "react";
import {RiCloseCircleFill} from 'react-icons/ri'
import { StyledHamburgerMenu } from "./styles/HamburgerMenu.styled";

const MobileNavigation = () => {

  const [open, setOpen] = useState(false);

  const color1 = (e) => {
    e.target.style.color = '  rgb(216, 202, 6)';
  }
  const color2 = (e) => {
    e.target.style.color = 'white';
  };

  const hamburgerIcon =
    <StyledHamburgerMenu>
      <CgMenuRound
        size='40px'
        color='white'
        onMouseEnter={color1}
        onMouseLeave={color2}
        onClick={() => setOpen(!open)}
      />
    </StyledHamburgerMenu>
  
  const closeHamburgerIcon =
    <StyledHamburgerMenu>
      <RiCloseCircleFill
        size='40px'
        color='white'
        onMouseEnter={color1}
        onMouseLeave={color2}
        onClick={() => setOpen(!open)}
      />
    </StyledHamburgerMenu>
  
  const closeMobileMenu = () => setOpen(false);
  
  return (
    <nav>
      <StyledHamburger>
        {open ? closeHamburgerIcon : hamburgerIcon}
      </StyledHamburger>
      {open && <NavigationLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
}

export default MobileNavigation
