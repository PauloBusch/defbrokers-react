import axios from 'axios';
import { 
  SECTION_SEARCHED,
  SECTION_FETCHED
} from './SectionActionsTypes';

const BASE_URL = 'http://localhost:3003/api/immobiles';

export function getList() {
  const request = axios.get(BASE_URL);
  return { 
    type: SECTION_FETCHED,
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
    type: SECTION_SEARCHED,
    payload: request
  };
}
