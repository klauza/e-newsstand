import { combineReducers } from 'redux';
import basketReducer from './basketReducer';
import miscReducer from './miscReducer';
import alertReducer from './alertReducer';
import adminReducer from './adminReducer';
 
export default combineReducers({
  basket: basketReducer,
  misc: miscReducer,
  alerts: alertReducer,
  admin: adminReducer
});