import { ADMIN_LOGIN, ADMIN_LOGIN_ERROR, ADMIN_LOGOUT } from './types';
import axios from 'axios';


export const adminLogin = (credentials) => async dispatch => {
  // setLoading();
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try{
    const res = await axios.post('/api/admin/auth', credentials, config);

    dispatch({ type: ADMIN_LOGIN, payload: res.data });
    // loadUser();

  } catch(err){
    
    if(err.response.data.errors){
      dispatch({
        type: ADMIN_LOGIN_ERROR,
        payload: err.response.data.errors
      })
    } else {
      dispatch({
        type: ADMIN_LOGIN_ERROR,
        payload: "Invalid Password"
      })
    }
    
  }
}

// export const adminLogin = (data) => async dispatch => {
//   if(data.login==="login" && data.password==="password"){
//     dispatch({
//       type: ADMIN_LOGIN
//     })
//   } else{
//     dispatch({
//       type: ADMIN_LOGIN_ERROR
//     })
//   }
// }


export const adminLogOut = () => async dispatch => {
  dispatch({
    type: ADMIN_LOGOUT
  })
}
