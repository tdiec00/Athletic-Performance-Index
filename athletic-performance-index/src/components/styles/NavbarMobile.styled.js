import styled from "styled-components";

export const StyledNavbarMobile = styled.div`
background-color: #181818;
display: none;

@media (max-width: 750px) {
display: flex;
align-items: center;
height: 60px;
padding: 10px;


p {
  color: white;
  font-size: 25px;
  margin-left: calc(28%);
}

ul {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  width: 100%;
  background-color: #181818;
  top: 40px;
}

ul a{
  padding-bottom: 7px;
}

ul a:hover{
  color: red;
}

@media (max-width: 500px){
p{
font-size: 25px;
margin-left: calc(20%);
}
}
}
`