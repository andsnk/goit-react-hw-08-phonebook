import axios from 'axios';

export const getContactsApi = async () => {
  const { data } = await axios.get('contacts');
  return data;
};

export const addContactApi = async contact => {
  const { data } = await axios.post('contacts', contact);
  return data;
};

export const deleteContactApi = async contactId => {
  const { data } = await axios.delete(`contacts/${contactId}`);
  return data;
};
