import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ContactReducer from './contact/ContactReducer';
import SliderReducer from '../site/reducers/slider/SliderReducer';
import SectionsReducer from '../site/reducers/immobile/ImmobileReducer';

const rootReducer = combineReducers({
  contact: ContactReducer,
  sections: SectionsReducer,
  slider: SliderReducer,
  form: formReducer
});

export default rootReducer;
