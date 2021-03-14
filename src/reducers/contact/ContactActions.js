import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { submit, initialize } from 'redux-form';

import { CONTACT_FETCHED, CONTACT_UPDATED } from './ContactActionsTypes';

const OAPI_URL = 'http://localhost:3003/oapi/contact/602da0bfa365f8621842205a';
const API_URL = 'http://localhost:3003/api/contact/602da0bfa365f8621842205a';

export function getContact() {
  const request = axios.get(OAPI_URL);
  return { 
    type: CONTACT_FETCHED,
    payload: request
  };
}

export function loadForm() {
  return dispatch => {
    axios.get(API_URL)
      .then((resp) => { 
        dispatch(initialize('contact-form', resp.data));
      })
      .catch(() => toastr.error('Erro', 'Falha ao carregar o contato!'));
  };
}

export function submitForm() {
  return submit('contact-form');
}

export function update(values) {
  const request = axios.put(API_URL, values)
    .then(resp => { 
      toastr.success('Sucesso', 'Contato atualizado com sucesso!');
      return resp;
    })
    .catch(() => toastr.error('Erro', 'Falha ao atualizar contato!'));
  return {
    type: CONTACT_UPDATED,
    payload: request
  };
}
