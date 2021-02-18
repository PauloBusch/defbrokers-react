import { combineReducers } from 'redux';

const rootReducer = combineReducers({ 
  default: (state = { }, action) => state
});

export default rootReducer;
