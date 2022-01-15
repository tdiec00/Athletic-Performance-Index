import styled from "styled-components";

export const StyleHomeContainer = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
max-width: 1400px;
margin: auto;
margin-top: 20px;

@media (max-width: 850px){
display: flex;
flex-direction: column;
align-content: center;
margin-top: 50px;
}
`