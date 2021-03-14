import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { SECTION_OPTION_FETCHED } from './SectionActionsTypes';

const OAPI_URL = 'http://localhost:3003/oapi/immobiles/sections';

export function getList() {
  const request = axios.get(OAPI_URL);
  return { 
    type: SECTION_OPTION_FETCHED,
    payload: request
  };
}
