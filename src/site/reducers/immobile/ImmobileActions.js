import axios from 'axios';
import { 
  IMMOBILE_SEARCHED,
  IMMOBILE_FETCHED
} from './ImmobileActionsTypes';

const BASE_URL = 'http://localhost:3003/api/immobiles';

export function getList() {
  const request = axios.get(BASE_URL);
  return { 
    type: IMMOBILE_FETCHED,
    payload: request
  };
}

export function search(filter) {
  const params = [];
  if (filter.startValue) params.push(`price__gte=${filter.startValue}`);
  if (filter.endValue) params.push(`price__lte=${filter.endValue}`);
  if (filter.type) params.push(`operation__equals=${filter.type}`);
  const request = axios.get(`${BASE_URL}?${params.join('&')}`);
  return {
    type: IMMOBILE_SEARCHED,
    payload: request
  };
}
