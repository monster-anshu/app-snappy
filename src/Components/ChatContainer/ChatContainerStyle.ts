import styled from 'styled-components';

export const Contaienr = styled.div`
  height: 85vh;
  width: 85vw;
  background-color: #00000076;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 100%;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 35% 65%;
    /* background-color: #ffffff; */
  }
  @media screen and (max-width: 780px) {
    grid-template-columns: 45% 55%;
  }
  @media screen and (max-width: 560px) {
    grid-template-columns: 100% 100%;
  }
`;
