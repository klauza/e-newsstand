import { combineReducers } from 'redux';
import basketReducer from './basketReducer';
import miscReducer from './miscReducer';
import alertReducer from './alertReducer';
 
export default combineReducers({
  basket: basketReducer,
  misc: miscReducer,
  alerts: alertReducer
});