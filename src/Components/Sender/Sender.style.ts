import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 5% 95%;
  align-items: center;
  background-color: #080420;
  padding: 0.2rem;
  padding: 0.3rem;
  .button-container {
    display: flex;
    align-items: center;
    color: #ffffff;
    gap: 1rem;
    position: relative;
    img {
      height: 1rem;
      width: 1rem;
      cursor: pointer;
    }
    .emoji-picker-react {
      top: -350px;
      position: absolute;
      background-color: #080420;
      box-shadow: 0 5px 10px #9186f3;
      border-color: #9186f3;
      .emoji-scroll-wrapper::-webkit-scrollbar {
        background-color: #080420;
        width: 5px;
        &-thumb {
          border-radius: 10px;
          background-color: #9186f3;
        }
      }
      .emoji-categories {
        button {
          filter: contrast(0);
        }
      }
      .emoji-search {
        background-color: transparent;
      }
      .emoji-group::before {
        background-color: #080420;
      }
    }
  }
  form {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    gap: 2rem;
    align-items: center;
    background-color: #ffffff34;
    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;
      resize: none;
      color: var(--white);
      &::selection {
        background-color: #9186fc;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #9186f3;
      border: none;
      cursor: pointer;
      img {
        height: 1rem;
        width: 1rem;
      }
    }
  }
`;
