import React from 'react';
import { Container } from './Loader.style';
import LoaderSvg from 'Assets/loader.gif';

interface Proptypes {
  text?: string;
}

const Loader: React.FC<Proptypes> = ({ text }) => {
  return (
    <Container>
      <img src={LoaderSvg} alt={'Loader'} />
      {text && <h2>{text}</h2>}
    </Container>
  );
};

export default Loader;
