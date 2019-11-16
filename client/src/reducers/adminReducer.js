import { ADMIN_LOGIN, ADMIN_LOGIN_ERROR, ADMIN_LOGOUT, ADMIN_LOADED, AUTH_ERROR } from '../actions/types';
import { ANIMATE_OUT_UPDATE_SCREEN, SET_UPDATING } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  error: null,
  admin: null,
  loading: true,
  isUpdating: false,
  isFadingOut: false
}

export default (state = initialState, action) => {
  switch(action.type){
    case ADMIN_LOADED:
      return{
        ...state,
        isAuthenticated: true,
        admin: action.payload,
        loading: false
      }
    case ADMIN_LOGIN:
      localStorage.setItem('token', action.payload.token);
      return{
        ...state,
        ...action.payload,
        isAuthenticated: true,
        error: null,
        loading: false,
        isUpdating: false,
        isFadingOut: true
      }

    case ADMIN_LOGIN_ERROR:
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return{
        ...state,
        error: action.payload,
        loading: true,
        isUpdating: false,
        isFadingOut: false
      }

    case ADMIN_LOGOUT:
      localStorage.removeItem('token');
      return{
        ...state,
        isAuthenticated: false,
        loading: true
      }

    case SET_UPDATING:
      return{
        ...state,
        isUpdating: action.payload,
        isFadingOut: false
      }
    case ANIMATE_OUT_UPDATE_SCREEN:
      return{
        ...state,
        isFadingOut: true
      }
    default:
      return state
  }
}