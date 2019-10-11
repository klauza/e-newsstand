import { ADMIN_LOGIN, ADMIN_LOGIN_ERROR, ADMIN_LOGOUT } from './types';

export const adminLogin = (data) => async dispatch => {
  if(data.login==="login" && data.password==="password"){
    dispatch({
      type: ADMIN_LOGIN
    })
  } else{
    dispatch({
      type: ADMIN_LOGIN_ERROR
    })
  }
}

export const adminLogOut = () => async dispatch => {
  dispatch({
    type: ADMIN_LOGOUT
  })
}