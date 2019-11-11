
import { ADMIN_LOGIN, ADMIN_LOGIN_ERROR, ADMIN_LOGOUT, ADMIN_LOADED, AUTH_ERROR } from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

// LOAD ADMIN IF TOKEN EXISTS
export const loadAdmin = () => async dispatch => {
  // load token
  // setLoading();

  if(localStorage.token){
    setAuthToken(localStorage.token);
  }

  try{
    const res = await axios.get('/api/admin/auth');
    dispatch({ type: ADMIN_LOADED, payload: res.data });

  } catch(err){
    dispatch({ type: AUTH_ERROR})
  }
}

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
    loadAdmin();

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

export const adminLogOut = () => async dispatch => {
  dispatch({
    type: ADMIN_LOGOUT
  })
}
