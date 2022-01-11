import { StyledNavbarLink } from "./styles/NavbarLink.styled"

const NavigationLinks = () => {
  return (
    <div>
      <StyledNavbarLink to="/">Home Page</StyledNavbarLink>
      <StyledNavbarLink to="/biceps">Biceps</StyledNavbarLink>
      <StyledNavbarLink to="/triceps">Triceps</StyledNavbarLink>
      <StyledNavbarLink to="/legs">Legs</StyledNavbarLink>
      <StyledNavbarLink to="/back">Back</StyledNavbarLink>
      <StyledNavbarLink to="/chest">Chest</StyledNavbarLink>
      <StyledNavbarLink to="/shoulders">Shoulders</StyledNavbarLink>
      <StyledNavbarLink to="/new">Add New Exercise</StyledNavbarLink>
    </div>
  );
}

export default NavigationLinks
