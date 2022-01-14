import { FcLike } from "react-icons/fc";
import { StyledTop5TextContainer } from "./styles/Top5TextContainer.styled";

const DisplayTop5 = ({likes, name}) => {
  return (
    <>
      <StyledTop5TextContainer>
        <ul>
          <li>{`${name}`}</li>
        </ul>
        <FcLike />
        <p>{`${likes}`}</p>
      </StyledTop5TextContainer>
    </>
  );
}

export default DisplayTop5
