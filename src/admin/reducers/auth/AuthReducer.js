import { USER_FETCHED, TOKEN_VALIDATED } from './AuthActionTypes';

const userKey = 'application-user';
const INITIAL_STATE = {
  user: getLocalUser(),
  validToken: false
};

function getLocalUser() {
  const localUser = localStorage.getItem(userKey);
  if (!localUser) return null;
  return JSON.parse(localUser);
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOKEN_VALIDATED:
      if(action.payload) return { ...state, validToken: true };
      localStorage.removeItem(userKey);
      return { ...state, validToken: false, user: null };
    case USER_FETCHED:
      localStorage.setItem(userKey, JSON.stringify(action.payload));
      return { ...state, user: action.payload, validToken: true };
    default:
      return state;
  }
}
