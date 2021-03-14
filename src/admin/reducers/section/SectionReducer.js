import { SECTION_OPTION_FETCHED } from './SectionActionsTypes';

export default function (state = [], action) {
  switch(action.type) {
    case SECTION_OPTION_FETCHED: 
      return action.payload.data;
    default: 
      return state;
  }
}
