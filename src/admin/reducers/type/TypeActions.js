import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { TYPES_FETCHED } from './TypeActionsTypes';

const BASE_URL = 'http://localhost:3003/api/immobiles/types';

export function getTypes() {
  const request = axios.get(BASE_URL);
  return { 
    type: TYPES_FETCHED,
    payload: request
  };
}
