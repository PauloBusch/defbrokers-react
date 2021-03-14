import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';


import ContactReducer from './contact/ContactReducer';
import SliderReducer from './slider/SliderReducer';
import SectionsReducer from '../site/reducers/section/SectionReducer';
import ImmobileReducer from '../admin/reducers/immobile/ImmobileReducer';
import StateReducer from './state/StateReducer';
import OperationReducer from './operation/OperationReducer';
import SectionReducer from '../admin/reducers/section/SectionReducer';
import TypeReducer from '../admin/reducers/type/TypeReducer';

const rootReducer = combineReducers({
  types: TypeReducer,
  state: StateReducer,
  contact: ContactReducer,
  section: SectionReducer,
  operations: OperationReducer,
  sections: SectionsReducer,
  immobiles: ImmobileReducer,
  slider: SliderReducer,
  toastr: toastrReducer,
  form: formReducer
});

export default rootReducer;
