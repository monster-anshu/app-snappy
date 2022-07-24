import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  align-items: center;
  background-color: #080420;
  padding: 0.2rem;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  .button-container {
    display: flex;
    align-items: center;
    color: #ffffff;
    gap: 1rem;
    position: relative;
    position: absolute;
    img {
      height: 2rem;
      width: 2rem;
      cursor: pointer;
      padding: 0.2rem;
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
      height: 2rem;
      background-color: transparent;
      border: none;
      padding: 0 2.1rem;
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
      right: 0.3rem;
      position: absolute;
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #9186f3;
      border: none;
      cursor: pointer;
      height: 2rem;
      width: 2;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
`;
