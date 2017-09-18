import { API_URL } from '../constants/api';
export const SET_CONVERSATIONS = 'SET_CONVERSATIONS';

function handleResponse(response) {
  if (response.status === 204){
    return {};
  } else if (response.ok) {
    return response.json()
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

// CRUD KELAS ACTION
// INDEX

export function setConversations(conversations) {
  return {
    type: SET_CONVERSATIONS,
    conversations
  }
}

export function fetchConversations() {
  return (dispatch, getState) => {
    const akun = getState().account.account 
    return fetch(`${API_URL}/conversations`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-user-email": akun.email,
        "X-user-token": akun.authentication_token
      }
    })
      .then(res => res.json())
      .then(data => dispatch(setConversations(data)))
      .catch(error => {
        console.log('fetch error', error); //eslint-disable-line
      });
  }
}