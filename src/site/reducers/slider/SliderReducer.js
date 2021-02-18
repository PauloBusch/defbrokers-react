import { SLIDER_FETCHED } from './SliderActionsTypes';

const INITIAL_STATE = {
  timeTransition: 10000,
  slides: []
};

export default function SliderReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SLIDER_FETCHED:
      return { ...state, slides: action.payload.data };
    default: 
      return state;
  }
}
