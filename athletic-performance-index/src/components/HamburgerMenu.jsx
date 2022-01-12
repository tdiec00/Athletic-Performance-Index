import { fallDown as Menu } from 'react-burger-menu';
import { StyledNavbarLink } from './styles/NavbarLink.styled'


const HamburgerMenu = () => {
  return (
      <Menu>
      <StyledNavbarLink to="/">Home Page</StyledNavbarLink>
      <StyledNavbarLink to="/biceps">Biceps</StyledNavbarLink>
      <StyledNavbarLink to="/triceps">Triceps</StyledNavbarLink>
      <StyledNavbarLink to="/legs">Legs</StyledNavbarLink>
      <StyledNavbarLink to="/back">Back</StyledNavbarLink>
      <StyledNavbarLink to="/chest">Chest</StyledNavbarLink>
      <StyledNavbarLink to="/shoulders">Shoulders</StyledNavbarLink>
      <StyledNavbarLink to="/new">Add New Exercise</StyledNavbarLink>
      </Menu>
  );
};

export default HamburgerMenu
