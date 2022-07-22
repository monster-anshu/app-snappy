import axios from 'axios';
import React, { useEffect, useMemo, useRef } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextType, MessageType, UserType } from 'Types';
import { values as intialValues } from './intialValues';
import { get_me } from 'Utils/APIRoutes';
import { io, Socket } from 'socket.io-client';
import { Loader } from 'Components';
export const Context = createContext<ContextType>(intialValues);

export const ContextProvider: React.FC<{ children: React.ReactNode }> = (
  props,
) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);
  const [unreadchat, setUnreadchat] = useState<MessageType[]>([]);

  const host = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const socket = useRef<null | Socket>(null);

  const API = useMemo(
    () =>
      axios.create({
        headers: {
          Authorization: token ?? '',
        },
        baseURL: `https://${host}`,
      }),
    [token, host],
  );

  const userSetter = (user: UserType) => setUser(user);
  const tokenSetter = (token: string) => setToken(token);

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    socket.current?.disconnect();
    navigate('/login');
  };

  const get_user = async () => {
    const res = await API.get(get_me);
    const IO = io(`ws://${host}`);
    const id = res.data._id;
    IO.emit('online', { user_id: id });
    socket.current = IO;
    if (res.status === 401) logout();
    setUser(res.data);
    if (!res.data.avatarImage) navigate('/avatar');
  };

  const add_unread_chat = (message: MessageType) =>
    setUnreadchat((messages) => messages.concat(message));

  const remove_unread_chat = (user_id: string) =>
    setUnreadchat((messages) =>
      messages.filter((message) => message.sender !== user_id),
    );

  useEffect(() => {
    if (!socket.current) return;
    socket.current?.on('recieve_chat', (res) => {
      const _id = (Math.random() * 10000).toString();
      const revicedMessage: MessageType = { ...res, _id };
      add_unread_chat(revicedMessage);
    });
  }, [user?._id]);

  useEffect(() => {
    API.get('/').then(() => setLoading(false));
  }, [API]);

  const globalValues = {
    token,
    user,
    API,
    userSetter,
    tokenSetter,
    get_user,
    logout,
    unreadchat,
    remove_unread_chat,
  };
  return (
    <Context.Provider value={globalValues}>
      {loading ? <Loader text={'Server is getiing ready'} /> : props.children}
    </Context.Provider>
  );
};
