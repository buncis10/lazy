import { SET_KELAS } from '../actions';

export default function games(state = [], action = {}) {
  switch(action.type) {
    case SET_KELAS:
      return action.kelas;
    default: return state;
  }
}
