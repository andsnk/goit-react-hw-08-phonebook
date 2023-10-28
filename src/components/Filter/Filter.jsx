import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import TextField from '@mui/material/TextField';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <TextField
        onChange={e => {
          dispatch(filterContacts(e.target.value));
        }}
        type="search"
        name="name"
        id="search"
        label="Find contacts by name"
        variant="standard"
      />
    </div>
  );
};

export default Filter;
