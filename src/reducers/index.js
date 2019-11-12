// These are merely suggested actions & initial state structure
import {
  GET_RIDES_ASYNC,
  ADD_RIDE_ASYNC,
  EDIT_RIDE_ASYNC,
  DELETE_RIDE_ASYNC,
  SAVE_RIDE_ASYNC,
  LOGIN_USER_ASYNC,
  GET_USERS_ASYNC,
  ADD_USER_ASYNC,
  EDIT_USER_ASYNC,
  DELETE_USER_ASYNC,
  SAVE_USER_ASYNC,
  UPDATE_RIDE_TO_UPDATE,
  UPDATE_USER_TO_UPDATE
} from '../constants'

const initialState = {
  user: {},
  rides: [],
  rideToUpdate: {},
  users: [],
  userToUpdate: {},
  token: '',
  showUsers: true
}
// you may also choose to use 'localStorage' (better/standard industry practice)
// to manage token info instead of in your Redux store
// ref: https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RIDES_ASYNC:
      return {
        ...state,
        rides: action.payload,
        showUsers: false
      }
    case ADD_RIDE_ASYNC:
      return {
        ...state,
        rides: action.payload
      }
    case DELETE_RIDE_ASYNC:
      return {
        ...state,
        rides: action.payload
      }
    case EDIT_RIDE_ASYNC:
      return {
        ...state,
        rideToUpdate: action.payload
      }
    case SAVE_RIDE_ASYNC:
      return {
        ...state,
        rides: action.payload,
        rideToUpdate: {}
      }
    case GET_USERS_ASYNC:
      return {
        ...state,
        users: action.payload,
        showUsers: true
      }
    case ADD_USER_ASYNC:
      return {
        ...state,
        users: action.payload
      }
    case DELETE_USER_ASYNC:
      return {
        ...state,
        users: action.payload
      }
    case EDIT_USER_ASYNC:
      return {
        ...state,
        userToUpdate: action.payload
      }
    case SAVE_USER_ASYNC:
      return {
        ...state,
        users: action.payload,
        userToUpdate: {}
      }
    case UPDATE_RIDE_TO_UPDATE:
      return {
        ...state,
        rideToUpdate: action.payload
      }
    case UPDATE_USER_TO_UPDATE:
      return {
        ...state,
        userToUpdate: action.payload
      }
    default:
      return state;
  }
}

export default rootReducer;