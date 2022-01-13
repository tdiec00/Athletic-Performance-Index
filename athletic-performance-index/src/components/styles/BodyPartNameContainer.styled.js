import styled from "styled-components";

export const StyledBodyPartNameContainer = styled.div`
border: 3px solid black;
height: 80px;
width: 300px;
border-radius: 10px;
text-align: center;
background-color: white;
box-shadow: 5px 5px black ;
margin: 20px;
font-size: 20px;
display: flex;
justify-content: flex-start;

&:hover{
  transform: scale(1.5);
}

form{
  display: flex;
}

button{
  background-color: white;
  border: white;
}

svg{
 margin: auto;
 height: 2em;
 width: 3em;
 margin-left: 10px;
}

p{
margin-left: 10px;
}
a{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
}
`