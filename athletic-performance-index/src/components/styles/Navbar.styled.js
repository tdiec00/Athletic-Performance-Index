import styled from "styled-components";

export const StyledNavbar = styled.div`
display: none;

h1{
  font-size: 100px;
}

@media (min-width: 750px) {
display: flex;
font-size: 20px;
width: 100vw;
flex-direction: column;
background-color: #181818;
color: white;
text-align: center;
}

ul{
display: flex;
justify-content: space-around;
}

ul a{
  padding: 10px;
  border: 2px solid black;
  border-radius: 50px;
  background-color: white;
  color: black;
}

ul a:hover{
  background-color:  rgb(216, 202, 6);
  transform: scale(1.1);
}
`
