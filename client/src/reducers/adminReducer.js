import { ADMIN_LOGIN, ADMIN_LOGIN_ERROR, ADMIN_LOGOUT, ADMIN_LOADED, AUTH_ERROR } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  error: null,
  admin: null,
}

export default (state = initialState, action) => {
  switch(action.type){
    case ADMIN_LOADED:
      return{
        ...state,
        isAuthenticated: true,
        admin: action.payload
      }
    case ADMIN_LOGIN:
      localStorage.setItem('token', action.payload.token);
      return{
        ...state,
        ...action.payload,
        isAuthenticated: true,
        error: null,
      }

    case ADMIN_LOGIN_ERROR:
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return{
        ...state,
        error: action.payload
      }

    case ADMIN_LOGOUT:
      localStorage.removeItem('token');
      return{
        ...state,
        isAuthenticated: false
      }

    default:
      return state
  }
}