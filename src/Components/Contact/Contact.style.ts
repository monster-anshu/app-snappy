import styled, { css } from 'styled-components';

export const Container = styled.div<{ isSelected: boolean }>`
  background-color: #ffffff39;
  min-height: 5rem;
  width: 90%;
  cursor: pointer;
  border-radius: 0.2rem;
  padding: 0.4rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  transition: 0.5s ease-in-out;
  ${(props) =>
    props.isSelected &&
    css`
      background-color: #9186f3;
    `}
  img {
    height: 3rem;
  }
  h3 {
    color: var(--white);
  }
  .username {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      height: 1.3rem;
      width: 1.3rem;
      color: #0d0d30;
      background-color: yellow;
      border-radius: 50%;
      padding: 0.2rem;
      font-size: 0.8rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
