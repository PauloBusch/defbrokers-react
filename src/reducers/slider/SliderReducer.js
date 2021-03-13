import { SLIDE_FETCHED, SLIDE_DELETED } from './SliderActionsTypes';

const INITIAL_STATE = {
  timeTransition: 10000,
  slides: []
};

export default function SliderReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SLIDE_FETCHED: 
      return { ...state, slides: action.payload.data };
    case SLIDE_DELETED:
      return { ...state, slides: state.slides.filter(i => i._id !== action.payload) };
    default: 
      return state;
  }
}
