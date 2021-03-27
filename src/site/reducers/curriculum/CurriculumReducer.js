import { CURRICULUM_LOADED, CURRICULUM_LOADING } from './CurriculumActionsTypes';

export default function (state = { loading: false }, action) {
  switch(action.type) {
    case CURRICULUM_LOADING:
      return { ...state, loading: true };
    case CURRICULUM_LOADED:
      return { ...state, loading: false };
    default: 
      return state;
  }
}
