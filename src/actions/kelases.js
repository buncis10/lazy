import { API_URL } from '../constants/api';
export const SET_KELASES = 'SET_KELASES';
export const SET_KELAS = 'SET_KELAS';

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

export function setKelases(kelases) {
  return {
    type: SET_KELASES,
    kelases
  }
}

export function fetchKelases() {
  return dispatch => {
    fetch(`${API_URL}/kelases`, {
      headers: {
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => dispatch(setKelases(data)));
  }
}

// CREATE

export function saveKelas(data) {
  return dispatch => {
    return fetch (`${API_URL}/kelases`, {
      method: 'post',
      body: JSON.stringify({"kelas":data}),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-user-email": akun.account.email,
        "X-user-token": akun.account.authentication_token
      }
    }).then(handleResponse)
    // .then(data => dispatch(setAccount(data)))
    .catch(error => {
			console.log('Save Kelas', error); //eslint-disable-line
		});
  }
}

// UPDATE

export function updateKelas(id,data) {
  return dispatch => {
    return fetch (`${API_URL}/kelases/${id}`, {
      method: 'patch',
      body: JSON.stringify({"kelas":data}),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-user-email": akun.account.email,
        "X-user-token": akun.account.authentication_token
      }
    }).then(handleResponse)
    // .then(data => dispatch(setAccount(data)))
    .catch(error => {
			console.log('Update Kelas', error); //eslint-disable-line
		});
  }
}

// READ

export function setKelas(kelas) {
  return {
    type: SET_KELAS,
    kelas
  }
}

export function fetchKelas(id) {
  return dispatch => {
    fetch(`${API_URL}/kelases/${id}`, {
      headers: {
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => dispatch(setKelas(data)));
  }
}

// DELETE

export function deleteKelas(id) {
  return dispatch => {
    return fetch (`${API_URL}/kelases/${id}`, {
      method: 'delete',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-user-email": akun.account.email,
        "X-user-token": akun.account.authentication_token
      }
    }).then(handleResponse)
    .catch(error => {
			console.log('Delete Kelas', error); //eslint-disable-line
		});
  }
}