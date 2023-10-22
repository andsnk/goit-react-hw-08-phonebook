import { Button, TextField, Box } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operation';
// import { Button } from '@mui/material';

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
    <div className="container">
      {/* <form onSubmit={handleSubmit} autoComplete="off"> */}
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
          Log In
        </Button>
      </Box>
      {/* </form> */}
    </div>
  );
}
export default Login;
