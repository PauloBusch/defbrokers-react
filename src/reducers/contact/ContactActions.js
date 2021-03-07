import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { submit } from 'redux-form';

import { CONTACT_FETCHED, CONTACT_UPDATED } from './ContactActionsTypes';

const BASE_URL = 'http://localhost:3003/api/contact/602da0bfa365f8621842205a';

export function getContact() {
  const request = axios.get(BASE_URL);
  return { 
    type: CONTACT_FETCHED,
    payload: request
  };
}

export function submitForm() {
  return submit('contact-form');
}

export function update(values) {
  const request = axios.put(BASE_URL, values)
    .then(resp => { 
      toastr.success('Sucesso', 'Contato atualizado com sucesso!');
      return resp;
    })
    .catch(() => toastr.success('Erro', 'Falha ao atualizar contato!'));
  return {
    type: CONTACT_UPDATED,
    payload: request
  };
}
