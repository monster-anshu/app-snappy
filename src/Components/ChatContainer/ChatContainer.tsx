import React, { useContext, useEffect, useState } from 'react';
import { Contaienr } from './ChatContainerStyle';
import { Contacts } from 'Components';
import { getAllusers } from 'Utils/APIRoutes';
import { Context } from 'Context';
import { UserType } from 'Types';
import { Welcome, Chat } from 'Components';
import { useWindowDimensions } from 'Hooks';
const ChatContainer = () => {
  const { API, user } = useContext(Context);

  const [selected, setSelected] = useState<UserType | null>(null);

  const handleSelect = (selected_user: UserType) => {
    const selected =
      users.find((user) => user._id === selected_user._id) ?? null;
    setSelected(selected);
  };
  const [users, setUsers] = useState<UserType[]>([]);

  const small = useWindowDimensions().width < 561;
  const getUsers = (page: number) => {
    API?.get(getAllusers(page)).then((res) => setUsers(res.data));
  };

  useEffect(() => {
    getUsers(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    user &&
    (small ? (
      <>
        <Contaienr>
          {selected ? (
            <Chat user={selected} onBack={() => setSelected(null)} />
          ) : (
            <Contacts
              users={users}
              selected={selected}
              onSelect={handleSelect}
            />
          )}
        </Contaienr>
      </>
    ) : (
      <Contaienr>
        <Contacts users={users} selected={selected} onSelect={handleSelect} />
        {selected ? <Chat user={selected} /> : <Welcome user={user} />}
      </Contaienr>
    ))
  );
};

export default ChatContainer;
