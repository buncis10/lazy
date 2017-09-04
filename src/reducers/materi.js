import { SET_MATERI } from '../actions';

export default function materi(state = [], action = {}) {
  switch(action.type) {
    case SET_MATERI:
      return action.materi;
    default: return state;
  }
}
