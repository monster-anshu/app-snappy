import React from 'react';
import { UserType } from 'Types';
import { Container } from './Welcome.style';
interface Proptypes {
  user: UserType;
}
const Welcome: React.FC<Proptypes> = ({ user }) => {
  return (
    <Container>
      <img src={'/assets/robot.gif'} alt={'Robot'} />
      <h1>
        Welcome , <span>{user.username}</span>
      </h1>
      <h3>Please select a chat to Start Messaing </h3>
    </Container>
  );
};

export default Welcome;
