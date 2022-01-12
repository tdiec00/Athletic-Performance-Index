import styled from "styled-components";

export const StyledNavbar = styled.div`
display: none;


@media (min-width: 800px) {
display: flex;
font-size: 20px;
width: 100vw;
flex-direction: column;
background-color: #181818;
color: white;
text-align: center;
}
ul a:hover{
  color: red;
}
`
