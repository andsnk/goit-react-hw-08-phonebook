import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import css from './ContactForm.module.css';
import { addContact } from 'redux/thunks';
import { selectContacts } from 'redux/selectors';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import toast from 'react-hot-toast';
Notiflix.Notify.init({
  width: '280px',
  position: 'top',
  distance: '30px',
  opacity: 1,
});

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicate) {
      toast.error(`${name} is already in your contacts.`);
      setName('');
      setNumber('');
      return;
    }
    dispatch(addContact({ name, number }))
      .unwrap()
      .then(() => toast.success(`${name} added to your contacts.`))
      .catch(() => toast.error('Error'));
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          id="name"
          type="text"
          name="name"
          value={name}
          inputProps={{
            pattern:
              "^[a-zA-Zа-яА-Я]+((['\\- ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
            title:
              "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
          }}
          required
          label="Name"
          variant="standard"
        />
        <TextField
          onChange={handleChange}
          id="number"
          type="tel"
          name="number"
          value={number}
          inputProps={{
            pattern:
              '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}',
            title:
              'Phone number must consist of digits and can contain spaces, dashes, parentheses, and may start with +',
          }}
          required
          label="Number"
          variant="standard"
        />

        <Button sx={{ mt: '20px' }} type="submit" variant="contained">
          Add contact
        </Button>
        {/* <label className={css.label} htmlFor="name">
          Name
        </label>
        <input
          className={css.input}
          onChange={handleChange}
          id="name"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.label} htmlFor="number">
          Number
        </label>
        <input
          className={css.input}
          onChange={handleChange}
          id="number"
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.addBtn} type="submit">
          Add contact
        </button> */}
      </form>
    </div>
  );
};

export default ContactForm;
