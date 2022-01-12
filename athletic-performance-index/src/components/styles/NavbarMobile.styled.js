import styled from "styled-components";

export const StyledNavbarMobile = styled.div`
background-color: #181818;
display: none;

@media (max-width: 800px) {
display: flex;
align-items: center;
height: 60px;
padding: 10px;

p {
  color: white;
  font-size: 20px;
  margin-left: 30%;
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

}
`