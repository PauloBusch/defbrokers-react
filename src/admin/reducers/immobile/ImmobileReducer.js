import { IMMOBILE_FETCHED, IMMOBILE_DELETED } from './ImmobileActionsTypes';

export default function (state = [], action) {
  switch(action.type) {
    case IMMOBILE_FETCHED: 
      return action.payload.data;
    case IMMOBILE_DELETED:
      return state.filter(i => i._id !== action.payload);
    default: 
      return state;
  }
}
