import { SET_LINKS } from '../actions';

export default function links(state = [], action = {}) {
  switch(action.type) {
    case SET_LINKS:
      return action.links;
    default: return state;
  }
}
