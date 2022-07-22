import React, { useContext, useEffect, useState } from 'react';
import { Contaienr } from './ChatContainerStyle';
import { Contacts } from 'Components';
import { getAllusers } from 'Utils/APIRoutes';
import { Context } from 'Context';
import { UserType } from 'Types';
import { Welcome, Chat } from 'Components';
const ChatContainer = () => {
  const { API, user } = useContext(Context);

  const [selected, setSelected] = useState<UserType | null>(null);

  const handleSelect = (selected_user: UserType) => {
    const selected =
      users.find((user) => user._id === selected_user._id) ?? null;
    setSelected(selected);
  };
  const [users, setUsers] = useState<UserType[]>([]);

  const getUsers = async (page: number) => {
    const res = await API?.get(getAllusers(page));
    setUsers(res?.data);
  };

  useEffect(() => {
    getUsers(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    user && (
      <Contaienr>
        <Contacts users={users} selected={selected} onSelect={handleSelect} />
        {selected ? <Chat user={selected} /> : <Welcome user={user} />}
      </Contaienr>
    )
  );
};

export default ChatContainer;
