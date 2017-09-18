import { SET_CONVERSATIONS } from '../actions';

const initialState = {
  isLoading: true,
  conversations: {}
};

export default function conversations(state = initialState, action = {}) {
  switch(action.type) {
    case SET_CONVERSATIONS:
      return {
        conversations: action.conversations,
        isLoading: false,
      } 
    default: return state;
  }
}
