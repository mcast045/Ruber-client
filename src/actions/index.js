import axios from 'axios';
import {
  GET_RIDES_ASYNC,
  ADD_RIDE_ASYNC,
  EDIT_RIDE_ASYNC,
  SAVE_RIDE_ASYNC,
  DELETE_RIDE_ASYNC,
  LOGIN_USER_ASYNC,
  GET_USERS_ASYNC,
  ADD_USER_ASYNC,
  EDIT_USER_ASYNC,
  SAVE_USER_ASYNC,
  DELETE_USER_ASYNC
} from '../constants'


/**
 *    Here are some sample asynchronous action creators that you'll likely want to use
 *    to handle basic CRUD routes from your REST API / DB
 *
 *    Not all are necessary and they are not fully implemented as well.
 *    Treat this as guidance.
 */

// ####################### RIDES #######################

export const getRides = () => async dispatch => {
  console.log('get all rides action')
  let response = await axios.get('http://localhost:5000/api/rides');
  console.log(response);
  dispatch({ type: GET_RIDES_ASYNC, payload: response.data.data });
}

export const addRide = ride => async dispatch => {
  console.log(ride);
  let response = await axios.post('http://localhost:5000/api/rides', ride);
  console.log(response);
  dispatch({ type: ADD_RIDE_ASYNC, payload: response.data.data });
}

export const editRide = ride => async dispatch => {
  // console.log(ride);
  dispatch({ type: EDIT_RIDE_ASYNC, payload: ride });
}

export const saveRide = (id, ride) => async dispatch => {
  let response = await axios.put(`http://localhost:5000/api/rides/${id}`, ride);
  console.log(response);
  dispatch({ type: SAVE_RIDE_ASYNC, payload: response.data.data });
}

export const deleteRide = id => async dispatch => {
  console.log('id of item to delete: ' + id);
  let response = await axios.delete(`http://localhost:5000/api/rides/${id}`);
  console.log(response);
  dispatch({ type: DELETE_RIDE_ASYNC, payload: response.data.data });
}

// ####################### USERS #######################

export const loginUser = user => async dispatch => {
  let response = axios.post('');
  console.log(response);
  dispatch({ type: LOGIN_USER_ASYNC });
}

// export const getUser = userID => async dispatch => {
//   let response = await axios.get('');
//   console.log(response);
//   dispatch({ type: GET_USERS_ASYNC });
// }

export const getUsers = () => async dispatch => {
  let response = await axios.get('http://localhost:5000/api/users');
  console.log(response);
  dispatch({ type: GET_USERS_ASYNC, payload: response.data.data });
}

export const addUser = user => async dispatch => {
  console.log(user);
  let response = await axios.post('http://localhost:5000/api/users', user);
  console.log(response);
  dispatch({ type: ADD_USER_ASYNC, payload: response.data.data });

}

export const editUser = user => async dispatch => {
  // let response = await axios.put('', user);
  // console.log(response);
  // dispatch({ type: EDIT_USER_ASYNC });
  dispatch({ type: EDIT_USER_ASYNC, payload: user });
}

export const saveUser = (id, user) => async dispatch => {
  let response = await axios.put(`http://localhost:5000/api/users/${id}`, user);
  console.log(response);
  dispatch({ type: SAVE_USER_ASYNC, payload: response.data.data });
}

export const deleteUser = id => async dispatch => {
  let response = await axios.delete(`http://localhost:5000/api/users/${id}`);
  console.log(response);
  dispatch({ type: DELETE_USER_ASYNC, payload: response.data.data });
}
