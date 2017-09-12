export const SET_MESSAGES = 'SET_MESSAGES';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const MESSAGE_FETCHED = 'MESSAGE_FETCHED';
export const MESSAGE_UPDATED = 'MESSAGE_UPDATED';
export const MESSAGE_DELETED = 'MESSAGE_DELETED';

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function setMessages(messages) {
  return {
    type: SET_MESSAGES,
    messages
  }
}

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    message
  }
}

export function messageFetched(message) {
  return {
    type: MESSAGE_FETCHED,
    message
  }
}

export function messageUpdated(message) {
  return {
    type: MESSAGE_UPDATED,
    message
  }
}

export function messageDeleted(messageId) {
  return {
    type: MESSAGE_DELETED,
    messageId
  }
}

export function saveMessage(data) {
  return dispatch => {
    return fetch('http://192.168.0.19:3000/conversations/2/messages', {
      method: 'POST',
      body: JSON.stringify({"message":{"body":data}}),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-user-email": "user@user.com",
        "X-user-token": "BmvMcdLNyv1XsRgMb7dw"
      }
    }).then(handleResponse)
    .then(data => dispatch(addMessage(data)));
  }
}

export function updateMessage(data) {
  return dispatch => {
    return fetch(`/api/messages/${data._id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(messageUpdated(data.message)));
  }
}

export function deleteMessage(id) {
  return dispatch => {
    return fetch(`/api/messages/${id}`, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(messageDeleted(id)));
  }
}

export function fetchMessages() {
  return dispatch => {
    fetch('http://192.168.0.19:3000/conversations/2', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-user-email": "user@user.com",
        "X-user-token": "BmvMcdLNyv1XsRgMb7dw"
      }
    })
      .then(res => res.json())
      .then(data => dispatch(setMessages(data.messages)));
  }
}

export function fetchMessage(id) {
  return dispatch => {
    fetch(`/api/messages/${id}`)
      .then(res => res.json())
      .then(data => dispatch(messageFetched(data.message)));
  }
}
