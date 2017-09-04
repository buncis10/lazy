import { API_URL } from '../constants/api';
export const SET_MATERIS = 'SET_MATERIS';
export const SET_MATERI = 'SET_MATERI';

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

// CRUD MATERI ACTION
// INDEX

export function setMateris(materis) {
  return {
    type: SET_MATERIS,
    materis
  }
}

export function fetchMateris(kelas_id) {
  return dispatch => {
    fetch(`${API_URL}/kelases/${kelas_id}/materis`, {
      headers: {
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => dispatch(setMateris(data)));
  }
}


// CREATE

export function saveMateri(kelas_id,data) {
  return (dispatch, getState) => {
    const akun = getState().account
    return fetch (`${API_URL}/kelases/${kelas_id}/materis`, {
      method: 'post',
      body: JSON.stringify({"materi":data}),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-user-email": "developer@user.com",
        "X-user-token": "tDdvkDdbDfJPMhTvTL7s"
      }
    }).then(handleResponse)
    .catch(error => {
			console.log('Save Materi', error); //eslint-disable-line
		});
  }
}

// DELETE

export function deleteMateri(kelas_id,id) {
  return (dispatch, getState) => {
    const akun = getState().account
    return fetch (`${API_URL}/kelases/${kelas_id}/materis/${id}`, {
      method: 'delete',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-user-email": "developer@user.com",
        "X-user-token": "tDdvkDdbDfJPMhTvTL7s"
      }
    }).then(handleResponse)
    .catch(error => {
			console.log('Delete Materi', error); //eslint-disable-line
		});
  }
}

// READ

export function setMateri(materi) {
  return {
    type: SET_MATERI,
    materi
  }
}

export function fetchMateri(kelas_id,id) {
  return dispatch => {
    fetch(`${API_URL}/kelases/${kelas_id}/materis/${id}`, {
      headers: {
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => dispatch(setMateri(data)));
  }
}


// UPDATE

export function updateMateri(kelas_id,id,data) {
  return (dispatch, getState) => {
    const akun = getState().account
    return fetch (`${API_URL}/kelases/${kelas_id}/materis/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({"materi":data}),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-user-email": "developer@user.com",
        "X-user-token": "tDdvkDdbDfJPMhTvTL7s"
      }
    }).then(handleResponse)
    .catch(error => {
			console.log('Update Materi', error); //eslint-disable-line
		});
  }
}