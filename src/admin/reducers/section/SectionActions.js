import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { SECTION_OPTION_FETCHED } from './SectionActionsTypes';
import { API_HOST } from './../../../consts';

const OAPI_URL = `${API_HOST}/oapi/immobiles/sections`;

export function getList() {
  const request = axios.get(OAPI_URL);
  return { 
    type: SECTION_OPTION_FETCHED,
    payload: request
  };
}
