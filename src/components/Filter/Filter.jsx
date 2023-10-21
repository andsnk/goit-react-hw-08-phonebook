import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <label className={css.label} htmlFor="search">
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
      />
    </div>
  );
};

export default Filter;
