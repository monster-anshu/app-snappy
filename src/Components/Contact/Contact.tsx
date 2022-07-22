import React from 'react';
import { UserType } from 'Types';
import { Container } from './Contact.style';
import defaultUser from 'Assets/user.svg';
interface Proptypes {
  user: UserType;
  onSelect: (user: UserType) => void;
  isSelected: boolean;
  unread: number;
}

const Contact: React.FC<Proptypes> = ({
  user,
  onSelect,
  isSelected,
  unread,
}) => {
  const handleClick = () => {
    onSelect(user);
  };
  return (
    <Container onClick={handleClick} isSelected={isSelected}>
      <div className={'avatar'}>
        <img
          src={
            user.avatarImage
              ? `data:image/svg+xml;base64,${user.avatarImage}`
              : defaultUser
          }
          alt={user.username}
        />
      </div>
      <div className={'username'}>
        <h3>{user.username} </h3>
        {unread > 0 && <p>{unread}</p>}
      </div>
    </Container>
  );
};

export default Contact;
