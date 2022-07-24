import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../Register/RegisterStyle';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { loginRoute } from 'Utils/APIRoutes';
import { Context } from 'Context';
import { useEffect } from 'react';
const Login = () => {
  const { token, tokenSetter, API } = useContext(Context);

  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleValidate = () => {
    const { password, username } = values;
    if (!password) {
      toast.error('Password is required');
      return false;
    }
    if (!username) {
      toast.error('Username is required');
      return false;
    }
    return true;
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const validate = handleValidate();
    if (!validate) return;
    setLoading(true);
    const result = API?.post(loginRoute, values);
    result &&
      toast
        .promise(result, {
          loading: 'Logining',
          success: (res) => {
            const auth_token: string = res.data.token;
            localStorage.setItem('token', auth_token);
            tokenSetter?.(auth_token);
            return 'Loging Successful';
          },
          error: (err) => {
            const status: number = err.response.status;
            if (status === 0) return 'Server is Down';
            if (status <= 499) return err.response.data.msg;
            if (status > 499) return 'Server Error';
          },
        })
        .then(() => navigate('/'))
        .finally(() => setLoading(false));
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    if (token) navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="brand">
          <img src={'/assets/logo.svg'} alt={'Logo'} />
          <h1>snappy</h1>
        </div>

        <input
          type={'text'}
          autoComplete={'username'}
          placeholder={'username'}
          name={'username'}
          onChange={handleChange}
        />
        <input
          type={'password'}
          placeholder={'Password'}
          name={'password'}
          onChange={handleChange}
          autoComplete={'current-password'}
        />

        <button type={'submit'} disabled={loading}>
          Log in
        </button>
        <p>
          Don't have an account ? <Link to={'/register'}>Register</Link>
        </p>
      </form>
    </Container>
  );
};

export default Login;
