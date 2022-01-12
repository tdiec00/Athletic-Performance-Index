import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import { StyledNavbarMobile } from "./styles/NavbarMobile.styled";
import { StyledNavbar } from "./styles/Navbar.styled";

const Navbar = () => {
  return (
    <>
      <StyledNavbar>
        <Navigation />
      </StyledNavbar>
      <StyledNavbarMobile>
        <MobileNavigation />
        <p>Build Your Body</p>
      </StyledNavbarMobile>
    </>
  );
};

export default Navbar
