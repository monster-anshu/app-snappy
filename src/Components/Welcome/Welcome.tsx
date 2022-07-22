import React from 'react';
import { UserType } from 'Types';
import { Container } from './Welcome.style';
import Robot from 'Assets/robot.gif';
interface Proptypes {
  user: UserType;
}
const Welcome: React.FC<Proptypes> = ({ user }) => {
  return (
    <Container>
      <img src={Robot} alt={'Robot'} />
      <h1>
        Welcome , <span>{user.username}</span>
      </h1>
      <h3>Please select a chat to Start Messaing </h3>
    </Container>
  );
};

export default Welcome;
