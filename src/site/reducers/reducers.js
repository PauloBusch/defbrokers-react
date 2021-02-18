import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ContactReducer from './contact/ContactReducer';
import SliderReducer from './slider/SliderReducer';
import SectionsReducer from './immobile/ImmobileReducer';

const rootReducer = combineReducers({
  contact: ContactReducer,
  sections: SectionsReducer,
  slider: SliderReducer,
  form: formReducer
});

export default rootReducer;
