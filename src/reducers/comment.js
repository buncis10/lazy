import { SET_COMMENT } from '../actions';

export default function comments(state = [], action = {}) {
  switch(action.type) {
    case SET_COMMENT:
      return action.comment;
    default: return state;
  }
}
