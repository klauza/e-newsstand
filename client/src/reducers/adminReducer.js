import { ADMIN_LOGIN, ADMIN_LOGIN_ERROR, ADMIN_LOGOUT } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  error: null,
  admin: null,
}

export default (state = initialState, action) => {
  switch(action.type){
    case ADMIN_LOGIN:
      return{
        ...state,
        ...action.payload,
        isAuthenticated: true,
        error: null,
      }

    case ADMIN_LOGIN_ERROR:
      return{
        ...state,
        error: action.payload
      }

    case ADMIN_LOGOUT:
      return{
        ...state,
        isAuthenticated: false
      }

    default:
      return state
  }
}