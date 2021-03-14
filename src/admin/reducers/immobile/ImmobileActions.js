import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { initialize, submit } from 'redux-form';
import { IMMOBILE_FETCHED, IMMOBILE_DELETED } from './ImmobileActionsTypes';

const API_URL = 'http://localhost:3003/api/immobiles';
const OAPI_URL = 'http://localhost:3003/oapi/immobiles';

export function getList() {
  const request = axios.get(OAPI_URL);
  return { 
    type: IMMOBILE_FETCHED,
    payload: request
  };
}

export function loadForm(id) {
  return dispatch => {
    axios.get(`${API_URL}/${id}`)
      .then((resp) => { 
        dispatch(initialize('immobile-form', resp.data));
      })
      .catch(() => toastr.error('Erro', 'Falha ao carregar o imóvel!'));
  };
}

export function submitForm() {
  return submit('immobile-form');
}

export function create(values) {
  return request(values, 'post');
}

export function update(values) {
  return request(values, 'put');
}

export function remove(id) {
  return dispatch => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => { 
        toastr.success('Sucesso', 'Imóvel removido com sucesso!');
        dispatch({ type: IMMOBILE_DELETED, payload: id });
      })
      .catch(() => toastr.error('Erro', 'Falha ao remover imóvel!'));
  };
}

function request(values, method) {
  return dispatch => {
    const id = values._id ? values._id : '';
    const type = id ? 'atualizado' : 'criado';
    axios[method](`${API_URL}/${id}`, values)
    .then(resp => {
      toastr.success('Sucesso', `Imóvel ${type} com sucesso!`);
      dispatch(getList());
    })
    .catch(() => toastr.error('Erro', `Falha ao salvar imóvel!`));
  };
}
