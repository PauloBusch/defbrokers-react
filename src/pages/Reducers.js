import { combineReducers } from 'redux';

const INITIAL_STATE = {
  whatsapp: '(62) 99253-7258',
  email: 'contato@defbrokers.com.br'
};

const rootReducer = combineReducers({
  contact: (state = INITIAL_STATE) => state
});

export default rootReducer;
