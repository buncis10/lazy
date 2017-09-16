import { API_URL } from '../constants/api';
export const SET_VIDEOS = 'SET_VIDEOS';
export const SET_VIDEO = 'SET_VIDEO';

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

// CRUD VIDEO ACTION
// INDEX

export function setVideos(videos) {
  return {
    type: SET_VIDEOS,
    videos
  }
}

export function fetchVideos(kelas_id) {
  return dispatch => {
    fetch(`${API_URL}/kelases/${kelas_id}/videos`, {
      headers: {
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => dispatch(setVideos(data)));
  }
}


// CREATE

export function saveVideo(kelas_id,data) {
  return (dispatch, getState) => {
    const akun = getState().account
    return fetch (`${API_URL}/kelases/${kelas_id}/videos`, {
      method: 'post',
      body: JSON.stringify({"video":data}),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-user-email": akun.account.email,
        "X-user-token": akun.account.authentication_token
      }
    }).then(handleResponse)
    .catch(error => {
			console.log('Save Video', error); //eslint-disable-line
		});
  }
}

// DELETE

export function deleteVideo(kelas_id,id) {
  return (dispatch, getState) => {
    const akun = getState().account
    return fetch (`${API_URL}/kelases/${kelas_id}/videos/${id}`, {
      method: 'delete',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-user-email": akun.account.email,
        "X-user-token": akun.account.authentication_token
      }
    }).then(handleResponse)
    .catch(error => {
			console.log('Delete Video', error); //eslint-disable-line
		});
  }
}

// READ

export function setVideo(video) {
  return {
    type: SET_VIDEO,
    video
  }
}

export function fetchVideo(kelas_id,id) {
  return dispatch => {
    fetch(`${API_URL}/kelases/${kelas_id}/videos/${id}`, {
      headers: {
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => dispatch(setVideo(data)));
  }
}


// UPDATE

export function updateVideo(kelas_id,id,data) {
  return (dispatch, getState) => {
    const akun = getState().account
    return fetch (`${API_URL}/kelases/${kelas_id}/videos/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({"video":data}),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-user-email": akun.account.email,
        "X-user-token": akun.account.authentication_token
      }
    }).then(handleResponse)
    .catch(error => {
			console.log('Update Video', error); //eslint-disable-line
		});
  }
}