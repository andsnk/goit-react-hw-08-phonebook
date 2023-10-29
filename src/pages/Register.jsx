import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/operation';
import { Button, TextField, Box } from '@mui/material';
// import css from './Register.module.css';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const userData = {
      name: name.value,
      password: password.value,
      email: email.value,
    };

    dispatch(registration(userData))
      .unwrap()
      .then(() => toast.success('Welcome'))
      .catch(() => toast.error('Login failed. Please check your credentials.'));
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
          alignItems: 'center',
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
        <Input
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          label="Password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <Button variant="contained" type="submit">
          Register
        </Button>
      </Box>
      <p>
        Or <NavLink to="/login">Login</NavLink>
      </p>
    </div>
  );
}

export default Register;
