import { TYPES_FETCHED } from './TypeActionsTypes';

export default function (state = [], action) {
  switch(action.type) {
    case TYPES_FETCHED: 
      return action.payload.data;
    default: 
      return state;
  }
}
