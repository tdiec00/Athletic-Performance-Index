import { StyledFooter } from "./styles/Footer.styled";
import { StyledNavbarLink } from "./styles/NavbarLink.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledNavbarLink to="/new">Add New Exercise</StyledNavbarLink>
    </StyledFooter>
  )
};

export default Footer
