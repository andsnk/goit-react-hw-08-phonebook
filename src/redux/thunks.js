import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContactsApi, addContactApi, deleteContactApi } from 'api/api';
import { setAuthHeader } from './auth/operation';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      setAuthHeader(token);
      const data = await getContactsApi();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await addContactApi(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const data = await deleteContactApi(contactId);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
