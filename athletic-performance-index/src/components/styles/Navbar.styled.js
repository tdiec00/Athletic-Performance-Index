import styled from "styled-components";

export const StyledNavbar = styled.div`
display: flex;
background-color: black;
height: 60px;
font-size: 20px;
width: 100vw;
flex-direction: column;

@media (min-width: 768px) {
    flex-direction: row;
  }
`