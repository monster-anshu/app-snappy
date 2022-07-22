import styled from 'styled-components';

export const Contaienr = styled.div`
  height: 85%;
  width: 85%;
  background-color: #00000076;
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: 100%;
  @media screen and (min-width: 720px) and (max-witdh: 1080px) {
    grid-template-columns: 35% 65%;
  }
`;
