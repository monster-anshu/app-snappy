import React, { useContext, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Chat, Login, Register, SetAvatar } from 'Pages';
import { Context } from 'Context';

const ProtectedRoutes = () => {
  const { get_user, token } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) navigate('/login');
    get_user?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Chat />} />
        <Route path={'/avatar'} element={<SetAvatar />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/*'} element={<ProtectedRoutes />} />
      </Routes>
    </div>
  );
};

export default App;
