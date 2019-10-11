import { ADMIN_LOGIN, ADMIN_LOGIN_ERROR, ADMIN_LOGOUT } from '../actions/types';

const initialState = {
  isAuthenticated: false
}

export default (state = initialState, action) => {
  switch(action.type){
    case ADMIN_LOGIN:
      return{
        ...state,
        isAuthenticated: true
      }

    case ADMIN_LOGIN_ERROR:
      return{
        ...state
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