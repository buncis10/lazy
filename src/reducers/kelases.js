import { SET_KELASES } from '../actions';

export default function kelases(state = [], action = {}) {
  switch(action.type) {
    case SET_KELASES:
      return {
        kelases: action.kelases,
        isLoading: false,
      }      
    default: return state;
  }
}
