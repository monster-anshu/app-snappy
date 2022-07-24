import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  background-color: #080420;
  overflow: hidden;
  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    img {
      height: 2rem;
    }
    h3 {
      color: var(--white);
      position: relative;
      text-transform: uppercase;
      &::after {
        content: attr(data-count);
        position: absolute;
        right: -1rem;
        top: -0.5rem;
        background-color: yellow;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        display: flex;
        color: #0d0d30;
        justify-content: center;
        align-items: center;
        font-size: 0.8rem;
      }
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    ::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
  }
`;
