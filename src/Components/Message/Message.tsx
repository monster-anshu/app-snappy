import React from 'react';
import { MessageType } from 'Types';
import { Container } from './Message.style';

interface Proptypes extends MessageType {
  isMine: boolean;
}
const Message: React.FC<Proptypes> = ({
  message,
  _id,
  createdAt,
  sender,
  isMine,
}) => {
  return (
    <Container isMine={isMine}>
      <p>{message}</p>
    </Container>
  );
};

export default Message;
