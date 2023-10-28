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
        // label="Search"
        id="search"
        label="Find contacts by name"
        variant="standard"
      />

      {/* <label className={css.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={css.input}
        onChange={e => {
          dispatch(filterContacts(e.target.value));
        }}
        type="text"
        name="name"
        label="Search"
        id="search"
      /> */}
    </div>
  );
};

export default Filter;
