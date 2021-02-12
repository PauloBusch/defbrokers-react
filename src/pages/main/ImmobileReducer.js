import { IMMOBILE_SEARCHED } from './ImmobileActionsTypes';
import { INITIAL_STATE } from './ImmobileData';

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case IMMOBILE_SEARCHED: 
      const filtred = [];
      for (const section of INITIAL_STATE) {
        const cards = filterCards(section.cards, action.payload);
        if (cards.length === 0) continue;
        const cloneSection = Object.assign(new Object(), section);
        cloneSection.cards = cards;
        filtred.push(cloneSection);
      }
      return filtred;
    default: 
      return state;
  }
}

function filterCards(cards, filter) {
  return cards.filter(card => {
    return card.type.toLowerCase() === filter.type 
      && (!filter.startValue || card.price >= filter.startValue)
      && (!filter.endValue || card.price <= filter.endValue);
  });
}
