import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchAllContacts } from 'redux/thunks';
import {
  selectIsLoading,
  selectContacts,
  selectFilteredContacts,
  selectError,
} from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilteredContacts);
  const filteredContacts = filter ? filter : contacts;

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <>
      {error && <p className={css.errorMessage}>error: {error}</p>}
      <div className={`${isLoading ? css.loader : css.noneLoader}`}></div>
      <ul className={`${css.list} ${isLoading && css.blurred}`}>
        {filteredContacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <span className={css.name}>{contact.name}:</span>
            <a href={`tel:${contact.number}`} className={css.number}>
              {contact.number}
            </a>
            <button
              className={css.deleteBtn}
              onClick={() => {
                dispatch(deleteContact(contact.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;
