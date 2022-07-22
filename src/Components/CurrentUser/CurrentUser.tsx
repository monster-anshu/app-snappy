import React from 'react';
import { UserType } from 'Types';
import { Container } from './CurrentUser.style';
import { Logout } from 'Components';
import { useNavigate } from 'react-router-dom';
interface Proptypes {
  user: UserType;
  logout?: () => void;
}

const CurrentUser: React.FC<Proptypes> = ({ user, logout }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/avatar');
  };
  return (
    <Container>
      <div className={'avatar'}>
        <img
          src={`data:image/svg+xml;base64,${user.avatarImage}`}
          alt={user.username}
          onClick={handleClick}
        />
      </div>
      <div className={'username'}>
        <h2>{user.username}</h2>
      </div>
      {logout && <Logout logout={logout} />}
    </Container>
  );
};

export default CurrentUser;
