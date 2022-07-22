import React from 'react';
import { Container } from './Logout.style';
import power from 'Assets/power.svg';

interface Proptypes {
  logout: () => void;
}
const Logout: React.FC<Proptypes> = ({ logout }) => {
  return (
    <Container>
      <button onClick={logout}>
        <img src={power} alt={'Logout'} />
      </button>
    </Container>
  );
};

export default Logout;
