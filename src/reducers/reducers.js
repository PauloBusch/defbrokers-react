import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';


import ContactReducer from './contact/ContactReducer';
import SliderReducer from '../site/reducers/slider/SliderReducer';
import SectionsReducer from '../site/reducers/section/SectionReducer';
import ImmobileReducer from '../admin/reducers/immobile/ImmobileReducer';

const rootReducer = combineReducers({
  contact: ContactReducer,
  sections: SectionsReducer,
  immobiles: ImmobileReducer,
  slider: SliderReducer,
  toastr: toastrReducer,
  form: formReducer
});

export default rootReducer;
