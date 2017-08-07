import { SET_KELASES } from '../actions';

export default function games(state = [], action = {}) {
  switch(action.type) {
    case SET_KELASES:
      return action.kelases;
    default: return state;
  }
}
