import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-template-rows: 10% 80% 10%;
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .chat-user {
      gap: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 3rem;
      }
      h3 {
        color: var(--white);
      }
    }
  }

  .messages {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    overflow: auto;
    scroll-behavior: smooth;
    padding: 1rem;
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
