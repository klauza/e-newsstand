import { ADMIN_LOGIN, ADMIN_LOGIN_ERROR } from './types';

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