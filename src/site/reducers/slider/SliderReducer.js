import { SLIDER_FETCHED } from './SliderActionsTypes';

const INITIAL_STATE = {
  timeTransition: 10000,
  slides: []
};

export default function SliderReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SLIDER_FETCHED:
      return { ...state, slides: mapSlides(action.payload.data) };
    default: 
      return state;
  }
}

function mapSlides(slides) {
  return slides.map(slide => ({
    image: slide.image,
    position: `${slide.positionY} ${slide.positionX}`
  }));
}
