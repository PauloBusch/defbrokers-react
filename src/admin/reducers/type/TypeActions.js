import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { TYPES_FETCHED } from './TypeActionsTypes';

const OAPI_URL = 'http://localhost:3003/oapi/immobiles/types';

export function getTypes() {
  const request = axios.get(OAPI_URL);
  return { 
    type: TYPES_FETCHED,
    payload: request
  };
}
