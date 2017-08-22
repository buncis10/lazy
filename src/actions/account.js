import { API_URL } from '../constants/api';
export const ADD_ACCOUNT = 'ADD_ACCOUNT';

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

// REGISTER/LOGIN ACTION

export function setAccount(account) {
  return {
    type: ADD_ACCOUNT,
    account
  }
}

export function saveAccount(data) {
  return dispatch => {
    return fetch (`${API_URL}/users`, {
      method: 'post',
      body: JSON.stringify({"user":data}),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(setAccount(data)))
    .catch(error => {
			console.log('Save Account', error); //eslint-disable-line
		});
  }
}

export function loginAccount(data) {
  return dispatch => {
    return fetch (`${API_URL}/login`, {
      method: 'post',
      body: JSON.stringify({"user":data}),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(setAccount(data)))
    .catch(error => {
			console.log('Save Account', error); //eslint-disable-line
		});
  }
}