import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedValue = filter.toLowerCase().trim();
    return contacts.filter(contact => {
      return contact.name
        .concat(contact.name)
        .toLowerCase()
        .includes(normalizedValue);
    });
  }
);
