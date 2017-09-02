import { SET_LINK } from '../actions';

export default function link(state = [], action = {}) {
  switch(action.type) {
    case SET_LINK:
      return action.link;
    default: return state;
  }
}
