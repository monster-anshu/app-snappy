import styled from 'styled-components';

export const Container = styled.div`
  background-color: #0d0d30;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  img {
    height: 4rem;
    max-inline-size: 100%;
    cursor: pointer;
  }
  h2 {
    color: var(--white);
  }
  @media screen and (min-width: 720px) and (max-witdh: 1080px) {
    h2 {
      font-size: 1rem;
    }
  }
`;
