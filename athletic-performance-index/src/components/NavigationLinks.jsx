import { StyledNavbarLink } from "./styles/NavbarLink.styled"

const NavigationLinks = ({closeMobileMenu, isMobile}) => {
  return (
    <ul>
      <StyledNavbarLink to="/" onClick={() => isMobile && closeMobileMenu()}>Home Page</StyledNavbarLink>
      <StyledNavbarLink to="/biceps" onClick={() => isMobile && closeMobileMenu()}>Biceps</StyledNavbarLink>
      <StyledNavbarLink to="/triceps" onClick={() => isMobile && closeMobileMenu()}>Triceps</StyledNavbarLink>
      <StyledNavbarLink to="/legs" onClick={() => isMobile && closeMobileMenu()}>Legs</StyledNavbarLink>
      <StyledNavbarLink to="/back" onClick={() => isMobile && closeMobileMenu()}>Back</StyledNavbarLink>
      <StyledNavbarLink to="/chest" onClick={() => isMobile && closeMobileMenu()}>Chest</StyledNavbarLink>
      <StyledNavbarLink to="/shoulders" onClick={() => isMobile && closeMobileMenu()}>Shoulders</StyledNavbarLink>
      <StyledNavbarLink to="/new" onClick={() => isMobile && closeMobileMenu()}>Add New Exercise</StyledNavbarLink>
    </ul>
  );
}

export default NavigationLinks
