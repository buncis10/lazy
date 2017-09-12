import { SET_MESSAGES, ADD_MESSAGE, MESSAGE_FETCHED, MESSAGE_UPDATED, MESSAGE_DELETED } from '../actions';

export default function messages(state = [], action = {}) {
  switch(action.type) {
    case ADD_MESSAGE:
      return [
        action.message,
        ...state
      ];

    case MESSAGE_DELETED:
      return state.filter(item => item._id !== action.messageId);

    case MESSAGE_UPDATED:
      return state.map(item => {
        if (item._id === action.message._id) return action.message;
        return item;
      });

    case MESSAGE_FETCHED:
      const index = state.findIndex(item => item._id === action.message._id);
      if (index > -1) {
        return state.map(item => {
          if (item._id === action.message._id) return action.message;
          return item;
        });
      } else {
        return [
          ...state,
          action.message
        ];
      }

    case SET_MESSAGES:
      return action.messages;
    default: return state;
  }
}
