import styled from "styled-components";

export const StyledHamburger = styled.div`
cursor: pointer;
background-color: #181818;

&:hover{
  transform: scale(1.15);
  color:  rgb(216, 202, 6);
}


@media (min-width: 850px){
display: none;
}
`