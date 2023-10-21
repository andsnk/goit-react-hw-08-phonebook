import axios from 'axios';
axios.defaults.baseURL = 'https://652baac7d0d1df5273ee9655.mockapi.io/';

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
