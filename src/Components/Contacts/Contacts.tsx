import React, { useContext } from 'react';
import { UserType } from 'Types';
import { Container } from './Contacts.style';
import { Contact, CurrentUser } from 'Components';
import { Context } from 'Context';
interface Proptypes {
  users: UserType[];
  selected: UserType | null;
  onSelect: (user: UserType) => void;
}

const Contacts: React.FC<Proptypes> = ({ users, selected, onSelect }) => {
  const { user, logout, unreadchat } = useContext(Context);

  return (
    <Container>
      <div className={'brand'}>
        <img src={'/assets/logo.svg'} alt={'Logo'} />
        <h3 data-count={unreadchat.length}>snappy</h3>
      </div>
      <div className={'contacts'}>
        {users.map((user) => (
          <Contact
            key={user._id}
            user={user}
            onSelect={onSelect}
            isSelected={selected?._id === user._id}
            unread={
              unreadchat.filter((chat) => chat.sender === user._id).length
            }
          />
        ))}
      </div>
      {user && <CurrentUser user={user} logout={logout} />}
    </Container>
  );
};

export default Contacts;
