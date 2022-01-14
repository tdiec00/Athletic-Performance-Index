import styled from "styled-components";
import images from "./src/images/bicepImage.webp"

export const StyledBodyPartContainer = styled.div`
border: 3px solid black;
height: 200px;
width: 300px;
border-radius: 10px;
text-align: center;
background-color: white;
box-shadow: 10px 10px black ;

&:hover{
  transform: scale(1.5);
}
`