import { SET_VIDEOS } from '../actions';

export default function videos(state = [], action = {}) {
  switch(action.type) {
    case SET_VIDEOS:
      return action.videos;
    default: return state;
  }
}
