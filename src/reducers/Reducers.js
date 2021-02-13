import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ContactReducer from './ContactReducer';
import SliderReducer from './SliderReducer';
import SectionsReducer from '../pages/ImmobileReducer';

const rootReducer = combineReducers({
  contact: ContactReducer,
  sections: SectionsReducer,
  slider: SliderReducer,
  form: formReducer
});

export default rootReducer;
