import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  background-color: #131324;
  height: 100vh;
  width: 100vw;
  .title {
    h1 {
      color: var(--white);
    }
  }
  .avatars {
    display: flex;
    gap: 2rem;
  }
  button {
    background-color: #997af0;
    color: var(--white);
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    transition: background-color 0.5s ease-in-out;
    &:hover {
      background-color: #4e0eff;
    }
  }
`;
export const Avatar = styled.div<{ isSelected?: boolean }>`
  border: 0.4rem solid transparent;
  padding: 0.4rem;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  ${(props) =>
    props.isSelected &&
    css`
      border-color: #4e0eff;
    `}
  img {
    height: 6rem;
  }
`;
