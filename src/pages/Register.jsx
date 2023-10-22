import React from 'react';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/operation';
import { Button, TextField, Box } from '@mui/material';
// import css from './Register.module.css';

function Register() {
  const dispatch = useDispatch();

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
    <div className="container">
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          display: 'flex',
          flexDirection: 'column',
        }}
        autoComplete="off"
      >
        <TextField
          type="text"
          name="name"
          id="outlined-basic"
          label="Name"
          variant="standard"
        />
        <TextField
          type="email"
          name="email"
          id="filled-basic"
          label="Email"
          variant="standard"
        />
        <TextField
          type="password"
          name="password"
          id="standard-basic"
          label="Password"
          variant="standard"
        />
        <Button variant="contained" type="submit">
          Register
        </Button>
      </Box>
    </div>
  );
}

export default Register;
