import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operation';

function Login() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const userData = {
      password: password.value,
      email: email.value,
    };
    dispatch(login(userData));
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}
export default Login;
