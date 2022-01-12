import styled from "styled-components";

export const StyleHomeContainer = styled.div`
display: flex;
margin: 20px;
justify-content: space-around;
flex-wrap: wrap;

@media (max-width: 800px){
  display: flex;
  flex-direction: column;
  align-content: center;
}
`