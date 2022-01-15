import styled from "styled-components";

export const StyledBodyPartPageContainer = styled.div`
display: flex;
margin: 20px;
justify-content: space-around;
flex-wrap: wrap;
margin-top: -20px;

@media (max-width: 850px){
  flex-direction: column;
  flex-wrap: nowrap;
  margin-top: 15px;
  justify-content: center;
  margin-right: -7px;
}
`