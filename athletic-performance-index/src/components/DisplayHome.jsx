import { StyledHomeLink } from './styles/HomeLink.styled';

const DisplayHome = () => {
  return (
    <div>
      <h2> Welcome to Athletic Performance Index. Explore our various lists of exercises.</h2>
      <StyledHomeLink to="/biceps">Biceps Exercises</StyledHomeLink>
      <br/>
      <StyledHomeLink to="/triceps">Triceps Exercises</StyledHomeLink>
      <br/>
      <StyledHomeLink to="/legs">Legs Exercises</StyledHomeLink>
      <br/>
      <StyledHomeLink to="/back">Back Exercises</StyledHomeLink>
      <br/>
      <StyledHomeLink to="/chest">Chest Exercises</StyledHomeLink>
      <br/>
      <StyledHomeLink to="/shoulders">Shoulder Exercises</StyledHomeLink>
      <br />
    </div>
  )
}

export default DisplayHome
