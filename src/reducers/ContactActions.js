import axios from 'axios';
import { CONTACT_FETCHED } from './ContactActionsTypes';

const BASE_URL = 'http://localhost:3003/api/contact/602da0bfa365f8621842205a';

export function getContact() {
  const request = axios.get(BASE_URL);
  return { 
    type: CONTACT_FETCHED,
    payload: request
  };
}
