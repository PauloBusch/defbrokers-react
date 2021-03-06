import { initialize } from 'redux-form';
import { CONTACT_FETCHED } from './ContactActionsTypes';
const INITIAL_STATE = {
  name: null,
  whatsapp: null,
  email: null
};

export default function ContactReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CONTACT_FETCHED: 
      return action.payload.data;
    default: 
      return state;
  } 
}
