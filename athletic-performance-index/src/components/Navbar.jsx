import { StyledNavbar } from './styles/Navbar.styled';
import { StyledNavbarLink } from './styles/NavbarLink.styled';

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavbarLink to="/">Home Page</StyledNavbarLink>
      <StyledNavbarLink to="/biceps">Biceps</StyledNavbarLink>
      <StyledNavbarLink to="/triceps">Triceps</StyledNavbarLink>
      <StyledNavbarLink to="/legs">Legs</StyledNavbarLink>
      <StyledNavbarLink to="/back">Back</StyledNavbarLink>
      <StyledNavbarLink to="/chest">Chest</StyledNavbarLink>
      <StyledNavbarLink to="/shoulders">Shoulders</StyledNavbarLink>
    </StyledNavbar>
  )
};

export default Navbar
