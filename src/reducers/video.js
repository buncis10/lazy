import { SET_VIDEO } from '../actions';

export default function video(state = [], action = {}) {
  switch(action.type) {
    case SET_VIDEO:
      return action.video;
    default: return state;
  }
}
