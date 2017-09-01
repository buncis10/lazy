import { API_URL } from '../constants/api';
export const SET_LINKS = 'SET_LINKS';

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

// CRUD LINK ACTION
// INDEX

export function setLinks(links) {
  return {
    type: SET_LINKS,
    links
  }
}

export function fetchLinks(kelas_id) {
  return dispatch => {
    fetch(`${API_URL}/kelases/${kelas_id}/links`, {
      headers: {
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => dispatch(setLinks(data)));
  }
}


// CREATE

export function saveLink(kelas_id,data) {
  return (dispatch, getState) => {
    const akun = getState().account
    return fetch (`${API_URL}/kelases/${kelas_id}/links`, {
      method: 'post',
      body: JSON.stringify({"link":data}),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-user-email": "user@user.com",
        "X-user-token": "aSyK2_5aS-kwv8yamy4_"
      }
    }).then(handleResponse)
    .catch(error => {
			console.log('Save Link', error); //eslint-disable-line
		});
  }
}

// DELETE

export function deleteLink(kelas_id,id) {
  return (dispatch, getState) => {
    const akun = getState().account
    return fetch (`${API_URL}/kelases/${kelas_id}/links/${id}`, {
      method: 'delete',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-user-email": "developer@user.com",
        "X-user-token": "tDdvkDdbDfJPMhTvTL7s"
      }
    }).then(handleResponse)
    .catch(error => {
			console.log('Delete Link', error); //eslint-disable-line
		});
  }
}

// READ

export function setLink(link) {
  return {
    type: SET_LINK,
    link
  }
}

export function fetchLink(kelas_id,id) {
  return dispatch => {
    fetch(`${API_URL}/kelases/${kelas_id}/links/${id}`, {
      headers: {
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => dispatch(setLink(data)));
  }
}


// UPDATE

export function updateLink(kelas_id,id,data) {
  return (dispatch, getState) => {
    const akun = getState().account
    return fetch (`${API_URL}/kelases/${kelas_id}/links/${id}`, {
      method: 'patch',
      body: JSON.stringify({"kelas":data}),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-user-email": "developer@user.com",
        "X-user-token": "tDdvkDdbDfJPMhTvTL7s"
      }
    }).then(handleResponse)
    .catch(error => {
			console.log('Update Account', error); //eslint-disable-line
		});
  }
}