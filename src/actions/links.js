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

// CRUD KELAS ACTION
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

// // CREATE

// export function saveKelas(data) {
//   return dispatch => {
//     return fetch (`${API_URL}/kelases', {
//       method: 'post',
//       body: JSON.stringify({"kelas":data}),
//       headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json"
//       }
//     }).then(handleResponse)
//     // .then(data => dispatch(setAccount(data)))
//     .catch(error => {
// 			console.log('Save Account', error); //eslint-disable-line
// 		});
//   }
// }

// // UPDATE

// export function updateKelas(id,data) {
//   return dispatch => {
//     return fetch (`${API_URL}/kelases/${id}`, {
//       method: 'patch',
//       body: JSON.stringify({"kelas":data}),
//       headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json"
//       }
//     }).then(handleResponse)
//     // .then(data => dispatch(setAccount(data)))
//     .catch(error => {
// 			console.log('Update Account', error); //eslint-disable-line
// 		});
//   }
// }

// // READ

// export function setKelas(kelas) {
//   return {
//     type: SET_KELAS,
//     kelas
//   }
// }

// export function fetchKelas(id) {
//   return dispatch => {
//     fetch(`${API_URL}/kelases/${id}`, {
//       headers: {
//         "Accept": "application/json"
//       }
//     })
//       .then(res => res.json())
//       .then(data => dispatch(setKelas(data)));
//   }
// }

// // DELETE

// export function deleteKelas(id) {
//   return dispatch => {
//     return fetch (`${API_URL}/kelases/${id}`, {
//       method: 'delete',
//       headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json"
//       }
//     }).then(handleResponse)
//     .catch(error => {
// 			console.log('Delete Account', error); //eslint-disable-line
// 		});
//   }
// }