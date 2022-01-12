import NavigationLinks from "./NavigationLinks"
import { CgMenuRound } from 'react-icons/cg';
import { StyledHamburger } from "./styles/Hamburger.styled";
import { useState } from "react";
import {RiCloseCircleFill} from 'react-icons/ri'


const MobileNavigation = () => {

  const [open, setOpen] = useState(false);
  const hamburgerIcon = 
    <CgMenuRound
      size='40px'
      color='white'
      onClick={() => setOpen(!open)}
    />
  
  const closeHamburgerIcon = 
    <RiCloseCircleFill
      size='40px'
      color='white'
      onClick={() => setOpen(!open)}
    />
  
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
