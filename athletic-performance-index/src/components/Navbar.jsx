import MobileNavigation from "./MobileNavigation";
import { StyledNavbarMobile } from "./styles/NavbarMobile.styled";
import { StyledNavbar } from "./styles/Navbar.styled";
import NavigationLinks from "./NavigationLinks";

const Navbar = () => {
  return (
    <>
      <StyledNavbar>
        <NavigationLinks />
      </StyledNavbar>
      <StyledNavbarMobile>
        <MobileNavigation />
        <p>Build Your Body</p>
      </StyledNavbarMobile>
    </>
  );
};

export default Navbar
