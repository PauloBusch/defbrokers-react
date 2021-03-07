import { CONTACT_FETCHED, CONTACT_UPDATED } from './ContactActionsTypes';
const INITIAL_STATE = {
  name: null,
  whatsapp: null,
  email: null
};

export default function ContactReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CONTACT_FETCHED: 
    case CONTACT_UPDATED: 
      return action.payload.data;
    default: 
      return state;
  } 
}
