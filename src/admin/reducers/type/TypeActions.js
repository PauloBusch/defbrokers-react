import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { TYPES_FETCHED } from './TypeActionsTypes';
import { API_HOST } from './../../../consts';

const OAPI_URL = `${API_HOST}/oapi/immobiles/types`;

export function getTypes() {
  const request = axios.get(OAPI_URL);
  return { 
    type: TYPES_FETCHED,
    payload: request
  };
}
