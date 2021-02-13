import { 
  IMMOBILE_SEARCHED
} from './ImmobileActionsTypes';

export function search(filter) {
  const startValue = filter.startValue ? parseInt(filter.startValue) : null;
  const endValue = filter.endValue ? parseInt(filter.endValue) : null;
  return {
    type: IMMOBILE_SEARCHED,
    payload: { type: filter.type, startValue, endValue }
  };
}
