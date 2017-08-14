import { SET_COMMENTS } from '../actions';

export default function comments(state = [], action = {}) {
  switch(action.type) {
    case SET_COMMENTS:
      return action.comments;
    default: return state;
  }
}
