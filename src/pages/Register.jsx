import React from 'react';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/operation';

function Register() {
  const dispatch = useDispatch();
  //   dispach(
  //     registration({
  //       name: 'dsfs',
  //       email: 'dfseeeefd@msdkf.com',
  //       password: 'ddkkkccGGjsss11',
  //     })
  //   );

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const userData = {
      name: name.value,
      password: password.value,
      email: email.value,
    };

    dispatch(registration(userData));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" />
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
