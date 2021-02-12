import { combineReducers } from 'redux';

const INITIAL_CONTACT_STATE = {
  name: 'A DEF Brokers',
  whatsapp: '(62) 99253-7258',
  email: 'contato@defbrokers.com.br'
};

const INITIAL_SLIDER_STATE = {
  timeTransition: 10000,
  slides: [
    {
      image: 'images/slides/slide1.webp',
      position: 'center left'
    },
    {
      image: 'images/slides/slide2.webp',
      position: 'center right'
    },
    {
      image: 'images/slides/slide3.webp',
      position: 'center right'
    }
  ]
};

const rootReducer = combineReducers({
  contact: (state = INITIAL_CONTACT_STATE) => state,
  slider: (state = INITIAL_SLIDER_STATE) => state
});

export default rootReducer;
