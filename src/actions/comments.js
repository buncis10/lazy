import { API_URL } from '../constants/api';
export const SET_COMMENTS = 'SET_COMMENTS';
export const SET_COMMENT = 'SET_COMMENT';

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

export function setComments(comments) {
  return {
    type: SET_COMMENTS,
    comments
  }
}

export function fetchComments(kelas_id) {
  return dispatch => {  
    fetch(`${API_URL}/kelases/${kelas_id}/comments`, {
      headers: {
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => dispatch(setComments(data)));
  }
}

// CREATE

export function saveComment(kelas_id,data) {
  return (dispatch, getState) => {
    const akun = getState().account
    return fetch (`${API_URL}/kelases/${kelas_id}/comments`, {
      method: 'post',
      body: JSON.stringify({"comment":data}),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-user-email": akun.email,
        "X-user-token": akun.authentication_token
      }
    }).then(handleResponse)
    // .then(data => dispatch(setAccount(data)))
    .catch(error => {
			console.log('Save Comment', error); //eslint-disable-line
		});
  }
}

// DELETE

export function deleteComment(kelas_id,id) {
  return (dispatch, getState) => {
    const akun = getState().account
    return fetch (`${API_URL}/kelases/${kelas_id}/comments/${id}`, {
      method: 'delete',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-user-email": akun.email,
        "X-user-token": akun.authentication_token
      }
    }).then(handleResponse)
    .catch(error => {
			console.log('Delete Comment', error); //eslint-disable-line
		});
  }
}


// READ

export function setComment(kelas) {
  return {
    type: SET_KELAS,
    kelas
  }
}

export function fetchComment(kelas_id,id) {
  return dispatch => {
    fetch(`${API_URL}/kelases/${kelas_id}/comments/${id}`, {
      headers: {
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => dispatch(setKelas(data)));
  }
}

// UPDATE

export function updateComment(kelas_id,id,data) {
  return (dispatch, getState) => {
    const akun = getState().account
    return fetch (`${API_URL}/kelases/${kelas_id}/comments/${id}`, {
      method: 'patch',
      body: JSON.stringify({"kelas":data}),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-user-email": akun.email,
        "X-user-token": akun.authentication_token
      }
    }).then(handleResponse)
    // .then(data => dispatch(setAccount(data)))
    .catch(error => {
			console.log('Update Account', error); //eslint-disable-line
		});
  }
}

