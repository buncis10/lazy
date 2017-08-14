import { SET_MATERIS } from '../actions';

export default function materis(state = [], action = {}) {
  switch(action.type) {
    case SET_MATERIS:
      return action.materis;
    default: return state;
  }
}
