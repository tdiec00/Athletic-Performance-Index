import { StyledHomeLink } from './styles/HomeLink.styled';
import { StyledBodyPartContainer } from './styles/BodyPartContainer.styled';
import { StyledHomeContainer, StyleHomeContainer } from './styles/HomeContainer.styled';
const DisplayHome = () => {
  return (
    <>
      <h2> Welcome to Athletic Performance Index. Explore our various lists of exercises.</h2>
      <StyleHomeContainer>
        <StyledBodyPartContainer>
          <StyledHomeLink to="/biceps">Biceps Exercises</StyledHomeLink>
        </StyledBodyPartContainer>
        <br />
        <StyledBodyPartContainer>
          <StyledHomeLink to="/triceps">Triceps Exercises</StyledHomeLink>
        </StyledBodyPartContainer>
        <br />
        <StyledBodyPartContainer>
          <StyledHomeLink to="/legs">Legs Exercises</StyledHomeLink>
        </StyledBodyPartContainer>
      </StyleHomeContainer>
      <br />
      <StyleHomeContainer>
        <StyledBodyPartContainer>
          <StyledHomeLink to="/back">Back Exercises</StyledHomeLink>
        </StyledBodyPartContainer>
        <br />
        <StyledBodyPartContainer>
          <StyledHomeLink to="/chest">Chest Exercises</StyledHomeLink>
        </StyledBodyPartContainer>
        <br />
        <StyledBodyPartContainer>
          <StyledHomeLink to="/shoulders">Shoulder Exercises</StyledHomeLink>
        </StyledBodyPartContainer>
      </StyleHomeContainer>
      <br />
    </>
  );
};

export default DisplayHome
