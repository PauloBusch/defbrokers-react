import axios from 'axios';

import { SLIDER_FETCHED } from './SliderActionsTypes';

const BASE_URL = 'http://localhost:3003/api/slides';

export function getSlides() {
  const request = axios.get(BASE_URL);
  
  return {  
    type: SLIDER_FETCHED,
    payload: request
  };
}
