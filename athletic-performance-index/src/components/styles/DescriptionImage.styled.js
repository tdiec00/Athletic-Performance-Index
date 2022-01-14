import styled from "styled-components";
import img from '../../img/bicepImage.webp'

export const StyledDescriptionImage = styled.div`
display: flex;
background-image: url(${img});
width: 500px;
height: 500px;
background-repeat: no-repeat;
background-position: center;
margin: auto;

@media (max-width: 500px){
  width: 95vw;
}
`