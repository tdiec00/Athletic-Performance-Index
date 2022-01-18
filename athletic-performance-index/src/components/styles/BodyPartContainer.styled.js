import styled from "styled-components";
import img from '../../img/bicepImage.webp'

export const StyledBodyPartContainer = styled.div`
border: 3px solid black;
height: 200px;
width: 300px;
border-radius: 10px;
text-align: center;
background-color: white;
box-shadow: 10px 10px black;
background-image: url(${img});
background-position: center;
display: flex;
align-items: center;
opacity: 0.75;

a{
  color: white;
  font-size: 50px;
  font-weight: bold;
}

&:hover{
  transform: scale(1.2);
}

@media (max-width: 500px){
  max-width: 90vw;

  &:hover{
  transform: none;
}
}
`