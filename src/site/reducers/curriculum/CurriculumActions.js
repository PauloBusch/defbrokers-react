import axios from 'axios';
import { submit, reset } from 'redux-form';
import { toastr } from 'react-redux-toastr';
import { CURRICULUM_LOADED, CURRICULUM_LOADING } from './CurriculumActionsTypes';
import { API_HOST, WEBSITE_NAME, WEBSITE_URL } from '../../../consts';

const OAPI_URL = `${API_HOST}/oapi/curriculum`;

export function submitForm() {
  return submit('immobile-form');
}

export function sendCurriculum() {
  const form = document.getElementById('form-work');
  const formData = new FormData(form);

  formData.append('websiteName', WEBSITE_NAME);
  formData.append('websiteUrl', WEBSITE_URL);

  return dispatch => {
    dispatch({ type: CURRICULUM_LOADING });

    axios({
      method: 'post',
      url: OAPI_URL,
      data: formData,    
      headers: { 'Content-Type': `multipart/form-data; boundary=${formData._boundary}` }
    }).then(() => {
        dispatch({ type: CURRICULUM_LOADED });
        toastr.success('Sucesso', `Currículo enviado com sucesso!`);
        dispatch(reset('form-work'));
      })
      .catch(() => { 
        dispatch({ type: CURRICULUM_LOADED });
        toastr.error('Erro', `Falha ao enviar currículo!`); 
      });
  };
}
