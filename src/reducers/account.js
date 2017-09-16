import { ADD_ACCOUNT } from '../actions';

const initialState = {
  isAuthenticated: false,
  account: {}
};

export default function account(state=initialState, action = {}) {
  switch(action.type){
    case ADD_ACCOUNT:
      return {
        isAuthenticated: true,
        account: action.account
      }
    default: return state;
  }
}