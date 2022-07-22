import styled, { css } from 'styled-components';

export const Container = styled.div<{ isMine: boolean }>`
  display: flex;
  justify-content: flex-start;
  p {
    background-color: #9900ff20;
    color: #d1d1d1;
    max-width: 40%;
    overflow-wrap: break-word;
    font-size: 1.1rem;
    border-radius: 1rem;
    padding: 1rem;
  }
  ${({ isMine }) =>
    isMine &&
    css`
      justify-content: flex-end;
      p {
        background-color: #4f04ff21;
      }
    `}
`;
