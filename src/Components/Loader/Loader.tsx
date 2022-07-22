import React from 'react';
import { Container } from './Loader.style';

interface Proptypes {
  text?: string;
}

const Loader: React.FC<Proptypes> = ({ text }) => {
  return (
    <Container>
      <img src={'/assets/loader.gif'} alt={'Loader'} />
      {text && <h2>{text}</h2>}
    </Container>
  );
};

export default Loader;
