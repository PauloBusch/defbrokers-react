import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { SECTION_OPTION_FETCHED } from './SectionActionsTypes';

const BASE_URL = 'http://localhost:3003/api/immobiles/sections';

export function getList() {
  const request = axios.get(BASE_URL);
  return { 
    type: SECTION_OPTION_FETCHED,
    payload: request
  };
}
