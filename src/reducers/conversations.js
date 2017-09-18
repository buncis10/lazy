import { SET_CONVERSATIONS } from '../actions';

export default function conversations(state = [], action = {}) {
  switch(action.type) {
    case SET_CONVERSATIONS:
      return action.conversations;
    default: return state;
  }
}
