import { ADMIN_LOGIN, ADMIN_LOGIN_ERROR } from '../actions/types';

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

    default:
      return state
  }
}