import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { initialize, submit } from 'redux-form';

import { SLIDES_FETCHED, SLIDE_FETCHED, SLIDE_DELETED } from './SliderActionsTypes';

const BASE_URL = 'http://localhost:3003/api/slides';

export function getSlides() {
  const request = axios.get(BASE_URL);
  
  return {  
    type: SLIDES_FETCHED,
    payload: request
  };
}

export function loadForm(id) {
  return dispatch => {
    axios.get(`${BASE_URL}/${id}`)
      .then((resp) => { 
        dispatch(initialize('slide-form', resp.data));
      })
      .catch(() => toastr.error('Erro', 'Falha ao carregar o slide!'));
  };
}

export function submitForm() {
  return submit('slide-form');
}

export function create(values) {
  return request(values, 'post');
}

export function update(values) {
  return request(values, 'put');
}

export function remove(id) {
  return dispatch => {
    axios.delete(`${BASE_URL}/${id}`)
      .then(() => { 
        toastr.success('Sucesso', 'Slide removido com sucesso!');
        dispatch({ type: SLIDE_DELETED, payload: id });
      })
      .catch(() => toastr.error('Erro', 'Falha ao remover slide!'));
  };
}

function request(values, method) {
  return dispatch => {
    const id = values._id ? values._id : '';
    const type = id ? 'atualizado' : 'criado';
    axios[method](`${BASE_URL}/${id}`, values)
    .then(resp => {
      toastr.success('Sucesso', `Slide ${type} com sucesso!`);
      dispatch(getSlides());
    })
    .catch(() => toastr.error('Erro', `Falha ao salvar slide!`));
  };
}
