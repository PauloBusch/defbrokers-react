const INITIAL_STATE = {
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

export default function SliderReducer(state = INITIAL_STATE, action) {
  return state;
}
