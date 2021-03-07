import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { 
  IMMOBILE_FETCHED, 
  IMMOBILE_DELETED 
} from './ImmobileActionsTypes';

const BASE_URL = 'http://localhost:3003/api/immobiles';

export function getList() {
  const request = axios.get(BASE_URL);
  return { 
    type: IMMOBILE_FETCHED,
    payload: request
  };
}

export function remove(id) {
  return dispatch => {
    axios.delete(`${BASE_URL}/${id}`)
      .then(() => { 
        toastr.success('Sucesso', 'Imóvel removido com sucesso!');
        dispatch({ type: IMMOBILE_DELETED, payload: id });
      })
      .catch(() => toastr.error('Erro', 'Falha ao remover imóvel!'));
  };
}
