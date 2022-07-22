import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from './RegisterStyle';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { registerRoute } from 'Utils/APIRoutes';
import { Context } from 'Context';
const Register = () => {
  const { API, tokenSetter } = useContext(Context);

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleValidate = () => {
    const { password, confirmPassword, username, email } = values;
    if (!password) {
      toast.error('Password is required');
      return false;
    }
    if (!username) {
      toast.error('Username is required');
      return false;
    }
    if (!email) {
      toast.error('Email is required');
      return false;
    }
    if (password !== confirmPassword) {
      toast.error('Confirm Password is not correct');
      return false;
    }
    if (username.length < 3) {
      toast.error('Username is too short');
      return false;
    }
    return true;
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const validate = handleValidate();
    if (!validate) return;
    setLoading(true);
    const result = API?.post(registerRoute, values);
    result &&
      toast
        .promise(result, {
          loading: 'Registering',
          success: ({ data }) => {
            tokenSetter?.(data.token);
            localStorage.setItem('token', data.token);
            return 'Account created';
          },
          error: (err) => {
            const status: number = err.response.status;
            if (status === 0) return 'Server is Down';
            if (status > 499 && status < 600) return 'Server Error';
            if (status === 409) return err.response.data.msg;
            return 'Error';
          },
        })
        .then(() => navigate('/avatar'))
        .finally(() => setLoading(false));
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="brand">
          <img src={'/assets/logo.svg'} alt={'Logo'} />
          <h1>snappy</h1>
        </div>
        <input
          type={'text'}
          placeholder={'Username'}
          name={'username'}
          onChange={handleChange}
          autoComplete={'username'}
        />
        <input
          type={'email'}
          placeholder={'Email'}
          name={'email'}
          onChange={handleChange}
          autoComplete={'email'}
        />
        <input
          type={'password'}
          placeholder={'Password'}
          name={'password'}
          onChange={handleChange}
          autoComplete={'new-password'}
        />
        <input
          type={'password'}
          placeholder={'Confirm Password'}
          name={'confirmPassword'}
          onChange={handleChange}
          autoComplete={'new-password'}
        />
        <button type={'submit'} disabled={loading}>
          Create Account
        </button>
        <span>
          Already have an account ? <Link to={'/login'}>Login</Link>
        </span>
      </form>
    </Container>
  );
};

export default Register;
