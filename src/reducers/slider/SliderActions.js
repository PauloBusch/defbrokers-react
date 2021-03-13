import axios from 'axios';
import { toastr } from 'react-redux-toastr';

import { SLIDE_FETCHED, SLIDE_DELETED } from './SliderActionsTypes';

const BASE_URL = 'http://localhost:3003/api/slides';

export function getSlides() {
  const request = axios.get(BASE_URL);
  
  return {  
    type: SLIDE_FETCHED,
    payload: request
  };
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
