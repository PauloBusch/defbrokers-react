import { toastr } from 'react-redux-toastr';
import axios from 'axios';

import { USER_FETCHED, TOKEN_VALIDATED } from './AuthActionTypes';
import { API_HOST } from './../../../consts';

const OAPI_URL = `${API_HOST}/oapi`;

export function login(values) {
  return dispatch => {
    axios.post(`${OAPI_URL}/login`, values)
      .then(resp => {
        dispatch({ type: USER_FETCHED, payload: resp.data });
      })
      .catch(e => {
        e.response.data.errors.forEach(
        error => toastr.error('Erro', error))
      });
  }
}

export function logout() {
  return { type: TOKEN_VALIDATED, payload: false };
}

export function validateToken(token) {
  return dispatch => {
    if(token) {
      axios.post(`${OAPI_URL}/validate-token`, {token})
        .then(resp => {
          dispatch({ type: TOKEN_VALIDATED, payload: resp.data.valid })
        })
        .catch(e => dispatch({ type: TOKEN_VALIDATED, payload: false }))
      return;
    }
    dispatch({ type: TOKEN_VALIDATED, payload: false })
  }
}
