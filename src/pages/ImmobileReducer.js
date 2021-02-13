import { 
  IMMOBILE_SEARCHED
} from './ImmobileActionsTypes';
import { INITIAL_STATE } from './ImmobileData';

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case IMMOBILE_SEARCHED: 
      const filtred = [];
      for (const section of INITIAL_STATE) {
        const immobiles = filterImmobiles(section.immobiles, action.payload);
        if (immobiles.length === 0) continue;
        const cloneSection = Object.assign(new Object(), section);
        cloneSection.immobiles = immobiles;
        filtred.push(cloneSection);
      }
      return filtred;
    default: 
      return state;
  }
}

function filterImmobiles(immobiles, filter) {
  return immobiles.filter(card => {
    return card.type.toLowerCase() === filter.type 
      && (!filter.startValue || card.price >= filter.startValue)
      && (!filter.endValue || card.price <= filter.endValue);
  });
}
